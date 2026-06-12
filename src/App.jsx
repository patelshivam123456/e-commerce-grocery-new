import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAddress,
  addWalletFunds,
  addOrder,
  addToCart as addToCartAction,
  clearCart,
  closeShare,
  decreaseCart as decreaseCartAction,
  deductWalletFunds,
  openShare,
  setCart as setCartAction,
  setCardField,
  setCoupon as setCouponAction,
  setLocation as setLocationAction,
  setPaymentMethod,
  setShareStatus,
  setUpiId,
  toggleSavedOrder as toggleSavedOrderAction,
  toggleWishlist as toggleWishlistAction,
} from './store.js';
import { collectionMap, couponOptions, productCatalog, products, profile, recipeDetails } from './data/catalog.js';
import { categoryPath, collectionPath, getPaymentLabel, getRouteState, getUnitOptions, hydrateOrder, isPaymentReady, makeOrder, pagePaths, parseCartKey, productPath } from './utils/commerce.js';
import { Footer, Header, MobileNav } from './components/Layout.jsx';
import { CartDrawer, ShareDrawer } from './components/Drawers.jsx';
import { LocationModal, LoginModal } from './components/Modals.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage.jsx';
import { RecipeDetailPage } from './pages/RecipeDetailPage.jsx';
import { SeeAllPage } from './pages/SeeAllPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { OrderDetailPage, PlaceOrderPage, TrackOrderPage } from './pages/OrderPages.jsx';
import { ProfilePage, SavedOrdersPage, WishlistPage } from './pages/ProfilePages.jsx';

function App() {
  const dispatch = useDispatch();
  const {
    cart,
    wishlist,
    coupon,
    location,
    addresses,
    orders,
    savedOrders,
    walletBalance,
    payment,
    shareProductId,
    shareStatus,
  } = useSelector((state) => state.commerce);
  const initialRoute = getRouteState();
  const [page, setPage] = useState(initialRoute.page);
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInProfile, setLoggedInProfile] = useState(profile);
  const [pendingAction, setPendingAction] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [sort, setSort] = useState('popular');
  const [selectedProductId, setSelectedProductId] = useState(initialRoute.productId || 5);
  const [selectedRecipeId, setSelectedRecipeId] = useState(initialRoute.recipeId || 3);
  const [selectedCollectionId, setSelectedCollectionId] = useState(initialRoute.collectionId || 'similar-products');
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialRoute.categoryId || 'all');
  const [selectedOrderId, setSelectedOrderId] = useState('FD10291');

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([key, quantity]) => {
          const { productId, unit } = parseCartKey(key);
          const product = productCatalog.find((item) => item.id === productId);
          if (!product) return null;
          const unitOption = unit ? getUnitOptions(product).find((option) => option.unit === unit) : null;
          return {
            ...product,
            id: product.id,
            productId: product.id,
            cartKey: key,
            unit: unitOption?.unit || product.unit,
            price: unitOption?.price ?? product.price,
            oldPrice: unitOption?.oldPrice ?? product.oldPrice,
            quantity,
          };
        })
        .filter(Boolean),
    [cart],
  );

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 25;
  const handlingFee = subtotal > 0 ? 4 : 0;
  const matchedCoupon = couponOptions.find((item) => item.code === coupon && subtotal >= item.min);
  const discount = matchedCoupon ? matchedCoupon.discount ?? subtotal * matchedCoupon.rate : 0;
  const total = Math.max(0, subtotal + deliveryFee + handlingFee - discount);
  const selectedProduct = productCatalog.find((product) => product.id === selectedProductId) || products[0];
  const selectedRecipe = recipeDetails.find((recipe) => recipe.id === selectedRecipeId) || recipeDetails[0];
  const selectedOrder = hydrateOrder(orders.find((order) => order.id === selectedOrderId) || orders[0]);
  const hydratedOrders = orders.map(hydrateOrder);
  const wishlistProducts = productCatalog.filter((product) => wishlist.includes(product.id));
  const sharedProduct = productCatalog.find((product) => product.id === shareProductId);
  const selectedCollection = collectionMap[selectedCollectionId] || collectionMap['similar-products'];

  useEffect(() => {
    const handleRouteChange = () => {
      const route = getRouteState();
      setPage(route.page);
      if (route.productId) setSelectedProductId(route.productId);
      if (route.recipeId) setSelectedRecipeId(route.recipeId);
      if (route.collectionId) setSelectedCollectionId(route.collectionId);
      if (route.categoryId) setSelectedCategoryId(route.categoryId);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const byCategory = activeCategory === 'all' || product.category === activeCategory;
      const byQuery = `${product.name} ${product.tag} ${product.category}`.toLowerCase().includes(query.toLowerCase());
      return byCategory && byQuery;
    });

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'fastest') return a.time - b.time;
      return b.rating - a.rating;
    });
  }, [activeCategory, query, sort]);

  const navigate = (nextPage, routeOptions = {}) => {
    const path = routeOptions.path || (nextPage === 'product' ? productPath(selectedProductId) : pagePaths[nextPage] || '/');
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (productId) => {
    setSelectedProductId(productId);
    navigate('product', { path: productPath(productId) });
  };

  const openRecipe = (recipeId) => {
    setSelectedRecipeId(recipeId);
    navigate('recipe', { path: `/recipe/${recipeId}` });
  };

  const openCollection = (collectionId) => {
    setSelectedCollectionId(collectionId);
    navigate('see-all', { path: collectionPath(collectionId) });
  };

  const openCategoryPage = (categoryId = 'all') => {
    setSelectedCategoryId(categoryId);
    navigate('categories', { path: categoryPath(categoryId) });
  };

  const openOrder = (orderId) => {
    setSelectedOrderId(orderId);
    navigate('order-detail');
  };

  const addToCart = (productId) => {
    dispatch(addToCartAction(productId));
  };

  const decreaseCart = (productId) => {
    dispatch(decreaseCartAction(productId));
  };

  const toggleWishlist = (productId) => {
    dispatch(toggleWishlistAction(productId));
  };

  const shareProductById = (productId) => {
    dispatch(openShare(productId));
  };

  const handleLogin = (phone) => {
    setLoggedInProfile((current) => ({ ...current, phone: `+91 ${phone}` }));
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    if (pendingAction === 'checkout') {
      setPendingAction(null);
      setIsCartOpen(false);
      navigate('checkout');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setPendingAction(null);
    navigate('home');
  };

  const requireLogin = (nextAction) => {
    if (isLoggedIn) return true;
    setPendingAction(nextAction);
    setIsLoginOpen(true);
    return false;
  };

  const handleCartShare = () => {
    const productId = cartItems[0]?.productId || cartItems[0]?.id;
    if (!productId) return;
    dispatch(openShare(productId));
  };

  const handleCartProductOpen = (productId) => {
    setIsCartOpen(false);
    openProduct(productId);
  };

  const handleCartShopNow = () => {
    setIsCartOpen(false);
    navigate('home');
  };

  const placeOrder = () => {
    if (!cartItems.length) return;
    if (!requireLogin('checkout')) return;
    if (!isPaymentReady(payment, total, walletBalance)) {
      setPaymentError(payment.method === 'Wallet' ? 'Insufficient Just Harvst wallet balance.' : 'Please complete payment details before placing the order.');
      navigate('checkout');
      return;
    }
    const id = `FD${Math.floor(10000 + Math.random() * 89999)}`;
    const order = makeOrder({
      id,
      items: cartItems,
      location,
      status: 'Order placed',
      minutes: 9,
      total,
      payment: getPaymentLabel(payment),
    });
    dispatch(addOrder(order));
    if (payment.method === 'Wallet') {
      dispatch(deductWalletFunds(total));
    }
    setSelectedOrderId(id);
    dispatch(clearCart());
    dispatch(setCouponAction(''));
    setPaymentError('');
    setIsCartOpen(false);
    navigate('place-order');
  };

  const reorder = (order) => {
    const nextCart = {};
    order.items.forEach((item) => {
      nextCart[item.cartKey || item.id] = item.quantity;
    });
    dispatch(setCartAction(nextCart));
    if (requireLogin('checkout')) navigate('checkout');
  };

  const toggleSavedOrder = (orderId) => {
    dispatch(toggleSavedOrderAction(orderId));
  };

  return (
    <div className="min-h-screen bg-paper pt-[112px] sm:pt-0">
      <Header
        itemCount={itemCount}
        location={location}
        query={query}
        setQuery={setQuery}
        navigate={navigate}
        onCart={() => setIsCartOpen(true)}
        onLogin={() => setIsLoginOpen(true)}
        onLocation={() => setIsLocationOpen(true)}
        isLoggedIn={isLoggedIn}
        profile={loggedInProfile}
        onLogout={logout}
        wishlistCount={wishlist.length}
      />

      {page === 'home' && (
        <HomePage
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          visibleProducts={visibleProducts}
          sort={sort}
          setSort={setSort}
          location={location}
          cart={cart}
          wishlist={wishlist}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          toggleWishlist={toggleWishlist}
          openProduct={openProduct}
          shareProduct={shareProductById}
          onSeeAllCategories={() => openCategoryPage(activeCategory)}
          clearFilters={() => {
            setQuery('');
            setActiveCategory('all');
          }}
          onLocation={() => setIsLocationOpen(true)}
        />
      )}

      {page === 'categories' && (
        <CategoryPage
          activeCategory={selectedCategoryId}
          setActiveCategory={(categoryId) => {
            setSelectedCategoryId(categoryId);
            window.history.replaceState({}, '', categoryPath(categoryId));
          }}
          query={query}
          sort={sort}
          cart={cart}
          wishlist={wishlist}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          toggleWishlist={toggleWishlist}
          openProduct={openProduct}
          shareProduct={shareProductById}
          onBack={() => navigate('home')}
        />
      )}

      {page === 'product' && (
        <ProductDetailPage
          product={selectedProduct}
          related={products.filter((item) => item.category === selectedProduct.category && item.id !== selectedProduct.id).slice(0, 4)}
          cart={cart}
          wished={wishlist.includes(selectedProduct.id)}
          onBack={() => navigate('home')}
          onWish={() => toggleWishlist(selectedProduct.id)}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          openProduct={openProduct}
          openRecipe={openRecipe}
          openCollection={openCollection}
          onShare={() => dispatch(openShare(selectedProduct.id))}
          onGoToCart={() => setIsCartOpen(true)}
        />
      )}

      {page === 'recipe' && (
        <RecipeDetailPage
          recipe={selectedRecipe}
          onBack={() => openProduct(selectedProduct.id)}
          openRecipe={openRecipe}
        />
      )}

      {page === 'see-all' && (
        <SeeAllPage
          collection={selectedCollection}
          cart={cart}
          wishlist={wishlist}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          toggleWishlist={toggleWishlist}
          openProduct={openProduct}
          openRecipe={openRecipe}
          shareProduct={shareProductById}
          onBack={() => openProduct(selectedProduct.id)}
        />
      )}

      {page === 'checkout' && (
        <CheckoutPage
          items={cartItems}
          location={location}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          handlingFee={handlingFee}
          discount={discount}
          total={total}
          coupon={coupon}
          setCoupon={(value) => dispatch(setCouponAction(value))}
          payment={payment}
          walletBalance={walletBalance}
          paymentError={paymentError}
          setPaymentError={setPaymentError}
          setPaymentMethod={(method) => dispatch(setPaymentMethod(method))}
          setUpiId={(upiId) => dispatch(setUpiId(upiId))}
          setCardField={(field, value) => dispatch(setCardField({ field, value }))}
          addToCart={addToCart}
          decreaseCart={decreaseCart}
          onBack={() => navigate('home')}
          onPlaceOrder={placeOrder}
          onLocation={() => setIsLocationOpen(true)}
        />
      )}

      {page === 'place-order' && (
        <PlaceOrderPage order={selectedOrder} onTrack={() => navigate('track-order')} onDetail={() => navigate('order-detail')} onHome={() => navigate('home')} />
      )}

      {page === 'track-order' && (
        <TrackOrderPage order={selectedOrder} onBack={() => navigate('order-detail')} onHome={() => navigate('home')} />
      )}

      {page === 'order-detail' && (
        <OrderDetailPage
          order={selectedOrder}
          saved={savedOrders.includes(selectedOrder.id)}
          onBack={() => navigate('profile')}
          onTrack={() => navigate('track-order')}
          onReorder={() => reorder(selectedOrder)}
          onSave={() => toggleSavedOrder(selectedOrder.id)}
        />
      )}

      {page === 'profile' && (
        <ProfilePage profile={loggedInProfile} walletBalance={walletBalance} onAddWalletFunds={(amount) => dispatch(addWalletFunds(amount))} orders={hydratedOrders} savedOrders={savedOrders} wishlistCount={wishlist.length} openOrder={openOrder} navigate={navigate} onLogout={logout} isLoggedIn={isLoggedIn} onLogin={() => setIsLoginOpen(true)} />
      )}

      {page === 'saved-orders' && (
        <SavedOrdersPage orders={hydratedOrders.filter((order) => savedOrders.includes(order.id))} openOrder={openOrder} reorder={reorder} onBack={() => navigate('profile')} />
      )}

      {page === 'wishlist' && (
        <WishlistPage products={wishlistProducts} cart={cart} addToCart={addToCart} decreaseCart={decreaseCart} toggleWishlist={toggleWishlist} openProduct={openProduct} shareProduct={shareProductById} onBack={() => navigate('home')} />
      )}

      <Footer navigate={navigate} />

      <MobileNav navigate={navigate} onLocation={() => setIsLocationOpen(true)} onLogin={() => setIsLoginOpen(true)} onCart={() => setIsCartOpen(true)} itemCount={itemCount} currentPage={page} />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        handlingFee={handlingFee}
        discount={discount}
        total={total}
        coupon={coupon}
        setCoupon={(value) => dispatch(setCouponAction(value))}
        addToCart={addToCart}
        decreaseCart={decreaseCart}
        onShare={handleCartShare}
        onShareProduct={shareProductById}
        onOpenProduct={handleCartProductOpen}
        onShopNow={handleCartShopNow}
        onCheckout={() => {
          if (!requireLogin('checkout')) return;
          setIsCartOpen(false);
          navigate('checkout');
        }}
      />

      <LoginModal open={isLoginOpen} onClose={() => { setIsLoginOpen(false); setPendingAction(null); }} onLogin={handleLogin} />
      <ShareDrawer
        product={sharedProduct}
        status={shareStatus}
        onClose={() => dispatch(closeShare())}
        onStatus={(status) => dispatch(setShareStatus(status))}
      />
      <LocationModal
        open={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        addresses={addresses}
        setLocation={(value) => dispatch(setLocationAction(value))}
        addAddress={(address) => dispatch(addAddress(address))}
      />
    </div>
  );
}

export default App;

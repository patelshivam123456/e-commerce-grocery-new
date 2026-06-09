import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bike,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  CreditCard,
  Gift,
  Heart,
  Home,
  Linkedin,
  LocateFixed,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  ReceiptText,
  Search,
  Send,
  Share2,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Smartphone,
  Tag,
  Trash2,
  UserRound,
  WalletCards,
  X,
} from 'lucide-react';
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

const categories = [
  { id: 'all', name: 'All', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80' },
  { id: 'vegetables', name: 'Vegetables', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=300&q=80' },
  { id: 'fruits', name: 'Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=300&q=80' },
  { id: 'dairy', name: 'Dairy', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=300&q=80' },
  { id: 'bakery', name: 'Bakery', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80' },
  { id: 'snacks', name: 'Snacks', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=300&q=80' },
  { id: 'drinks', name: 'Cold Drinks', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=300&q=80' },
  { id: 'household', name: 'Household', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80' },
  { id: 'personal', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=300&q=80' },
  { id: 'instant', name: 'Instant Food', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80' },
];

const products = [
  { id: 1, name: 'Fresh Tomato', category: 'vegetables', price: 28, oldPrice: 38, unit: '500 g', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80', tag: 'Daily fresh', detail: 'Juicy farm tomatoes for curries, salads and quick sandwiches.' },
  { id: 2, name: 'Green Capsicum', category: 'vegetables', price: 42, oldPrice: 58, unit: '250 g', rating: 4.4, time: 9, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=500&q=80', tag: 'Crunchy', detail: 'Crisp capsicum with a fresh bite for stir fries and pizza toppings.' },
  { id: 3, name: 'Banana Robusta', category: 'fruits', price: 54, oldPrice: 65, unit: '6 pcs', rating: 4.7, time: 7, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=500&q=80', tag: 'Best value', detail: 'Naturally sweet bananas, ready for breakfast bowls and shakes.' },
  { id: 4, name: 'Royal Gala Apple', category: 'fruits', price: 169, oldPrice: 199, unit: '4 pcs', rating: 4.6, time: 10, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=500&q=80', tag: 'Imported', detail: 'Crisp red apples with a sweet finish and clean crunch.' },
  { id: 5, name: 'Amul Cow Milk', category: 'dairy', price: 31, oldPrice: 31, unit: '500 ml', rating: 4.8, time: 6, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80', tag: 'Homogenized', detail: 'Pure cow milk for tea, coffee, cereal and everyday cooking.' },
  { id: 6, name: 'Greek Yogurt', category: 'dairy', price: 95, oldPrice: 120, unit: '400 g', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80', tag: 'Protein rich', detail: 'Thick creamy yogurt with a protein-rich texture.' },
  { id: 7, name: 'Brown Bread', category: 'bakery', price: 48, oldPrice: 55, unit: '400 g', rating: 4.4, time: 11, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80', tag: 'Soft baked', detail: 'Soft sliced brown bread for toast, sandwiches and snacks.' },
  { id: 8, name: 'Butter Croissant', category: 'bakery', price: 110, oldPrice: 140, unit: '2 pcs', rating: 4.7, time: 14, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80', tag: 'Bakery pick', detail: 'Flaky butter croissants baked for a cafe-style treat.' },
  { id: 9, name: 'Classic Salted Chips', category: 'snacks', price: 30, oldPrice: 35, unit: '52 g', rating: 4.2, time: 7, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=500&q=80', tag: 'Party pack', detail: 'Classic salted chips for quick cravings and movie nights.' },
  { id: 10, name: 'Dark Chocolate Bar', category: 'snacks', price: 145, oldPrice: 165, unit: '100 g', rating: 4.8, time: 8, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80', tag: '55% cocoa', detail: 'Rich dark chocolate with a smooth cocoa finish.' },
  { id: 11, name: 'Sparkling Lemonade', category: 'drinks', price: 89, oldPrice: 110, unit: '750 ml', rating: 4.3, time: 9, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80', tag: 'Chilled', detail: 'Refreshing sparkling lemonade served cold.' },
  { id: 12, name: 'Cold Coffee Can', category: 'drinks', price: 125, oldPrice: 150, unit: '240 ml', rating: 4.6, time: 7, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80', tag: 'Cafe style', detail: 'Ready-to-drink cold coffee with a creamy finish.' },
  { id: 13, name: 'Laundry Liquid', category: 'household', price: 249, oldPrice: 320, unit: '1 l', rating: 4.5, time: 13, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80', tag: 'Deep clean', detail: 'Liquid detergent for everyday laundry and fresh fragrance.' },
  { id: 14, name: 'Dishwash Gel', category: 'household', price: 159, oldPrice: 199, unit: '750 ml', rating: 4.4, time: 12, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=500&q=80', tag: 'Lemon fresh', detail: 'Grease-cutting dishwash gel with lemon freshness.' },
  { id: 15, name: 'Aloe Face Wash', category: 'personal', price: 175, oldPrice: 220, unit: '100 ml', rating: 4.3, time: 10, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80', tag: 'Gentle care', detail: 'Mild aloe face wash for daily cleansing.' },
  { id: 16, name: 'Herbal Shampoo', category: 'personal', price: 199, oldPrice: 260, unit: '180 ml', rating: 4.5, time: 11, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=500&q=80', tag: 'No parabens', detail: 'Herbal shampoo for soft and clean hair.' },
  { id: 17, name: 'Masala Noodles', category: 'instant', price: 56, oldPrice: 70, unit: '280 g', rating: 4.6, time: 6, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=500&q=80', tag: '2-minute', detail: 'Spicy masala noodles for a quick hot meal.' },
  { id: 18, name: 'Paneer Tikka Wrap', category: 'instant', price: 149, oldPrice: 179, unit: '1 pc', rating: 4.4, time: 12, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=500&q=80', tag: 'Heat & eat', detail: 'Ready wrap stuffed with paneer tikka and sauces.' },
];

const banners = [
  { title: 'Paan corner', copy: 'Fresheners and mints', accent: 'bg-[#064536]', image: 'https://images.unsplash.com/photo-1615485925763-86786288908a?auto=format&fit=crop&w=800&q=80' },
  { title: 'Weekend munchies', copy: 'Snacks and drinks', accent: 'bg-[#812326]', image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=800&q=80' },
  { title: 'Fresh breakfast', copy: 'Bread, eggs and milk', accent: 'bg-[#255f7a]', image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80' },
];

const heroSlides = [
  {
    title: 'Stock up on daily essentials',
    copy: 'Get farm-fresh goodness and a range of fruits, vegetables, eggs and more',
    badge: 'Fresh deals',
    bg: 'bg-[linear-gradient(100deg,#0a8735_0%,#159447_43%,#d8ff85_100%)]',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Breakfast favorites delivered',
    copy: 'Shop milk, bread, fruit, eggs and cafe-style morning picks in minutes',
    badge: 'Morning essentials',
    bg: 'bg-[linear-gradient(100deg,#075f7c_0%,#1287a8_44%,#d8f7ff_100%)]',
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Weekend munchies are here',
    copy: 'Load up on chips, chocolate, cold drinks and quick bites for every plan',
    badge: 'Instant munchies',
    bg: 'bg-[linear-gradient(100deg,#8a1f28_0%,#b8323a_46%,#ffd0a0_100%)]',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Home care in one quick cart',
    copy: 'Find laundry, dish care, personal care and pantry refills without the wait',
    badge: 'Household care',
    bg: 'bg-[linear-gradient(100deg,#0d6b3c_0%,#16965b_45%,#caf7d8_100%)]',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80',
  },
];

const couponOptions = [
  { code: 'FRESH50', label: 'Rs 50 off above Rs 499', min: 499, discount: 50 },
  { code: 'SUPER10', label: '10% off above Rs 799', min: 799, rate: 0.1 },
];

const milkShelfProducts = [
  { name: 'Mother Dairy Cow Milk', unit: '500 ml', price: 31, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Cow Milk', unit: '1 ltr', price: 82, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Gold Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Toned Milk', unit: '200 ml', price: 17, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Country Delight Cow Milk', unit: '450 ml', price: 46, oldPrice: 48, image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Homogenised Toned Milk', unit: '1 ltr', price: 77, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Moti Toned Milk', unit: '450 ml', price: 33, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
];

const topMilkProducts = [
  { name: 'Amul Taaza Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Gold Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Country Delight Cow Milk', unit: '450 ml', price: 46, oldPrice: 48, image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Buffalo A2 Milk', unit: '500 ml', price: 40, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
];

const peopleAlsoBought = [
  { name: 'Amul Masti Pouch Curd', unit: '390 g', price: 35, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=420&q=80' },
  { name: 'Harvest Gold 100% Atta Whole Wheat Bread', unit: '450 g', price: 62, oldPrice: 65, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Fresh Malai Paneer', unit: '200 g', price: 95, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Probiotic Tadka Buttermilk', unit: '270 ml', price: 10, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=420&q=80' },
  { name: 'Desi Tomato (Tamatar)', unit: '500 g', price: 31, oldPrice: 39, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=420&q=80' },
  { name: 'Britannia NutriChoice Digestive Biscuit', unit: '125 g', price: 25, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Salted Butter', unit: '100 g', price: 60, image: 'https://images.unsplash.com/photo-1589985270958-4b7bb135bc9d?auto=format&fit=crop&w=420&q=80' },
  { name: 'Tata Tea Premium Tea', unit: '100 g', price: 40, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=420&q=80' },
];

const cowMilkRecipes = [
  { id: 1, name: 'Beetroot Halwa', image: 'https://images.unsplash.com/photo-1605197161470-5d2a9af87268?auto=format&fit=crop&w=420&q=80' },
  { id: 2, name: 'Badam Phirni', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=420&q=80' },
  { id: 3, name: 'Barley Kheer', image: 'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?auto=format&fit=crop&w=420&q=80' },
  { id: 4, name: 'Angoori Rasmalai', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=420&q=80' },
  { id: 5, name: 'Bread Pudding', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=420&q=80' },
  { id: 6, name: 'Avocado Smoothie', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=420&q=80' },
  { id: 7, name: 'Almond Kheer', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=420&q=80' },
  { id: 8, name: 'Apple Kheer', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=420&q=80' },
  { id: 9, name: 'Cherry Kulfi', image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=420&q=80' },
  { id: 10, name: 'Kheer', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=420&q=80' },
  { id: 11, name: 'Blueberry Kulfi', image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=420&q=80' },
  { id: 12, name: 'Cherry Kheer', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=420&q=80' },
  { id: 13, name: 'Almond Butter Smoothie', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=420&q=80' },
  { id: 14, name: 'Blueberry Halwa', image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=420&q=80' },
  { id: 15, name: 'Bhutte Ka Kees', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=420&q=80' },
  { id: 16, name: 'Carrot Kheer', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=420&q=80' },
];

const recipeDetails = cowMilkRecipes.map((recipe, index) => ({
  ...recipe,
  cookTime: index === 2 ? '30min' : `${20 + (index % 5) * 5}min`,
  servings: index === 2 ? 6 : 2 + (index % 4),
  calories: index === 2 ? 280 : 190 + (index % 6) * 35,
  ingredients: index === 2
    ? ['Barley', 'Milk', 'Cashews', 'Kishmish', 'Ghee', 'Sugar', 'Almonds', 'Cardamom powder']
    : ['Milk', 'Sugar', 'Ghee', 'Nuts', recipe.name.split(' ')[0]],
  steps: index === 2
    ? [
      'Rinse 100 grams of barley thoroughly under running water and soak it in water for 4-5 hours or overnight.',
      'Drain the soaked barley and pressure cook it with 500 ml of water for 4-5 whistles or until it becomes soft and tender.',
      'Heat ghee in a pan, add the cooked barley, milk and sugar, then simmer until creamy.',
      'Stir in cardamom powder, cashews, kishmish and almonds. Serve warm or chilled.',
    ]
    : [
      `Warm milk in a heavy pan and add the ${recipe.name.toLowerCase()} base.`,
      'Cook on low heat until the mixture thickens and turns glossy.',
      'Finish with ghee, nuts and cardamom before serving.',
    ],
}));

const railProducts = [
  ...milkShelfProducts.map((product, index) => ({ ...product, id: 101 + index, category: 'dairy', rating: 4.5, time: 8, tag: 'Milk shelf', detail: `${product.name} delivered fresh for everyday use.` })),
  ...topMilkProducts.map((product, index) => ({ ...product, id: 201 + index, category: 'dairy', rating: 4.6, time: 8, tag: 'Top pick', detail: `${product.name} is a popular dairy essential.` })),
  ...peopleAlsoBought.map((product, index) => ({ ...product, id: 301 + index, category: index < 4 ? 'dairy' : 'snacks', rating: 4.4, time: 9, tag: 'Frequently bought', detail: `${product.name} pairs well with your grocery basket.` })),
];

const productCatalog = [...products, ...railProducts];

const profile = {
  name: 'Rahul Sharma',
  phone: '+91 98765 43210',
  email: 'rahul@example.com',
  wallet: 320,
};

const formatRupees = (value) => `Rs ${Math.round(value).toLocaleString('en-IN')}`;
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const cartKeyFor = (productId, unit) => `${productId}::${unit}`;
const parseCartKey = (key) => {
  const [productId, unit] = String(key).split('::');
  return { productId: Number(productId), unit };
};
const productPath = (productId) => {
  const product = productCatalog.find((item) => item.id === productId) || products[0];
  return `/prn/${slugify(product.name)}/prid/${product.id}`;
};
const productUrl = (product) => `${window.location.origin}${productPath(product.id)}`;
const collectionPath = (collectionId) => `/see-all/${collectionId}`;

const collectionMap = {
  'similar-products': {
    title: 'Similar products',
    products: railProducts.slice(0, milkShelfProducts.length),
  },
  'top-category': {
    title: 'Top 10 products in this category',
    products: railProducts.slice(milkShelfProducts.length, milkShelfProducts.length + topMilkProducts.length),
  },
  'people-also-bought': {
    title: 'People also bought',
    products: railProducts.slice(milkShelfProducts.length + topMilkProducts.length),
  },
  recipes: {
    title: 'Recipes for you',
    recipes: recipeDetails,
  },
};

function getProductImages(product) {
  const name = product.name.toLowerCase();
  const byProductType = [
    {
      match: ['bread', 'toast', 'loaf'],
      images: [
        'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['milk', 'buttermilk'],
      images: [
        'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['curd', 'yogurt'],
      images: [
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['paneer', 'cheese'],
      images: [
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['noodle', 'ramen'],
      images: [
        'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['tomato'],
      images: [
        'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=700&q=80',
      ],
    },
    {
      match: ['apple'],
      images: [
        'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1603596310923-dbb12732f9c3?auto=format&fit=crop&w=700&q=80',
      ],
    },
  ];
  const matchedSet = byProductType.find((set) => set.match.some((keyword) => name.includes(keyword)));
  if (matchedSet) {
    return [...new Set([product.image, ...matchedSet.images])].filter(Boolean);
  }

  const byCategory = {
    dairy: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
    ],
    instant: [
      'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80',
    ],
    bakery: [
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    ],
  };
  const fallback = [
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1523473827532-2a64d0d36748?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80',
  ];
  return [product.image, ...(byCategory[product.category] || fallback)].filter(Boolean);
}

function getUnitOptions(product) {
  const baseOldPrice = product.oldPrice && product.oldPrice > product.price ? product.oldPrice : Math.round(product.price * 1.22);
  const baseDiscount = Math.max(0, Math.round(((baseOldPrice - product.price) / baseOldPrice) * 100));
  const unit = product.unit.toLowerCase().trim();
  const parsed = unit.match(/([\d.]+)\s*(kg|g|ltr|l|ml|pcs|pc)/);
  let secondUnit = '2 pcs';
  let ratio = 2;

  if (parsed) {
    const amount = Number(parsed[1]);
    const unitType = parsed[2];
    if (unitType === 'pcs' || unitType === 'pc') {
      const nextAmount = amount > 2 ? Math.max(1, Math.floor(amount / 2)) : amount * 2;
      secondUnit = `${nextAmount} pcs`;
      ratio = nextAmount / amount;
    } else if (unitType === 'ml') {
      secondUnit = amount >= 1000 ? '500 ml' : '1 ltr';
      ratio = (amount >= 1000 ? 500 : 1000) / amount;
    } else if (unitType === 'ltr' || unitType === 'l') {
      secondUnit = '500 ml';
      ratio = 0.5 / amount;
    } else if (unitType === 'g') {
      secondUnit = amount >= 1000 ? '500 g' : '1 kg';
      ratio = (amount >= 1000 ? 500 : 1000) / amount;
    } else if (unitType === 'kg') {
      secondUnit = '500 g';
      ratio = 0.5 / amount;
    }
  }

  const scaledPrice = Math.max(1, Math.round(product.price * ratio));
  const scaledOldPrice = Math.max(scaledPrice + 1, Math.round(baseOldPrice * ratio));

  return [
    { unit: product.unit, price: product.price, oldPrice: baseOldPrice, discount: baseDiscount },
    { unit: secondUnit, price: scaledPrice, oldPrice: scaledOldPrice, discount: Math.max(0, Math.round(((scaledOldPrice - scaledPrice) / scaledOldPrice) * 100)) },
  ];
}

function hydrateOrder(order) {
  if (!order) return order;
  return {
    ...order,
    items: order.items.map((item) => {
      const product = productCatalog.find((productItem) => productItem.id === item.id);
      return product ? { ...product, ...item, quantity: item.quantity } : item;
    }),
  };
}

async function reverseGeocode(latitude, longitude) {
  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    if (!response.ok) throw new Error('Reverse geocode failed');
    const data = await response.json();
    const parts = [data.locality, data.city, data.principalSubdivision].filter(Boolean);
    return parts.length ? [...new Set(parts)].join(', ') : 'Current location';
  } catch {
    return 'Current location';
  }
}

const pagePaths = {
  home: '/',
  checkout: '/checkout',
  'place-order': '/order-success',
  'track-order': '/track-order',
  'order-detail': '/order-detail',
  profile: '/profile',
  'saved-orders': '/saved-orders',
  wishlist: '/wishlist',
};

function getRouteState() {
  const { pathname } = window.location;
  const productMatch = pathname.match(/^\/(?:product|prn\/[^/]+\/prid)\/(\d+)/);
  const recipeMatch = pathname.match(/^\/recipe\/(\d+)/);
  const collectionMatch = pathname.match(/^\/see-all\/([^/]+)/);

  if (productMatch) return { page: 'product', productId: Number(productMatch[1]) };
  if (recipeMatch) return { page: 'recipe', recipeId: Number(recipeMatch[1]) };
  if (collectionMatch) return { page: 'see-all', collectionId: collectionMatch[1] };
  return { page: Object.entries(pagePaths).find(([, path]) => path === pathname)?.[0] || 'home' };
}

async function shareProduct(product) {
  const shareData = {
    title: product.name,
    text: `Buy ${product.name} (${product.unit}) for ${formatRupees(product.price)}`,
    url: productUrl(product),
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return 'Shared';
  }

  await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
  return 'Link copied';
}

function isPaymentReady(payment, total = 0, walletBalance = 0) {
  if (payment.method === 'Cash') return true;
  if (payment.method === 'Wallet') return walletBalance >= total;
  if (payment.method === 'UPI') return /^[\w.-]+@[\w.-]+$/.test(payment.upiId.trim());
  if (payment.method === 'Card') {
    const digits = payment.card.number.replace(/\s/g, '');
    return digits.length >= 12 && payment.card.name.trim() && /^\d{2}\/\d{2}$/.test(payment.card.expiry) && /^\d{3,4}$/.test(payment.card.cvv);
  }
  return false;
}

function getPaymentLabel(payment) {
  if (payment.method === 'Wallet') return 'Paid via FreshDrop wallet';
  if (payment.method === 'Cash') return 'Cash on delivery';
  if (payment.method === 'UPI') return `Paid via UPI${payment.upiId ? ` (${payment.upiId})` : ''}`;
  const digits = payment.card.number.replace(/\s/g, '');
  return `Paid via Card${digits ? ` ending ${digits.slice(-4)}` : ''}`;
}

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

  const handleCartShare = async () => {
    dispatch(openShare(selectedProduct.id));
  };

  const placeOrder = () => {
    if (!cartItems.length) return;
    if (!requireLogin('checkout')) return;
    if (!isPaymentReady(payment, total, walletBalance)) {
      setPaymentError(payment.method === 'Wallet' ? 'Insufficient FreshDrop wallet balance.' : 'Please complete payment details before placing the order.');
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
    <div className="min-h-screen bg-paper">
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
          clearFilters={() => {
            setQuery('');
            setActiveCategory('all');
          }}
          onLocation={() => setIsLocationOpen(true)}
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
        <WishlistPage products={wishlistProducts} cart={cart} addToCart={addToCart} decreaseCart={decreaseCart} toggleWishlist={toggleWishlist} openProduct={openProduct} onBack={() => navigate('home')} />
      )}

      <Footer navigate={navigate} />

      <MobileNav navigate={navigate} onLocation={() => setIsLocationOpen(true)} onLogin={() => setIsLoginOpen(true)} onCart={() => setIsCartOpen(true)} itemCount={itemCount} />

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

function makeOrder({ id, items, location, status, minutes, total, payment = 'Paid via UPI' }) {
  const now = new Date();
  return {
    id,
    items,
    location,
    status,
    minutes,
    total,
    placedAt: now.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
    payment,
    address: `Flat 204, Green Avenue, ${location}`,
  };
}

function Header({ itemCount, location, query, setQuery, navigate, onCart, onLogin, onLocation, isLoggedIn, profile, onLogout, wishlistCount }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:px-6">
        <button className="flex shrink-0 items-center gap-1 rounded-md bg-limepop px-3 py-2 text-xl font-black tracking-normal text-ink" onClick={() => navigate('home')}>
          Fresh<span className="text-leaf">Drop</span>
        </button>
        <button className="hidden max-w-[240px] items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-left sm:flex" onClick={onLocation}>
          <Home className="h-5 w-5 text-leaf" />
          <span className="min-w-0">
            <span className="block text-xs font-bold">Delivery in 9 minutes</span>
            <span className="block truncate text-xs text-black/60">{location}</span>
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
        <label className="relative flex min-w-0 flex-1 items-center">
          <Search className="pointer-events-none absolute left-3 h-5 w-5 text-black/45" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Search "milk", "bread", "chips"' className="h-12 w-full rounded-md border border-black/10 bg-[#f7f7f2] pl-10 pr-4 text-sm outline-none ring-leaf/20 transition focus:bg-white focus:ring-4" />
        </label>
        {isLoggedIn ? (
          <div className="relative hidden md:block">
            <button className="flex h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold hover:bg-black/5" onClick={() => setIsAccountOpen((open) => !open)}>
              <UserRound className="h-5 w-5" />
              Account
              <ChevronDown className={`h-4 w-4 transition ${isAccountOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAccountOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-md border border-black/10 bg-white p-4 shadow-soft">
                <h2 className="text-lg font-black">My Account</h2>
                <p className="mt-1 text-sm text-black/55">{profile.phone}</p>
                <div className="mt-4 grid gap-1 text-sm">
                  <AccountMenuItem label="My Orders" onClick={() => { setIsAccountOpen(false); navigate('profile'); }} />
                  <AccountMenuItem label="Wishlist" onClick={() => { setIsAccountOpen(false); navigate('wishlist'); }} />
                  <AccountMenuItem label="Saved Addresses" onClick={() => { setIsAccountOpen(false); onLocation(); }} />
                  <AccountMenuItem label="Account Privacy" onClick={() => { setIsAccountOpen(false); navigate('profile'); }} />
                  <AccountMenuItem label="Log Out" onClick={() => { setIsAccountOpen(false); onLogout(); }} />
                </div>
                <div className="mt-4 rounded-md bg-[#f7f7f2] p-3">
                  <p className="text-sm font-black">Simple way to get groceries at your doorstep</p>
                  <p className="mt-1 text-xs text-black/55">Login stays active until you choose Log Out.</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="hidden h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold hover:bg-black/5 md:flex" onClick={onLogin}>
            <UserRound className="h-5 w-5" />
            Login
          </button>
        )}
        <button className="relative hidden h-11 w-11 place-items-center rounded-md border border-black/10 text-black/65 hover:bg-black/5 md:grid" onClick={() => navigate('wishlist')} aria-label="Open wishlist">
          <Heart className={`h-5 w-5 ${wishlistCount ? 'fill-red-500 text-red-500' : ''}`} />
          {wishlistCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-limepop px-1 text-xs font-black text-ink">{wishlistCount}</span>}
        </button>
        <button className="relative flex h-11 items-center gap-2 rounded-md bg-leaf px-3 text-sm font-bold text-white shadow-sm hover:bg-[#096d19]" onClick={onCart}>
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">{itemCount ? `${itemCount} items` : 'My Cart'}</span>
          {itemCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-limepop px-1 text-xs text-ink">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
}

function AccountMenuItem({ label, onClick }) {
  return (
    <button className="rounded-md px-2 py-2 text-left font-semibold text-black/70 hover:bg-[#f7f7f2] hover:text-ink" onClick={onClick}>
      {label}
    </button>
  );
}

function HomePage({ activeCategory, setActiveCategory, visibleProducts, sort, setSort, location, cart, wishlist, addToCart, decreaseCart, toggleWishlist, openProduct, clearFilters, onLocation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 lg:px-6">
      <section className="py-5">
        <div className={`${slide.bg} relative h-[260px] overflow-hidden rounded-md border border-black/5 shadow-sm`}>
          <div className="absolute inset-y-0 right-0 hidden w-[50%] md:block">
            <img className="h-full w-full object-cover" src={slide.image} alt={slide.title} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/25" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/18 via-black/6 to-transparent" />
          <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 py-5 md:px-9">
            <h1 className="text-3xl font-black leading-tight tracking-normal text-white drop-shadow-sm md:text-3xl uppercase">{slide.title}</h1>
            <p className="mt-2 max-w-[32ch] text-base font-semibold leading-1 text-white/95 md:text-xl md:leading-1">{slide.copy}</p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#products" className="inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-black text-ink shadow-sm hover:bg-white/90">Shop Now</a>
              <span className="hidden rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white ring-1 ring-white/25 sm:inline-flex">{slide.badge}</span>
            </div>
            <div className="absolute bottom-4 left-6 flex gap-2 md:left-9">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  className={`h-2 rounded-full transition-all ${activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/45 hover:bg-white/75'}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show banner ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-md bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between gap-3 px-1 pb-3">
          <h2 className="text-xl font-black">Shop by category</h2>
          <button className="text-sm font-bold text-leaf" onClick={() => setActiveCategory('all')}>see all</button>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10">
          {categories.map((category) => (
            <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`group min-h-[126px] rounded-md border p-2 text-center transition ${activeCategory === category.id ? 'border-leaf bg-mint shadow-sm' : 'border-black/10 hover:border-leaf/40 hover:bg-[#fbfbf6]'}`}>
              <img className="mx-auto h-16 w-16 rounded-md object-cover transition group-hover:scale-105" src={category.image} alt={category.name} />
              <span className="mt-2 block text-xs font-bold leading-tight">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="mt-5 grid gap-5 lg:grid-cols-[220px_1fr]">
        <aside className="hidden self-start rounded-md bg-white p-4 shadow-sm lg:block">
          <h2 className="flex items-center gap-2 text-base font-black"><SlidersHorizontal className="h-5 w-5" /> Filters</h2>
          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold ${activeCategory === category.id ? 'bg-mint text-leaf' : 'hover:bg-black/5'}`}>
                {category.name}
                <span className="text-xs text-black/40">{category.id === 'all' ? products.length : products.filter((item) => item.category === category.id).length}</span>
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black">Buy essentials online</h2>
              <p className="text-sm text-black/55">{visibleProducts.length} products available near {location}</p>
            </div>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none">
              <option value="popular">Sort by popularity</option>
              <option value="fastest">Fastest delivery</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>

          {visibleProducts.length ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} quantity={cart[product.id] || 0} wished={wishlist.includes(product.id)} onAdd={() => addToCart(product.id)} onDecrease={() => decreaseCart(product.id)} onWish={() => toggleWishlist(product.id)} onOpen={() => openProduct(product.id)} />
              ))}
            </div>
          ) : (
            <div className="grid min-h-[260px] place-items-center rounded-md bg-white p-8 text-center">
              <div>
                <Search className="mx-auto h-10 w-10 text-black/25" />
                <h3 className="mt-3 text-lg font-black">No matching items</h3>
                <p className="text-sm text-black/55">Try a different search or category.</p>
                <button className="mt-4 rounded-md bg-leaf px-4 py-2 text-sm font-bold text-white" onClick={clearFilters}>Clear filters</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 grid gap-3 rounded-md bg-ink p-5 text-white md:grid-cols-3">
        <Feature icon={Bike} title="Fast delivery" text="Slots update instantly with a 9-15 minute delivery promise." />
        <Feature icon={Sparkles} title="Fresh picks" text="Curated produce, dairy, bakery and household staples." />
        <Feature icon={CreditCard} title="Easy checkout" text="Apply coupons, review fees and place a mock order." />
      </section>
    </main>
  );
}

function ProductCard({ product, quantity, wished, onAdd, onDecrease, onWish, onOpen }) {
  return (
    <article className="flex min-h-[286px] flex-col rounded-md border border-black/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <button className="relative rounded-md bg-[#f7f7f2] text-left" onClick={onOpen}>
        <img className="aspect-square w-full rounded-md object-cover" src={product.image} alt={product.name} />
        <span className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-[11px] font-black text-leaf shadow-sm">{product.time} min</span>
      </button>
      <button className="absolute right-5 mt-2 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm" onClick={onWish} aria-label={`Wishlist ${product.name}`}>
        <Heart className={`h-4 w-4 ${wished ? 'fill-red-500 text-red-500' : 'text-black/55'}`} />
      </button>
      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] font-bold uppercase text-leaf">{product.tag}</p>
        <button className="text-left" onClick={onOpen}><h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-black leading-5">{product.name}</h3></button>
        <p className="mt-1 text-xs text-black/50">{product.unit} • ★ {product.rating}</p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <p className="text-sm font-black">{formatRupees(product.price)}</p>
            {product.oldPrice > product.price && <p className="text-xs text-black/40 line-through">{formatRupees(product.oldPrice)}</p>}
          </div>
          <QuantityButton quantity={quantity} onAdd={onAdd} onDecrease={onDecrease} />
        </div>
      </div>
    </article>
  );
}

function ProductDetailPage({ product, related, cart, wished, onBack, onWish, addToCart, decreaseCart, openProduct, openRecipe, openCollection, onShare }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const categoryName = categories.find((category) => category.id === product.category)?.name || 'Grocery';
  const productImages = getProductImages(product);
  const selectedImage = productImages[selectedImageIndex] || product.image;
  const unitOptions = getUnitOptions(product);
  const selectedUnit = unitOptions[selectedUnitIndex] || unitOptions[0];
  const selectedCartKey = selectedUnit.unit === product.unit ? String(product.id) : cartKeyFor(product.id, selectedUnit.unit);
  const selectedQuantity = cart[selectedCartKey] || 0;

  useEffect(() => {
    setSelectedImageIndex(0);
    setSelectedUnitIndex(0);
    setDetailsExpanded(false);
  }, [product.id]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label={`Home / ${categoryName} / ${product.name}`} />
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px]">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="grid gap-4 rounded-md border border-black/10 bg-white p-4 shadow-sm md:grid-cols-[82px_1fr]">
            <div className="order-2 flex gap-3 overflow-auto md:order-1 md:block md:space-y-3">
              {productImages.map((image, index) => (
                <button key={image} className={`h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-[#f7f7f2] p-1 ${index === selectedImageIndex ? 'border-leaf' : 'border-black/10'}`} onClick={() => setSelectedImageIndex(index)}>
                  <img className="h-full w-full rounded object-cover" src={image} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className="order-1 grid min-h-[420px] place-items-center rounded-md bg-[#f8f8f3] p-6 md:order-2">
              <img className="max-h-[520px] w-full max-w-[520px] rounded-md object-cover" src={selectedImage} alt={product.name} />
            </div>
          </div>

          <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">Product Details</h2>
            <div className="mt-4 divide-y divide-black/10 rounded-md border border-black/10">
              <DetailRow label="Processing Type" value={product.category === 'instant' ? 'Ready to cook' : 'Homogenized'} />
              <DetailRow label="Key Features" value={product.detail} />
              <DetailRow label="Unit" value={selectedUnit.unit} />
              <DetailRow label="Shelf Life" value={product.category === 'dairy' ? 'Consume within 2 days of opening' : 'Best before date printed on pack'} />
              <DetailRow label="Country of Origin" value="India" />
              {detailsExpanded && (
                <>
                  <DetailRow label="Seller" value="FreshDrop retail partner" />
                  <DetailRow label="Manufacturer" value={`${product.name.split(' ')[0]} Foods Pvt Ltd`} />
                  <DetailRow label="Customer Care" value="support@freshdrop.example" />
                </>
              )}
            </div>
            <button className="mt-4 text-sm font-black text-leaf" onClick={() => setDetailsExpanded((expanded) => !expanded)}>
              {detailsExpanded ? 'View less details' : 'View more details'}
            </button>
          </section>
        </div>

        <aside className="space-y-5">
          <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-black/45">Home / {categoryName} / {product.name}</p>
                <h1 className="mt-3 text-3xl font-black leading-tight text-ink">{product.name}</h1>
              </div>
              <div className="flex shrink-0 gap-2">
                <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black/5" onClick={onWish} aria-label={`Wishlist ${product.name}`}>
                  <Heart className={`h-5 w-5 ${wished ? 'fill-red-500 text-red-500' : 'text-black/55'}`} />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black/5" onClick={onShare} aria-label={`Share ${product.name}`}>
                  <Share2 className="h-5 w-5 text-black/60" />
                </button>
              </div>
            </div>
            <div className="mt-5 border-t border-black/10 pt-5">
              <p className="text-sm font-black text-ink">Select Unit</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {unitOptions.map((option, index) => (
                  <button
                    key={option.unit}
                    className={`relative min-w-[110px] rounded-md border px-3 py-3 text-left transition ${selectedUnitIndex === index ? 'border-leaf bg-mint shadow-sm' : 'border-black/20 bg-white hover:border-leaf/50'}`}
                    onClick={() => setSelectedUnitIndex(index)}
                  >
                    {option.discount > 0 && (
                      <span className="absolute -top-2 left-8 rounded bg-[#6d5dfc] px-2 py-0.5 text-[10px] font-black text-white">
                        {option.discount}% OFF
                      </span>
                    )}
                    <span className="block text-sm font-bold">{option.unit}</span>
                    <span className="mt-1 block text-sm font-black">
                      {formatRupees(option.price)}{' '}
                      {option.oldPrice > option.price && <span className="font-semibold text-black/45 line-through">{formatRupees(option.oldPrice)}</span>}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-black/55">{selectedUnit.unit}</p>
                  <p className="mt-1 text-2xl font-black">
                    {formatRupees(selectedUnit.price)}{' '}
                    {selectedUnit.oldPrice > selectedUnit.price && <span className="text-base font-semibold text-black/45 line-through">{formatRupees(selectedUnit.oldPrice)}</span>}
                    {selectedUnit.discount > 0 && <span className="ml-2 rounded bg-[#6d5dfc] px-2 py-1 text-[10px] font-black text-white">{selectedUnit.discount}% OFF</span>}
                  </p>
                  <p className="mt-1 text-xs text-black/50">(Inclusive of all taxes)</p>
                </div>
                <button className="h-12 min-w-[160px] rounded-md bg-leaf px-6 text-sm font-black text-white hover:bg-[#096d19]" onClick={() => addToCart({ cartKey: selectedCartKey })}>
                  Add to cart{selectedQuantity ? ` (${selectedQuantity})` : ''}
                </button>
                {selectedQuantity > 0 && (
                  <QuantityButton quantity={selectedQuantity} onAdd={() => addToCart({ cartKey: selectedCartKey })} onDecrease={() => decreaseCart({ cartKey: selectedCartKey })} />
                )}
              </div>
            </div>
          </section>

          <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">Why shop from blinkit?</h2>
            <div className="mt-4 space-y-5">
              <BlinkitBenefit icon={Clock3} title="Round The Clock Delivery" text="Get items delivered to your doorstep from dark stores near you, whenever you need them." />
              <BlinkitBenefit icon={Tag} title="Best Prices & Offers" text="Best price destination with offers directly from the manufacturers." />
              <BlinkitBenefit icon={ShoppingBag} title="Wide Assortment" text="Choose from 30,000+ products across food, personal care, household and other categories." />
            </div>
          </section>

          <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">Product Highlights</h2>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <InfoPill label="Type" value={product.tag} />
              <InfoPill label="Pack" value={product.unit} />
              <InfoPill label="Delivery" value={`${product.time} min`} />
            </div>
          </section>
        </aside>
      </section>

      <ProductRail title="Similar products" products={collectionMap['similar-products'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('similar-products')} />
      <ProductRail title="Top 10 products in this category" products={collectionMap['top-category'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('top-category')} />
      <ProductRail title="People also bought" products={collectionMap['people-also-bought'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('people-also-bought')} />

      {related.length > 0 && (
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">More from FreshDrop dairy</h2>
            <button className="text-sm font-black text-leaf" onClick={() => openCollection('similar-products')}>see all</button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((item) => (
              <button key={item.id} className="rounded-md border border-black/10 bg-white p-3 text-left shadow-sm hover:border-leaf" onClick={() => openProduct(item.id)}>
                <img className="aspect-square w-full rounded-md object-cover" src={item.image} alt={item.name} />
                <p className="mt-2 line-clamp-2 min-h-[40px] text-sm font-black">{item.name}</p>
                <p className="text-xs text-black/50">{item.unit}</p>
                <p className="mt-2 text-sm font-black">{formatRupees(item.price)}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 rounded-md border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-black">Cow Milk recipes for you</h2>
          <button className="text-sm font-black text-leaf" onClick={() => openCollection('recipes')}>see all</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {cowMilkRecipes.map((recipe) => (
            <button key={recipe.id} className="group overflow-hidden rounded-md border border-black/10 bg-[#f7f7f2] text-left text-sm font-black hover:border-leaf" onClick={() => openRecipe(recipe.id)}>
              <img className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" src={recipe.image} alt={recipe.name} />
              <span className="block min-h-[48px] p-3 leading-tight">{recipe.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function RecipeDetailPage({ recipe, onBack, openRecipe }) {
  const nutrition = [
    { label: 'kCal', value: recipe.calories },
    { label: 'Protein', value: '6 g' },
    { label: 'Fat', value: '8 g' },
    { label: 'Carbs', value: '46 g' },
  ];
  const otherRecipes = recipeDetails.filter((item) => item.id !== recipe.id).slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Back to product" />
      <section className="grid items-center gap-8 rounded-md bg-white p-5 shadow-sm lg:grid-cols-[1fr_360px] lg:p-8">
        <div>
          <p className="text-sm font-bold text-black/45">Home / Recipes / {recipe.name}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink">{recipe.name}</h1>
          <p className="mt-4 max-w-3xl text-base font-semibold text-black/75">
            {recipe.name} is a delicious Indian dessert made with milk, sugar and fragrant pantry staples. It is a comforting recipe for family meals and quick festive treats.
          </p>
          <p className="mt-4 max-w-3xl text-base font-semibold text-black/80">Ingredients: {recipe.ingredients.join(', ')}</p>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <RecipeStat value={recipe.cookTime} label="Cook Time" />
            <RecipeStat value={recipe.servings} label="Servings" />
            <RecipeStat value="Recipe" label="Type" />
            <RecipeStat value={`${recipe.calories} kCal`} label="Energy" highlight />
          </div>
        </div>
        <img className="aspect-square w-full rounded-md object-cover" src={recipe.image} alt={recipe.name} />
      </section>

      <section className="mt-5 grid gap-5 rounded-md border border-black/10 bg-white p-5 shadow-sm lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-xl font-black">Recipe</h2>
          <ol className="mt-4 space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm font-semibold leading-6 text-black/65">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black/10 text-xs font-black text-black/55">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside>
          <h2 className="text-xl font-black">Nutrition</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {nutrition.map((item) => (
              <div key={item.label} className="rounded-md bg-[#f7f7f2] p-4 text-center">
                <p className="text-lg font-black">{item.value}</p>
                <p className="text-xs font-bold text-black/55">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black">More recipes</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {otherRecipes.map((item) => (
            <button key={item.id} className="overflow-hidden rounded-md border border-black/10 bg-white text-left shadow-sm hover:border-leaf" onClick={() => openRecipe(item.id)}>
              <img className="aspect-[4/3] w-full object-cover" src={item.image} alt={item.name} />
              <span className="block p-3 text-sm font-black">{item.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function RecipeStat({ value, label, highlight = false }) {
  return (
    <div className="border-r border-black/10 last:border-r-0">
      <p className={`text-center text-lg font-black ${highlight ? 'text-leaf' : 'text-ink'}`}>{value}</p>
      <p className="text-center text-sm font-semibold text-black/65">{label}</p>
    </div>
  );
}

function SeeAllPage({ collection, cart, wishlist, addToCart, decreaseCart, toggleWishlist, openProduct, openRecipe, onBack }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Back to product" />
      <div className="mb-4">
        <h1 className="text-3xl font-black">{collection.title}</h1>
        <p className="mt-1 text-sm font-semibold text-black/55">
          {collection.products?.length || collection.recipes?.length || 0} items available
        </p>
      </div>
      {collection.recipes ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {collection.recipes.map((recipe) => (
            <button key={recipe.id} className="overflow-hidden rounded-md border border-black/10 bg-white text-left shadow-sm hover:border-leaf" onClick={() => openRecipe(recipe.id)}>
              <img className="aspect-[4/3] w-full object-cover" src={recipe.image} alt={recipe.name} />
              <span className="block p-3 text-sm font-black">{recipe.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {collection.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              wished={wishlist.includes(product.id)}
              onAdd={() => addToCart(product.id)}
              onDecrease={() => decreaseCart(product.id)}
              onWish={() => toggleWishlist(product.id)}
              onOpen={() => openProduct(product.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

function ProductRail({ title, products, onAdd, onOpen, onSeeAll }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-black">{title}</h2>
        <button className="text-sm font-black text-leaf" onClick={onSeeAll}>see all</button>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {products.map((item) => (
          <article key={`${title}-${item.name}-${item.unit}`} className="flex min-h-[314px] w-[182px] shrink-0 flex-col rounded-md border border-black/10 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
            <div className="relative overflow-hidden rounded-md bg-[#f7f7f2]">
              {item.oldPrice && (
                <span className="absolute left-2 top-2 rounded bg-leaf px-2 py-1 text-[10px] font-black text-white">
                  {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% OFF
                </span>
              )}
              <button className="block w-full text-left" onClick={() => onOpen(item.id)}>
                <img className="h-[146px] w-full rounded-md object-cover" src={item.image} alt={item.name} />
              </button>
            </div>
            <div className="mt-3 flex flex-1 flex-col">
              <p className="text-[11px] font-bold text-black/45"><Clock3 className="mr-1 inline h-3 w-3 text-leaf" /> 8 min</p>
              <button className="text-left" onClick={() => onOpen(item.id)}><h3 className="mt-1 line-clamp-2 min-h-[42px] text-sm font-black leading-5">{item.name}</h3></button>
              <p className="mt-1 text-xs text-black/50">{item.unit}</p>
              <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                <div>
                  <p className="text-sm font-black">{formatRupees(item.price)}</p>
                  {item.oldPrice && <p className="text-xs text-black/40 line-through">{formatRupees(item.oldPrice)}</p>}
                </div>
                <button className="h-8 rounded-md border border-leaf px-3 text-xs font-black text-leaf hover:bg-mint" onClick={() => onAdd(item.id)}>ADD</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlinkitBenefit({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#f7f7f2]">
        <Icon className="h-5 w-5 text-leaf" />
      </span>
      <div>
        <h3 className="text-sm font-black">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-black/55">{text}</p>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="grid gap-1 p-3 sm:grid-cols-[180px_1fr]">
      <p className="text-xs font-bold text-black/45">{label}</p>
      <p className="text-sm font-black text-ink">{value}</p>
    </div>
  );
}

function CheckoutPage({ items, location, subtotal, deliveryFee, handlingFee, discount, total, coupon, setCoupon, payment, walletBalance, paymentError, setPaymentError, setPaymentMethod, setUpiId, setCardField, addToCart, decreaseCart, onBack, onPlaceOrder, onLocation }) {
  const selectPayment = (method) => {
    setPaymentError('');
    setPaymentMethod(method);
  };
  const cardNumber = payment.card.number.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);

  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Checkout" />
      {items.length ? (
        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <section className="space-y-3">
            <CheckoutBlock icon={MapPin} title="Delivery address" action="Change" onAction={onLocation}>
              <p className="text-sm font-bold">{location}</p>
              <p className="text-xs text-black/50">Flat 204, Green Avenue, near city center</p>
            </CheckoutBlock>
            <CheckoutBlock icon={Clock3} title="Delivery slot">
              <p className="text-sm font-bold">Arrives in 9 minutes</p>
              <p className="text-xs text-black/50">Priority delivery partner assigned after payment</p>
            </CheckoutBlock>
            <CheckoutBlock icon={WalletCards} title="Payment method">
              <div className="grid gap-2 sm:grid-cols-4">
                {['UPI', 'Card', 'Cash', 'Wallet'].map((mode) => (
                  <button
                    key={mode}
                    className={`rounded-md border px-3 py-2 text-sm font-black transition ${payment.method === mode ? 'border-ink bg-mint text-leaf ring-1 ring-ink' : 'border-leaf bg-mint text-leaf hover:bg-white'}`}
                    onClick={() => selectPayment(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              {payment.method === 'UPI' && (
                <div className="mt-4 rounded-md border border-black/10 bg-[#f7f7f2] p-3">
                  <label className="text-xs font-black text-black/55">UPI ID</label>
                  <input
                    className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4"
                    value={payment.upiId}
                    onChange={(event) => { setPaymentError(''); setUpiId(event.target.value); }}
                    placeholder="name@upi"
                  />
                  <p className="mt-2 text-xs text-black/50">A payment request will be created for this UPI ID.</p>
                </div>
              )}
              {payment.method === 'Card' && (
                <div className="mt-4 grid gap-3 rounded-md border border-black/10 bg-[#f7f7f2] p-3 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <span className="text-xs font-black text-black/55">Card number</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={cardNumber} onChange={(event) => { setPaymentError(''); setCardField('number', event.target.value.replace(/\D/g, '').slice(0, 16)); }} placeholder="1234 5678 9012 3456" />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-xs font-black text-black/55">Name on card</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.name} onChange={(event) => { setPaymentError(''); setCardField('name', event.target.value); }} placeholder="Card holder name" />
                  </label>
                  <label>
                    <span className="text-xs font-black text-black/55">Expiry</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.expiry} onChange={(event) => { setPaymentError(''); setCardField('expiry', event.target.value.replace(/[^\d/]/g, '').slice(0, 5)); }} placeholder="MM/YY" />
                  </label>
                  <label>
                    <span className="text-xs font-black text-black/55">CVV</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.cvv} onChange={(event) => { setPaymentError(''); setCardField('cvv', event.target.value.replace(/\D/g, '').slice(0, 4)); }} placeholder="123" />
                  </label>
                </div>
              )}
              {payment.method === 'Cash' && (
                <div className="mt-4 rounded-md border border-black/10 bg-[#f7f7f2] p-3">
                  <p className="text-sm font-black">Cash on delivery selected</p>
                  <p className="mt-1 text-xs text-black/50">Keep exact change ready. Digital payment can also be collected by the delivery partner.</p>
                </div>
              )}
              {payment.method === 'Wallet' && (
                <div className={`mt-4 rounded-md border p-3 ${walletBalance >= total ? 'border-leaf bg-mint' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black">FreshDrop wallet</p>
                      <p className="mt-1 text-xs text-black/55">Available balance</p>
                    </div>
                    <p className={`text-xl font-black ${walletBalance >= total ? 'text-leaf' : 'text-red-600'}`}>{formatRupees(walletBalance)}</p>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-black/60">
                    {walletBalance >= total ? `${formatRupees(total)} will be deducted from your wallet.` : `Add ${formatRupees(total - walletBalance)} more to use wallet for this order.`}
                  </p>
                </div>
              )}
              {paymentError && <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm font-black text-red-600">{paymentError}</p>}
            </CheckoutBlock>
            <div className="rounded-md bg-white p-4 shadow-sm">
              <h2 className="mb-3 font-black">Items in cart</h2>
              <div className="space-y-3">
                {items.map((item) => <CartItem key={item.cartKey || item.id} item={item} addToCart={addToCart} decreaseCart={decreaseCart} />)}
              </div>
            </div>
          </section>
          <aside className="self-start rounded-md bg-white p-4 shadow-sm">
            <BillSummary subtotal={subtotal} deliveryFee={deliveryFee} handlingFee={handlingFee} discount={discount} total={total} coupon={coupon} setCoupon={setCoupon} />
            <button className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-leaf text-sm font-black text-white" onClick={onPlaceOrder}>
              <PackageCheck className="h-5 w-5" /> Place order
            </button>
          </aside>
        </div>
      ) : (
        <EmptyState icon={ShoppingCart} title="Your cart is empty" text="Add products before checkout." action="Go shopping" onAction={onBack} />
      )}
    </main>
  );
}

function PlaceOrderPage({ order, onTrack, onDetail, onHome }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 pb-24 text-center lg:px-6">
      <div className="rounded-md bg-white p-8 shadow-sm">
        <CheckCircle2 className="mx-auto h-16 w-16 text-leaf" />
        <h1 className="mt-4 text-3xl font-black">Order placed</h1>
        <p className="mt-2 text-sm text-black/55">Your order {order.id} is confirmed and should arrive in {order.minutes} minutes.</p>
        <div className="mx-auto mt-6 max-w-md rounded-md bg-[#f7f7f2] p-4 text-left">
          <p className="text-sm font-black">Delivering to</p>
          <p className="mt-1 text-sm text-black/60">{order.address}</p>
          <p className="mt-3 text-sm font-black">Total paid: {formatRupees(order.total)}</p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="h-11 rounded-md bg-leaf px-5 text-sm font-black text-white" onClick={onTrack}>Track order</button>
          <button className="h-11 rounded-md border border-black/10 px-5 text-sm font-black" onClick={onDetail}>Order details</button>
          <button className="h-11 rounded-md border border-black/10 px-5 text-sm font-black" onClick={onHome}>Continue shopping</button>
        </div>
      </div>
    </main>
  );
}

function TrackOrderPage({ order, onBack, onHome }) {
  const steps = ['Order placed', 'Packed', 'Out for delivery', 'Delivered'];
  const activeIndex = Math.min(2, steps.indexOf(order.status) === -1 ? 0 : steps.indexOf(order.status));
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Track order" />
      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="min-h-[360px] overflow-hidden rounded-md bg-[#dff4df] p-5 shadow-sm">
          <div className="relative h-full rounded-md bg-white p-4">
            <div className="absolute inset-8 rounded-md border-2 border-dashed border-leaf/40"></div>
            <MapPin className="absolute left-10 top-10 h-8 w-8 text-leaf" />
            <Bike className="absolute bottom-16 right-14 h-10 w-10 text-ink" />
            <div className="relative z-10 rounded-md bg-white/90 p-4 shadow-sm">
              <h1 className="text-2xl font-black">Arriving in {order.minutes} minutes</h1>
              <p className="mt-1 text-sm text-black/55">Delivery partner is on the way to {order.location}.</p>
            </div>
          </div>
        </div>
        <aside className="rounded-md bg-white p-4 shadow-sm">
          <h2 className="font-black">Order status</h2>
          <div className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-3">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black ${index <= activeIndex ? 'bg-leaf text-white' : 'bg-black/10 text-black/45'}`}>{index + 1}</span>
                <div>
                  <p className="text-sm font-black">{step}</p>
                  <p className="text-xs text-black/50">{index <= activeIndex ? 'Completed' : 'Pending'}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-5 h-11 w-full rounded-md bg-ink text-sm font-black text-white" onClick={onHome}>Shop more</button>
        </aside>
      </section>
    </main>
  );
}

function OrderDetailPage({ order, saved, onBack, onTrack, onReorder, onSave }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Order detail" />
      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <section className="space-y-3">
          <div className="rounded-md bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-black">Order {order.id}</h1>
                <p className="text-sm text-black/55">Placed on {order.placedAt}</p>
              </div>
              <span className="rounded bg-mint px-3 py-1 text-xs font-black text-leaf">{order.status}</span>
            </div>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-black">Items</h2>
            <div className="space-y-3">{order.items.map((item) => <OrderItem key={item.cartKey || item.id} item={item} />)}</div>
          </div>
          <CheckoutBlock icon={MapPin} title="Delivery address"><p className="text-sm text-black/65">{order.address}</p></CheckoutBlock>
        </section>
        <aside className="self-start rounded-md bg-white p-4 shadow-sm">
          <BillLine label="Order total" value={formatRupees(order.total)} />
          <BillLine label="Payment" value={order.payment} />
          <div className="mt-4 grid gap-2">
            <button className="h-11 rounded-md bg-leaf text-sm font-black text-white" onClick={onTrack}>Track order</button>
            <button className="h-11 rounded-md border border-black/10 text-sm font-black" onClick={onReorder}>Reorder items</button>
            <button className="h-11 rounded-md border border-black/10 text-sm font-black" onClick={onSave}>{saved ? 'Remove saved order' : 'Save order'}</button>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ProfilePage({ profile, walletBalance, onAddWalletFunds, orders, savedOrders, wishlistCount, openOrder, navigate, onLogout, isLoggedIn, onLogin }) {
  if (!isLoggedIn) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 lg:px-6">
        <EmptyState icon={UserRound} title="Login to view your account" text="Orders, saved addresses and wishlist are available after login." action="Login" onAction={onLogin} />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-5 pb-24 lg:px-6">
      <h1 className="mb-4 text-3xl font-black">My profile</h1>
      <section className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <aside className="self-start rounded-md bg-white p-5 shadow-sm">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-mint text-2xl font-black text-leaf">{profile.name[0]}</div>
          <h2 className="mt-3 text-xl font-black">{profile.name}</h2>
          <p className="text-sm text-black/55">{profile.phone}</p>
          <p className="text-sm text-black/55">{profile.email}</p>
          <div className="mt-5 rounded-md border border-leaf/30 bg-mint p-4">
            <p className="text-xs font-black uppercase text-leaf">FreshDrop wallet</p>
            <p className="mt-1 text-2xl font-black text-ink">{formatRupees(walletBalance)}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[100, 250].map((amount) => (
                <button key={amount} className="h-9 rounded-md bg-leaf text-xs font-black text-white hover:bg-[#096d19]" onClick={() => onAddWalletFunds(amount)}>
                  Add {formatRupees(amount)}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <ProfileAction icon={ReceiptText} label="My orders" onClick={() => openOrder(orders[0]?.id)} />
            <ProfileAction icon={Heart} label={`Wishlist (${wishlistCount})`} onClick={() => navigate('wishlist')} />
            <ProfileAction icon={Heart} label={`Saved orders (${savedOrders.length})`} onClick={() => navigate('saved-orders')} />
            <ProfileAction icon={WalletCards} label={`FreshDrop wallet ${formatRupees(walletBalance)}`} />
            <ProfileAction icon={LogOut} label="Logout" onClick={onLogout} />
          </div>
        </aside>
        <section className="rounded-md bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">Recent orders</h2>
            <button className="text-sm font-black text-leaf" onClick={() => navigate('saved-orders')}>saved</button>
          </div>
          <div className="space-y-3">
            {orders.map((order) => <OrderRow key={order.id} order={order} onClick={() => openOrder(order.id)} />)}
          </div>
        </section>
      </section>
    </main>
  );
}

function SavedOrdersPage({ orders, openOrder, reorder, onBack }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Saved orders" />
      {orders.length ? (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="rounded-md bg-white p-4 shadow-sm">
              <OrderRow order={order} onClick={() => openOrder(order.id)} />
              <button className="mt-3 h-10 rounded-md bg-leaf px-4 text-sm font-black text-white" onClick={() => reorder(order)}>Reorder saved cart</button>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState icon={Gift} title="No saved orders" text="Save an order from order details to reorder faster later." action="Back to profile" onAction={onBack} />
      )}
    </main>
  );
}

function WishlistPage({ products, cart, addToCart, decreaseCart, toggleWishlist, openProduct, onBack }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Wishlist" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">My wishlist</h1>
          <p className="text-sm text-black/55">{products.length} saved products</p>
        </div>
      </div>
      {products.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              wished
              onAdd={() => addToCart(product.id)}
              onDecrease={() => decreaseCart(product.id)}
              onWish={() => toggleWishlist(product.id)}
              onOpen={() => openProduct(product.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState icon={Heart} title="No wishlist items" text="Tap the heart on a product to save it here." action="Browse products" onAction={onBack} />
      )}
    </main>
  );
}

function ShareDrawer({ product, status, onClose, onStatus }) {
  if (!product) return null;

  const url = productUrl(product);
  const text = `Buy ${product.name} (${product.unit}) for ${formatRupees(product.price)}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${text} ${url}`);
  const options = [
    { label: 'Copy Link', icon: Copy, color: 'bg-[#6d28d9]', action: async () => {
      await navigator.clipboard.writeText(url);
      onStatus('Link copied');
    } },
    { label: 'Whatsapp', icon: MessageCircle, color: 'bg-[#10b981]', href: `https://wa.me/?text=${encodedText}` },
    { label: 'Facebook', icon: Share2, color: 'bg-[#7c3aed]', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: 'Messenger', icon: Send, color: 'bg-[#6d28d9]', href: `fb-messenger://share?link=${encodedUrl}` },
    { label: 'Gmail', icon: Mail, color: 'bg-[#ef4444]', href: `mailto:?subject=${encodeURIComponent(product.name)}&body=${encodedText}` },
    { label: 'SMS', icon: Smartphone, color: 'bg-[#a855f7]', href: `sms:?body=${encodedText}` },
    { label: 'LinkedIn', icon: Linkedin, color: 'bg-[#2563eb]', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  const runShare = async (option) => {
    try {
      if (option.action) {
        await option.action();
        return;
      }
      window.open(option.href, '_blank', 'noopener,noreferrer');
    } catch {
      onStatus('Unable to share right now');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/45" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-lg flex-col bg-white shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-4 border-b border-black/10 p-5">
          <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close share"><X className="h-5 w-5" /></button>
          <h2 className="text-lg font-black">Share</h2>
        </div>
        <div className="flex items-center gap-3 border-b border-black/10 bg-[#f7f7f2] p-4">
          <img className="h-14 w-14 rounded-md object-cover" src={product.image} alt={product.name} />
          <div className="min-w-0">
            <p className="truncate text-sm font-black">{product.name}</p>
            <p className="truncate text-xs text-black/55">{product.detail}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-8">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <button key={option.label} className="grid justify-items-center gap-2 text-center text-sm font-semibold text-black/70" onClick={() => runShare(option)}>
                <span className={`${option.color} grid h-12 w-12 place-items-center rounded-full text-white`}>
                  <Icon className="h-6 w-6" />
                </span>
                {option.label}
              </button>
            );
          })}
        </div>
        {status && <p className="mx-8 rounded-md bg-mint px-3 py-2 text-sm font-black text-leaf">{status}</p>}
      </aside>
    </div>
  );
}

function CartDrawer({ open, onClose, items, subtotal, deliveryFee, handlingFee, discount, total, coupon, setCoupon, addToCart, decreaseCart, onShare, onCheckout }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/35" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f7f2] shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-4">
          <div className="flex items-center gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close cart"><ArrowLeft className="h-5 w-5" /></button>
            <h2 className="text-lg font-black">My Cart</h2>
          </div>
          <button className="flex h-9 items-center gap-2 rounded-md px-2 text-sm font-black text-leaf hover:bg-mint" onClick={onShare}>
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {items.length ? (
            <div className="space-y-3">
              <div className="rounded-md bg-white p-3">
                <p className="flex items-center gap-2 text-sm font-black"><Clock3 className="h-4 w-4 text-leaf" /> Delivery in 9 minutes</p>
                <p className="mt-1 text-xs text-black/50">Shipment of {items.length} item groups</p>
              </div>
              {items.map((item) => <CartItem key={item.cartKey || item.id} item={item} addToCart={addToCart} decreaseCart={decreaseCart} />)}
              <BillSummary subtotal={subtotal} deliveryFee={deliveryFee} handlingFee={handlingFee} discount={discount} total={total} coupon={coupon} setCoupon={setCoupon} />
            </div>
          ) : (
            <EmptyState icon={ShoppingCart} title="Your cart is empty" text="Add snacks, staples and fresh picks to get started." />
          )}
        </div>
        <div className="border-t border-black/10 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-black/55">To pay</span>
            <span className="text-xl font-black">{formatRupees(total)}</span>
          </div>
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-leaf text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-black/20" disabled={!items.length} onClick={onCheckout}>
            <CreditCard className="h-5 w-5" /> Proceed to checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

function BillSummary({ subtotal, deliveryFee, handlingFee, discount, total, coupon, setCoupon }) {
  return (
    <div className="rounded-md bg-white p-3">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-black"><Tag className="h-4 w-4 text-leaf" /> Offers and bill</h3>
      <div className="mb-3 grid gap-2">
        {couponOptions.map((option) => (
          <button key={option.code} className={`flex items-center justify-between rounded-md border p-3 text-left ${coupon === option.code ? 'border-leaf bg-mint' : 'border-black/10'}`} onClick={() => setCoupon(coupon === option.code ? '' : option.code)}>
            <span>
              <span className="block text-sm font-black">{option.code}</span>
              <span className="block text-xs text-black/50">{option.label}</span>
            </span>
            <span className="text-xs font-black text-leaf">{subtotal >= option.min ? 'Apply' : `${formatRupees(option.min - subtotal)} more`}</span>
          </button>
        ))}
      </div>
      <BillLine label="Item total" value={formatRupees(subtotal)} />
      <BillLine label="Delivery fee" value={deliveryFee ? formatRupees(deliveryFee) : 'FREE'} />
      <BillLine label="Handling charge" value={formatRupees(handlingFee)} />
      {discount > 0 && <BillLine label="Coupon discount" value={`-${formatRupees(discount)}`} highlight />}
      <div className="mt-2 flex items-center justify-between rounded-md bg-mint px-3 py-2 text-sm font-black">
        <span>To pay</span>
        <span>{formatRupees(total)}</span>
      </div>
    </div>
  );
}

function CartItem({ item, addToCart, decreaseCart }) {
  const key = item.cartKey || item.id;
  return (
    <div className="flex gap-3 rounded-md bg-white p-3">
      <img className="h-16 w-16 rounded-md object-cover" src={item.image} alt={item.name} />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-black">{item.name}</h3>
        <p className="text-xs text-black/50">{item.unit}</p>
        <p className="mt-2 text-sm font-black">{formatRupees(item.price * item.quantity)}</p>
      </div>
      <QuantityButton quantity={item.quantity} onAdd={() => addToCart({ cartKey: key })} onDecrease={() => decreaseCart({ cartKey: key })} small />
    </div>
  );
}

function QuantityButton({ quantity, onAdd, onDecrease, small = false, wide = false }) {
  if (!quantity) {
    return <button className={`${wide ? 'w-full' : ''} ${small ? 'h-8 px-3' : 'h-9 px-4'} rounded-md border border-leaf text-sm font-black text-leaf hover:bg-mint`} onClick={onAdd}>ADD</button>;
  }
  return (
    <div className={`${wide ? 'w-full justify-between' : ''} ${small ? 'h-8' : 'h-9'} flex items-center overflow-hidden rounded-md border border-leaf bg-leaf text-white`}>
      <button className={`${small ? 'h-8 w-8' : 'h-9 w-9'} grid place-items-center hover:bg-white/10`} onClick={onDecrease} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
      <span className={`${wide ? 'flex-1' : small ? 'w-7' : 'w-8'} text-center text-sm font-black`}>{quantity}</span>
      <button className={`${small ? 'h-8 w-8' : 'h-9 w-9'} grid place-items-center hover:bg-white/10`} onClick={onAdd} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
    </div>
  );
}

function CheckoutBlock({ icon: Icon, title, action, onAction, children }) {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-black"><Icon className="h-5 w-5 text-leaf" /> {title}</h2>
        {action && <button className="text-sm font-black text-leaf" onClick={onAction}>{action}</button>}
      </div>
      {children}
    </div>
  );
}

function BackButton({ onClick, label }) {
  return (
    <button className="mb-4 flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-black shadow-sm" onClick={onClick}>
      <ArrowLeft className="h-4 w-4" /> {label}
    </button>
  );
}

function BillLine({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm">
      <span className={highlight ? 'font-bold text-leaf' : 'text-black/65'}>{label}</span>
      <span className="font-black">{value}</span>
    </div>
  );
}

function InfoPill({ label, value }) {
  return (
    <div className="rounded-md bg-white p-3">
      <p className="text-xs text-black/45">{label}</p>
      <p className="font-black">{value}</p>
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-6 w-6 shrink-0 text-limepop" />
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{text}</p>
      </div>
    </div>
  );
}

function OrderItem({ item }) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-[#f7f7f2] p-3">
      <img className="h-14 w-14 rounded-md object-cover" src={item.image} alt={item.name} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">{item.name}</p>
        <p className="text-xs text-black/50">{item.quantity} x {item.unit}</p>
      </div>
      <p className="text-sm font-black">{formatRupees(item.price * item.quantity)}</p>
    </div>
  );
}

function OrderRow({ order, onClick }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-md border border-black/10 p-3 text-left hover:bg-[#fbfbf6]" onClick={onClick}>
      <div className="grid h-11 w-11 place-items-center rounded-md bg-mint text-leaf"><ShoppingBag className="h-5 w-5" /></div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">Order {order.id}</p>
        <p className="text-xs text-black/50">{order.items.length} items • {order.placedAt}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-black">{formatRupees(order.total)}</p>
        <p className="text-xs text-leaf">{order.status}</p>
      </div>
    </button>
  );
}

function ProfileAction({ icon: Icon, label, onClick = () => {} }) {
  return (
    <button className="flex items-center gap-3 rounded-md border border-black/10 p-3 text-left text-sm font-black hover:bg-[#fbfbf6]" onClick={onClick}>
      <Icon className="h-5 w-5 text-leaf" /> {label}
    </button>
  );
}

function EmptyState({ icon: Icon, title, text, action, onAction }) {
  return (
    <div className="grid min-h-[260px] place-items-center rounded-md bg-white p-8 text-center">
      <div>
        <Icon className="mx-auto h-12 w-12 text-black/25" />
        <h3 className="mt-3 text-lg font-black">{title}</h3>
        <p className="mt-1 text-sm text-black/50">{text}</p>
        {action && <button className="mt-4 rounded-md bg-leaf px-4 py-2 text-sm font-bold text-white" onClick={onAction}>{action}</button>}
      </div>
    </div>
  );
}

function LoginModal({ open, onClose, onLogin }) {
  const [phone, setPhone] = useState('');
  if (!open) return null;
  return (
    <ModalShell onClose={onClose}>
      <UserRound className="mx-auto h-10 w-10 text-leaf" />
      <h2 className="mt-3 text-center text-xl font-black">Login or signup</h2>
      <p className="mt-1 text-center text-sm text-black/55">Enter a mobile number to continue.</p>
      <input className="mt-5 h-12 w-full rounded-md border border-black/10 px-4 text-center text-lg font-bold outline-none ring-leaf/20 focus:ring-4" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10 digit mobile number" />
      <button className="mt-3 h-12 w-full rounded-md bg-leaf text-sm font-black text-white disabled:bg-black/20" disabled={phone.length !== 10} onClick={() => onLogin(phone)}>Continue</button>
    </ModalShell>
  );
}

function LocationModal({ open, onClose, addresses, setLocation, addAddress }) {
  const [detectStatus, setDetectStatus] = useState('');
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [addressForm, setAddressForm] = useState({ type: 'Home', flat: '', area: '', city: '' });

  const detectLocation = (afterDetect) => {
    if (!navigator.geolocation) {
      setDetectStatus('Location detection is not supported in this browser.');
      return;
    }

    setDetectStatus('Detecting your current location...');
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const detected = await reverseGeocode(latitude, longitude);
        setLocation(detected);
        setDetectStatus(`Location detected: ${detected}`);
        if (afterDetect === 'form') {
          const parts = detected.split(',').map((part) => part.trim());
          setAddressForm((current) => ({ ...current, area: parts[0] || detected, city: parts.slice(1).join(', ') || 'India' }));
          setIsAddressFormOpen(true);
        } else {
          onClose();
        }
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied.'
          : 'Could not detect location right now.';
        setDetectStatus(message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/35" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f7f2] shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-4">
          <div className="flex items-center gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close location"><ArrowLeft className="h-5 w-5" /></button>
            <h2 className="text-lg font-black">Select delivery address</h2>
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close modal"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <button className="mb-3 flex h-14 w-full items-center gap-3 rounded-md bg-leaf px-4 text-left text-sm font-black text-white shadow-sm hover:bg-[#096d19]" onClick={detectLocation}>
            <LocateFixed className="h-5 w-5" /> Detect current location
          </button>
          {detectStatus && <p className="mb-3 rounded-md bg-white px-3 py-2 text-xs font-bold text-black/60">{detectStatus}</p>}
          <button className="mb-4 flex h-14 w-full items-center gap-3 rounded-md bg-white px-4 text-left text-sm font-black text-leaf shadow-sm hover:bg-mint" onClick={() => setIsAddressFormOpen(true)}>
            <Plus className="h-5 w-5" /> Add a new address
          </button>
          <label className="relative mb-5 block">
            <Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-black/40" />
            <input className="h-12 w-full rounded-md border border-black/10 bg-white pl-10 pr-3 text-sm outline-none ring-leaf/20 focus:ring-4" placeholder="search delivery location" />
          </label>
          <p className="mb-3 text-sm font-bold text-black/55">Your saved addresses</p>
          <div className="space-y-3">
            {addresses.map((item) => (
              <button key={`${item.id}-${item.address}`} className="flex w-full gap-3 rounded-md bg-white p-4 text-left shadow-sm hover:ring-2 hover:ring-leaf/25" onClick={() => { setLocation(item.short); onClose(); }}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#f7f7f2] text-leaf">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-black">{item.type}</span>
                  <span className="mt-1 line-clamp-2 block text-sm text-black/55">{item.address}</span>
                  <span className="mt-3 inline-flex h-7 items-center rounded-full border border-leaf px-3 text-xs font-black text-leaf">Use address</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>
      {isAddressFormOpen && (
        <ModalShell onClose={() => setIsAddressFormOpen(false)}>
          <MapPin className="mx-auto h-10 w-10 text-leaf" />
          <h2 className="mt-3 text-center text-xl font-black">Add delivery address</h2>
          <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-mint text-sm font-black text-leaf" onClick={() => detectLocation('form')}>
            <LocateFixed className="h-5 w-5" /> Detect location for address
          </button>
          <div className="mt-4 grid gap-3">
            <select className="h-11 rounded-md border border-black/10 px-3 text-sm font-bold outline-none ring-leaf/20 focus:ring-4" value={addressForm.type} onChange={(event) => setAddressForm((current) => ({ ...current, type: event.target.value }))}>
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
            </select>
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.flat} onChange={(event) => setAddressForm((current) => ({ ...current, flat: event.target.value }))} placeholder="Flat / house / building" />
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.area} onChange={(event) => setAddressForm((current) => ({ ...current, area: event.target.value }))} placeholder="Area / street" />
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.city} onChange={(event) => setAddressForm((current) => ({ ...current, city: event.target.value }))} placeholder="City / state" />
          </div>
          <button
            className="mt-4 h-12 w-full rounded-md bg-leaf text-sm font-black text-white disabled:bg-black/20"
            disabled={!addressForm.area || !addressForm.city}
            onClick={() => {
              const address = [addressForm.flat, addressForm.area, addressForm.city].filter(Boolean).join(', ');
              addAddress({ type: addressForm.type, address, short: [addressForm.area, addressForm.city].filter(Boolean).join(', ') });
              setAddressForm({ type: 'Home', flat: '', area: '', city: '' });
              setIsAddressFormOpen(false);
              onClose();
            }}
          >
            Save address
          </button>
        </ModalShell>
      )}
    </div>
  );
}

function ModalShell({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-md bg-white p-5 shadow-soft" onClick={(event) => event.stopPropagation()}>
        <button className="ml-auto grid h-8 w-8 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close modal"><X className="h-5 w-5" /></button>
        {children}
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  const links = ['Blog', 'Privacy', 'Terms', 'FAQs', 'Security', 'Contact', 'Partner', 'Franchise', 'Seller', 'Warehouse', 'Deliver', 'Recipes'];
  return (
    <footer className="border-t border-black/10 bg-white px-4 py-8 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr_1fr]">
        <div>
          <button className="text-2xl font-black" onClick={() => navigate('home')}>Fresh<span className="text-leaf">Drop</span></button>
          <p className="mt-2 text-sm text-black/55">A frontend-only quick grocery commerce experience inspired by modern instant delivery apps.</p>
        </div>
        <div>
          <h3 className="font-black">Useful links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-black/55 sm:grid-cols-4">
            {links.map((link) => <a key={link} href="#" className="hover:text-leaf">{link}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-black">Account</h3>
          <div className="mt-3 grid gap-2">
            <button className="rounded-md bg-ink px-3 py-2 text-xs font-bold text-white" onClick={() => navigate('profile')}>My Profile</button>
            <button className="rounded-md bg-ink px-3 py-2 text-xs font-bold text-white" onClick={() => navigate('saved-orders')}>Saved Orders</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileNav({ navigate, onLocation, onLogin, onCart, itemCount }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-black/10 bg-white sm:hidden">
      <button className="grid min-h-[62px] place-items-center text-xs font-bold" onClick={() => navigate('home')}><Home className="h-5 w-5" /> Home</button>
      <button className="grid min-h-[62px] place-items-center text-xs font-bold" onClick={onLocation}><LocateFixed className="h-5 w-5" /> Location</button>
      <button className="grid min-h-[62px] place-items-center text-xs font-bold" onClick={() => navigate('profile')}><UserRound className="h-5 w-5" /> Profile</button>
      <button className="grid min-h-[62px] place-items-center text-xs font-bold text-leaf" onClick={onCart}><ShoppingCart className="h-5 w-5" /> Cart {itemCount || ''}</button>
    </nav>
  );
}

export default App;

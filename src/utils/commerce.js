import { productCatalog, products } from '../data/catalog.js';

export const formatRupees = (value) => `Rs ${Math.round(value).toLocaleString('en-IN')}`;
export const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const cartKeyFor = (productId, unit) => `${productId}::${unit}`;
export const parseCartKey = (key) => {
  const [productId, unit] = String(key).split('::');
  return { productId: Number(productId), unit };
};
export const productPath = (productId) => {
  const product = productCatalog.find((item) => item.id === productId) || products[0];
  return `/prn/${slugify(product.name)}/prid/${product.id}`;
};
export const productUrl = (product) => `${window.location.origin}${productPath(product.id)}`;
export const collectionPath = (collectionId) => `/see-all/${collectionId}`;
export const categoryPath = (categoryId = 'all') => `/categories/${categoryId}`;

export function getProductImages(product) {
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

export function getUnitOptions(product) {
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

export function hydrateOrder(order) {
  if (!order) return order;
  return {
    ...order,
    items: order.items.map((item) => {
      const product = productCatalog.find((productItem) => productItem.id === item.id);
      return product ? { ...product, ...item, quantity: item.quantity } : item;
    }),
  };
}

export async function reverseGeocode(latitude, longitude) {
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

export const pagePaths = {
  home: '/',
  checkout: '/checkout',
  'place-order': '/order-success',
  'track-order': '/track-order',
  'order-detail': '/order-detail',
  profile: '/profile',
  'saved-orders': '/saved-orders',
  wishlist: '/wishlist',
};

export function getRouteState() {
  const { pathname } = window.location;
  const productMatch = pathname.match(/^\/(?:product|prn\/[^/]+\/prid)\/(\d+)/);
  const recipeMatch = pathname.match(/^\/recipe\/(\d+)/);
  const collectionMatch = pathname.match(/^\/see-all\/([^/]+)/);
  const categoryMatch = pathname.match(/^\/categories(?:\/([^/]+))?/);

  if (productMatch) return { page: 'product', productId: Number(productMatch[1]) };
  if (recipeMatch) return { page: 'recipe', recipeId: Number(recipeMatch[1]) };
  if (collectionMatch) return { page: 'see-all', collectionId: collectionMatch[1] };
  if (categoryMatch) return { page: 'categories', categoryId: categoryMatch[1] || 'all' };
  return { page: Object.entries(pagePaths).find(([, path]) => path === pathname)?.[0] || 'home' };
}

export async function shareProduct(product) {
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

export function isPaymentReady(payment, total = 0, walletBalance = 0) {
  if (payment.method === 'Cash') return true;
  if (payment.method === 'Wallet') return walletBalance >= total;
  if (payment.method === 'UPI') return /^[\w.-]+@[\w.-]+$/.test(payment.upiId.trim());
  if (payment.method === 'Card') {
    const digits = payment.card.number.replace(/\s/g, '');
    return digits.length >= 12 && payment.card.name.trim() && /^\d{2}\/\d{2}$/.test(payment.card.expiry) && /^\d{3,4}$/.test(payment.card.cvv);
  }
  return false;
}

export function getPaymentLabel(payment) {
  if (payment.method === 'Wallet') return 'Paid via Just Harvst wallet';
  if (payment.method === 'Cash') return 'Cash on delivery';
  if (payment.method === 'UPI') return `Paid via UPI${payment.upiId ? ` (${payment.upiId})` : ''}`;
  const digits = payment.card.number.replace(/\s/g, '');
  return `Paid via Card${digits ? ` ending ${digits.slice(-4)}` : ''}`;
}


export function makeOrder({ id, items, location, status, minutes, total, payment = 'Paid via UPI' }) {
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

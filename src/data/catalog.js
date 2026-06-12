export const categories = [
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

export const products = [
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

export const banners = [
  { title: 'Paan corner', copy: 'Fresheners and mints', accent: 'bg-[#064536]', image: 'https://images.unsplash.com/photo-1615485925763-86786288908a?auto=format&fit=crop&w=800&q=80' },
  { title: 'Weekend munchies', copy: 'Snacks and drinks', accent: 'bg-[#812326]', image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&w=800&q=80' },
  { title: 'Fresh breakfast', copy: 'Bread, eggs and milk', accent: 'bg-[#255f7a]', image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80' },
];

export const heroSlides = [
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

export const couponOptions = [
  { code: 'FRESH50', label: 'Rs 50 off above Rs 499', min: 499, discount: 50 },
  { code: 'SUPER10', label: '10% off above Rs 799', min: 799, rate: 0.1 },
];

export const milkShelfProducts = [
  { name: 'Mother Dairy Cow Milk', unit: '500 ml', price: 31, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Cow Milk', unit: '1 ltr', price: 82, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Gold Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Toned Milk', unit: '200 ml', price: 17, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Country Delight Cow Milk', unit: '450 ml', price: 46, oldPrice: 48, image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Taaza Homogenised Toned Milk', unit: '1 ltr', price: 77, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Moti Toned Milk', unit: '450 ml', price: 33, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
];

export const topMilkProducts = [
  { name: 'Amul Taaza Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Gold Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Toned Milk', unit: '500 ml', price: 30, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
  { name: 'Country Delight Cow Milk', unit: '450 ml', price: 46, oldPrice: 48, image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Buffalo A2 Milk', unit: '500 ml', price: 40, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Full Cream Milk', unit: '500 ml', price: 36, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=420&q=80' },
];

export const peopleAlsoBought = [
  { name: 'Amul Masti Pouch Curd', unit: '390 g', price: 35, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=420&q=80' },
  { name: 'Harvest Gold 100% Atta Whole Wheat Bread', unit: '450 g', price: 62, oldPrice: 65, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Fresh Malai Paneer', unit: '200 g', price: 95, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=420&q=80' },
  { name: 'Mother Dairy Probiotic Tadka Buttermilk', unit: '270 ml', price: 10, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=420&q=80' },
  { name: 'Desi Tomato (Tamatar)', unit: '500 g', price: 31, oldPrice: 39, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=420&q=80' },
  { name: 'Britannia NutriChoice Digestive Biscuit', unit: '125 g', price: 25, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=420&q=80' },
  { name: 'Amul Salted Butter', unit: '100 g', price: 60, image: 'https://images.unsplash.com/photo-1589985270958-4b7bb135bc9d?auto=format&fit=crop&w=420&q=80' },
  { name: 'Tata Tea Premium Tea', unit: '100 g', price: 40, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=420&q=80' },
];

export const cowMilkRecipes = [
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

export const recipeDetails = cowMilkRecipes.map((recipe, index) => ({
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

export const railProducts = [
  ...milkShelfProducts.map((product, index) => ({ ...product, id: 101 + index, category: 'dairy', rating: 4.5, time: 8, tag: 'Milk shelf', detail: `${product.name} delivered fresh for everyday use.` })),
  ...topMilkProducts.map((product, index) => ({ ...product, id: 201 + index, category: 'dairy', rating: 4.6, time: 8, tag: 'Top pick', detail: `${product.name} is a popular dairy essential.` })),
  ...peopleAlsoBought.map((product, index) => ({ ...product, id: 301 + index, category: index < 4 ? 'dairy' : 'snacks', rating: 4.4, time: 9, tag: 'Frequently bought', detail: `${product.name} pairs well with your grocery basket.` })),
];

export const productCatalog = [...products, ...railProducts];

export const profile = {
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

export const collectionMap = {
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

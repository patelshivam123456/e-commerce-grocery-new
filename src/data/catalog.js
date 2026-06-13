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
  { id: 19, name: 'Baby Spinach', category: 'vegetables', price: 35, oldPrice: 48, unit: '150 g', rating: 4.6, time: 8, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80', tag: 'Leafy fresh', detail: 'Tender spinach leaves triple-sorted for salads, smoothies and quick saag.' },
  { id: 20, name: 'Cauliflower Florets', category: 'vegetables', price: 52, oldPrice: 68, unit: '400 g', rating: 4.3, time: 10, image: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=500&q=80', tag: 'Clean cut', detail: 'Fresh cauliflower florets trimmed for gobi masala, roasting and pulao.' },
  { id: 21, name: 'English Cucumber', category: 'vegetables', price: 39, oldPrice: 49, unit: '500 g', rating: 4.5, time: 7, image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80', tag: 'Hydrating', detail: 'Cool crunchy cucumbers with thin skin for salads, sandwiches and raita.' },
  { id: 22, name: 'Sweet Lime', category: 'fruits', price: 92, oldPrice: 115, unit: '4 pcs', rating: 4.4, time: 9, image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=500&q=80', tag: 'Juicy', detail: 'Handpicked sweet limes with bright citrus flavor for fresh juice.' },
  { id: 23, name: 'Papaya Medium', category: 'fruits', price: 68, oldPrice: 85, unit: '1 pc', rating: 4.5, time: 10, image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=500&q=80', tag: 'Naturally ripe', detail: 'Golden papaya selected at a ready-to-eat ripeness for breakfast bowls.' },
  { id: 24, name: 'Pomegranate', category: 'fruits', price: 142, oldPrice: 170, unit: '2 pcs', rating: 4.6, time: 11, image: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=500&q=80', tag: 'Antioxidant rich', detail: 'Ruby pomegranates with firm skin and sweet-tart arils for snacks and juice.' },
  { id: 25, name: 'Fresh Paneer', category: 'dairy', price: 98, oldPrice: 120, unit: '200 g', rating: 4.7, time: 7, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80', tag: 'Soft cubes', detail: 'Fresh paneer with a soft texture for curries, rolls and protein-rich meals.' },
  { id: 26, name: 'Salted Butter', category: 'dairy', price: 60, oldPrice: 68, unit: '100 g', rating: 4.8, time: 6, image: 'https://images.unsplash.com/photo-1589985270958-4b7bb135bc9d?auto=format&fit=crop&w=500&q=80', tag: 'Creamy', detail: 'Smooth salted butter for toast, baking, parathas and everyday cooking.' },
  { id: 27, name: 'Cheddar Cheese Slices', category: 'dairy', price: 135, oldPrice: 165, unit: '200 g', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=500&q=80', tag: 'Melts well', detail: 'Cheddar slices packed for burgers, sandwiches and quick cheese toast.' },
  { id: 28, name: 'Multigrain Bread', category: 'bakery', price: 65, oldPrice: 78, unit: '400 g', rating: 4.5, time: 10, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80', tag: 'Seeded loaf', detail: 'Soft multigrain bread with seeds and grains for wholesome sandwiches.' },
  { id: 29, name: 'Chocolate Muffin', category: 'bakery', price: 85, oldPrice: 105, unit: '2 pcs', rating: 4.6, time: 12, image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=500&q=80', tag: 'Fresh baked', detail: 'Moist chocolate muffins with a rich crumb for tea-time snacking.' },
  { id: 30, name: 'Garlic Bread Loaf', category: 'bakery', price: 72, oldPrice: 90, unit: '250 g', rating: 4.4, time: 13, image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=500&q=80', tag: 'Garlic butter', detail: 'Ready-to-toast garlic bread loaf with herbed butter flavor in every slice.' },
  { id: 31, name: 'Roasted Makhana', category: 'snacks', price: 119, oldPrice: 145, unit: '80 g', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=500&q=80', tag: 'Light snack', detail: 'Crisp roasted makhana seasoned lightly for a low-oil evening snack.' },
  { id: 32, name: 'Cream Biscuits', category: 'snacks', price: 45, oldPrice: 55, unit: '150 g', rating: 4.3, time: 7, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80', tag: 'Tea time', detail: 'Crunchy biscuits with smooth cream filling for tea breaks and lunch boxes.' },
  { id: 33, name: 'Trail Mix Nuts', category: 'snacks', price: 199, oldPrice: 245, unit: '200 g', rating: 4.7, time: 9, image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=500&q=80', tag: 'Energy mix', detail: 'Balanced mix of nuts, seeds and raisins for a filling on-the-go snack.' },
  { id: 34, name: 'Orange Juice', category: 'drinks', price: 99, oldPrice: 125, unit: '1 ltr', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=500&q=80', tag: 'No fizz', detail: 'Refreshing orange juice with a pulpy citrus taste for breakfast and snacks.' },
  { id: 35, name: 'Tender Coconut Water', category: 'drinks', price: 65, oldPrice: 80, unit: '200 ml', rating: 4.6, time: 7, image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?auto=format&fit=crop&w=500&q=80', tag: 'Hydration', detail: 'Naturally sweet coconut water packed for quick cooling hydration.' },
  { id: 36, name: 'Iced Tea Peach', category: 'drinks', price: 70, oldPrice: 95, unit: '500 ml', rating: 4.4, time: 9, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80', tag: 'Chilled sip', detail: 'Peach-flavored iced tea with a smooth finish for hot afternoons.' },
  { id: 37, name: 'Floor Cleaner', category: 'household', price: 145, oldPrice: 185, unit: '1 ltr', rating: 4.4, time: 12, image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80', tag: 'Kills germs', detail: 'Multipurpose floor cleaner with a fresh fragrance for daily mopping.' },
  { id: 38, name: 'Kitchen Towels', category: 'household', price: 110, oldPrice: 140, unit: '2 rolls', rating: 4.5, time: 10, image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=500&q=80', tag: 'Absorbent', detail: 'Soft absorbent kitchen towel rolls for spills, cleaning and food prep.' },
  { id: 39, name: 'Garbage Bags', category: 'household', price: 89, oldPrice: 120, unit: '30 pcs', rating: 4.3, time: 11, image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=500&q=80', tag: 'Leak proof', detail: 'Strong garbage bags with tie handles for everyday home waste disposal.' },
  { id: 40, name: 'Mint Toothpaste', category: 'personal', price: 105, oldPrice: 135, unit: '150 g', rating: 4.6, time: 8, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=500&q=80', tag: 'Fresh breath', detail: 'Mint toothpaste for daily cavity protection and a long-lasting fresh feel.' },
  { id: 41, name: 'Body Lotion', category: 'personal', price: 225, oldPrice: 280, unit: '250 ml', rating: 4.5, time: 10, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80', tag: 'Deep moisture', detail: 'Lightweight body lotion that absorbs quickly and keeps skin soft.' },
  { id: 42, name: 'Handwash Refill', category: 'personal', price: 99, oldPrice: 130, unit: '750 ml', rating: 4.4, time: 9, image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=500&q=80', tag: 'Gentle foam', detail: 'Economy handwash refill with a gentle formula for frequent use.' },
  { id: 43, name: 'Instant Poha', category: 'instant', price: 79, oldPrice: 99, unit: '250 g', rating: 4.3, time: 6, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80', tag: 'Breakfast ready', detail: 'Ready-to-cook poha mix with peanuts and spices for a quick breakfast.' },
  { id: 44, name: 'Tomato Soup Cup', category: 'instant', price: 49, oldPrice: 65, unit: '50 g', rating: 4.2, time: 5, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80', tag: 'Just add water', detail: 'Instant tomato soup cup with herbs for a warm snack in minutes.' },
  { id: 45, name: 'Frozen Veg Momos', category: 'instant', price: 165, oldPrice: 199, unit: '12 pcs', rating: 4.5, time: 12, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=500&q=80', tag: 'Steam & serve', detail: 'Frozen vegetable momos with a soft wrapper and savory filling.' },
  { id: 46, name: 'Red Onion', category: 'vegetables', price: 34, oldPrice: 44, unit: '1 kg', rating: 4.4, time: 8, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80', tag: 'Kitchen staple', detail: 'Firm red onions for tadka, gravies, salads and everyday meal prep.' },
  { id: 47, name: 'Potato Fresh', category: 'vegetables', price: 38, oldPrice: 50, unit: '1 kg', rating: 4.5, time: 7, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80', tag: 'All purpose', detail: 'Clean potatoes selected for fries, curries, parathas and quick snacks.' },
  { id: 48, name: 'Carrot Orange', category: 'vegetables', price: 58, oldPrice: 75, unit: '500 g', rating: 4.6, time: 9, image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=500&q=80', tag: 'Sweet crunch', detail: 'Bright carrots with a crisp bite for salads, soups, halwa and stir fries.' },
  { id: 49, name: 'Green Beans', category: 'vegetables', price: 64, oldPrice: 82, unit: '250 g', rating: 4.3, time: 10, image: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=500&q=80', tag: 'Trim fresh', detail: 'Tender green beans sorted for poriyal, pulao, noodles and mixed vegetables.' },
  { id: 50, name: 'Button Mushroom', category: 'vegetables', price: 92, oldPrice: 115, unit: '200 g', rating: 4.4, time: 11, image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=500&q=80', tag: 'Umami rich', detail: 'Fresh button mushrooms for creamy curries, omelettes, pasta and sauteed sides.' },
  { id: 51, name: 'Kesar Mango', category: 'fruits', price: 189, oldPrice: 230, unit: '2 pcs', rating: 4.8, time: 12, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80', tag: 'Seasonal sweet', detail: 'Aromatic mangoes with golden pulp for desserts, shakes and fresh snacking.' },
  { id: 52, name: 'Black Grapes', category: 'fruits', price: 98, oldPrice: 125, unit: '500 g', rating: 4.5, time: 9, image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80', tag: 'Seedless', detail: 'Juicy black grapes packed for lunch boxes, fruit bowls and chilled snacks.' },
  { id: 53, name: 'Kiwi Green', category: 'fruits', price: 135, oldPrice: 165, unit: '3 pcs', rating: 4.4, time: 10, image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=500&q=80', tag: 'Tangy fresh', detail: 'Green kiwis with a sweet-tart taste for smoothies, desserts and salads.' },
  { id: 54, name: 'Watermelon Slice', category: 'fruits', price: 72, oldPrice: 90, unit: '1 kg', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=500&q=80', tag: 'Cooling', detail: 'Fresh watermelon portion cut from ripe fruit for quick summer hydration.' },
  { id: 55, name: 'Dragon Fruit', category: 'fruits', price: 159, oldPrice: 195, unit: '1 pc', rating: 4.3, time: 13, image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=500&q=80', tag: 'Exotic pick', detail: 'Mildly sweet dragon fruit with speckled flesh for bowls and smoothies.' },
  { id: 56, name: 'Fresh Curd', category: 'dairy', price: 42, oldPrice: 50, unit: '400 g', rating: 4.7, time: 6, image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=500&q=80', tag: 'Set curd', detail: 'Thick fresh curd for meals, raita, lassi and everyday cooking.' },
  { id: 57, name: 'Buttermilk Masala', category: 'dairy', price: 18, oldPrice: 22, unit: '200 ml', rating: 4.5, time: 6, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=500&q=80', tag: 'Spiced sip', detail: 'Light masala buttermilk with cooling spices for meals and hot afternoons.' },
  { id: 58, name: 'Fresh Cream', category: 'dairy', price: 78, oldPrice: 95, unit: '200 ml', rating: 4.4, time: 8, image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=500&q=80', tag: 'Rich texture', detail: 'Smooth fresh cream for curries, desserts, pasta sauces and coffee.' },
  { id: 59, name: 'Mozzarella Cheese', category: 'dairy', price: 165, oldPrice: 210, unit: '200 g', rating: 4.6, time: 9, image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=500&q=80', tag: 'Pizza melt', detail: 'Stretchy mozzarella cheese for pizzas, sandwiches, baked dishes and snacks.' },
  { id: 60, name: 'Flavoured Lassi', category: 'dairy', price: 35, oldPrice: 45, unit: '180 ml', rating: 4.5, time: 7, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=500&q=80', tag: 'Sweet chilled', detail: 'Creamy flavoured lassi for a refreshing dairy drink after meals.' },
  { id: 61, name: 'Pav Buns', category: 'bakery', price: 42, oldPrice: 52, unit: '6 pcs', rating: 4.4, time: 10, image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=80', tag: 'Soft buns', detail: 'Soft pav buns for bhaji, vada pav, burgers and toasted snacks.' },
  { id: 62, name: 'Atta Cookies', category: 'bakery', price: 95, oldPrice: 120, unit: '200 g', rating: 4.5, time: 12, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80', tag: 'Tea companion', detail: 'Crunchy atta cookies with a homestyle taste for tea and coffee breaks.' },
  { id: 63, name: 'Blueberry Donut', category: 'bakery', price: 79, oldPrice: 99, unit: '1 pc', rating: 4.6, time: 13, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80', tag: 'Sweet treat', detail: 'Soft donut topped with blueberry glaze for dessert cravings.' },
  { id: 64, name: 'Pizza Base', category: 'bakery', price: 55, oldPrice: 70, unit: '2 pcs', rating: 4.3, time: 11, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80', tag: 'Bake ready', detail: 'Ready pizza bases for quick homemade pizzas with crisp edges.' },
  { id: 65, name: 'Banana Walnut Cake', category: 'bakery', price: 145, oldPrice: 180, unit: '250 g', rating: 4.7, time: 14, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80', tag: 'Fresh slice', detail: 'Moist banana walnut cake with nutty crunch for dessert or tea time.' },
  { id: 66, name: 'Masala Peanuts', category: 'snacks', price: 65, oldPrice: 82, unit: '150 g', rating: 4.4, time: 7, image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=500&q=80', tag: 'Spicy crunch', detail: 'Crunchy masala peanuts for evening snacks, travel packs and parties.' },
  { id: 67, name: 'Nachos Chips', category: 'snacks', price: 90, oldPrice: 115, unit: '180 g', rating: 4.5, time: 8, image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?auto=format&fit=crop&w=500&q=80', tag: 'Dip ready', detail: 'Crisp nachos chips that pair well with salsa, cheese dip and movie nights.' },
  { id: 68, name: 'Granola Bar', category: 'snacks', price: 55, oldPrice: 70, unit: '40 g', rating: 4.3, time: 6, image: 'https://images.unsplash.com/photo-1622484211148-7d2e421c9af7?auto=format&fit=crop&w=500&q=80', tag: 'On the go', detail: 'Chewy granola bar with oats and nuts for a quick energy bite.' },
  { id: 69, name: 'Popcorn Salted', category: 'snacks', price: 85, oldPrice: 105, unit: '100 g', rating: 4.6, time: 7, image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=500&q=80', tag: 'Movie snack', detail: 'Ready-to-eat salted popcorn with a light crunch for sharing.' },
  { id: 70, name: 'Fruit Jelly Cups', category: 'snacks', price: 75, oldPrice: 95, unit: '6 pcs', rating: 4.2, time: 9, image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=500&q=80', tag: 'Kids pick', detail: 'Assorted fruit jelly cups for lunch boxes, desserts and quick treats.' },
  { id: 71, name: 'Cola Bottle', category: 'drinks', price: 45, oldPrice: 55, unit: '750 ml', rating: 4.4, time: 6, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=500&q=80', tag: 'Chilled fizz', detail: 'Classic cola served chilled for meals, parties and weekend snacking.' },
  { id: 72, name: 'Mineral Water', category: 'drinks', price: 20, oldPrice: 24, unit: '1 ltr', rating: 4.7, time: 5, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80', tag: 'Hydration', detail: 'Packaged drinking water for daily hydration, travel and home use.' },
  { id: 73, name: 'Mango Drink', category: 'drinks', price: 40, oldPrice: 50, unit: '600 ml', rating: 4.5, time: 7, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=500&q=80', tag: 'Fruity sip', detail: 'Sweet mango drink with a bright fruit taste for chilled refreshment.' },
  { id: 74, name: 'Energy Drink', category: 'drinks', price: 115, oldPrice: 140, unit: '250 ml', rating: 4.3, time: 8, image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=500&q=80', tag: 'Quick boost', detail: 'Carbonated energy drink for busy days, workouts and late-night plans.' },
  { id: 75, name: 'Soda Water', category: 'drinks', price: 32, oldPrice: 40, unit: '750 ml', rating: 4.2, time: 6, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=500&q=80', tag: 'Mixer', detail: 'Plain soda water with sharp fizz for mocktails, mixers and fresh lime soda.' },
  { id: 76, name: 'Toilet Cleaner', category: 'household', price: 99, oldPrice: 130, unit: '500 ml', rating: 4.5, time: 11, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=500&q=80', tag: 'Hygiene care', detail: 'Powerful toilet cleaner for stain removal and fresh bathroom hygiene.' },
  { id: 77, name: 'Room Freshener', category: 'household', price: 149, oldPrice: 190, unit: '250 ml', rating: 4.4, time: 10, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80', tag: 'Fresh scent', detail: 'Room freshener spray with a clean fragrance for living rooms and bedrooms.' },
  { id: 78, name: 'Scrub Sponge', category: 'household', price: 45, oldPrice: 60, unit: '4 pcs', rating: 4.3, time: 9, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80', tag: 'Dish care', detail: 'Durable scrub sponges for utensils, counters and everyday kitchen cleaning.' },
  { id: 79, name: 'Fabric Softener', category: 'household', price: 175, oldPrice: 225, unit: '860 ml', rating: 4.5, time: 12, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80', tag: 'Soft wash', detail: 'Fabric softener that leaves clothes smooth, fresh and easy to iron.' },
  { id: 80, name: 'Aluminium Foil', category: 'household', price: 125, oldPrice: 155, unit: '9 m', rating: 4.4, time: 10, image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=500&q=80', tag: 'Kitchen wrap', detail: 'Food-grade aluminium foil for packing, baking, grilling and keeping meals warm.' },
  { id: 81, name: 'Neem Soap', category: 'personal', price: 55, oldPrice: 70, unit: '125 g', rating: 4.4, time: 8, image: 'https://images.unsplash.com/photo-1607006483224-4a5d9f2c65f8?auto=format&fit=crop&w=500&q=80', tag: 'Daily bath', detail: 'Neem soap with a clean herbal fragrance for everyday bathing.' },
  { id: 82, name: 'Coconut Hair Oil', category: 'personal', price: 135, oldPrice: 170, unit: '200 ml', rating: 4.6, time: 9, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=80', tag: 'Hair care', detail: 'Coconut hair oil for scalp massage, nourishment and soft-looking hair.' },
  { id: 83, name: 'Sunscreen Lotion', category: 'personal', price: 299, oldPrice: 380, unit: '100 ml', rating: 4.5, time: 10, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80', tag: 'SPF care', detail: 'Light sunscreen lotion for daily sun protection without a heavy feel.' },
  { id: 84, name: 'Deodorant Spray', category: 'personal', price: 185, oldPrice: 240, unit: '150 ml', rating: 4.3, time: 11, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80', tag: 'Fresh day', detail: 'Long-lasting deodorant spray with a clean fragrance for daily use.' },
  { id: 85, name: 'Lip Balm', category: 'personal', price: 95, oldPrice: 120, unit: '10 g', rating: 4.4, time: 8, image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=500&q=80', tag: 'Soft lips', detail: 'Moisturising lip balm for dry lips with a smooth non-sticky finish.' },
  { id: 86, name: 'Ready Upma Mix', category: 'instant', price: 89, oldPrice: 115, unit: '250 g', rating: 4.3, time: 6, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=80', tag: 'Quick breakfast', detail: 'Instant upma mix with semolina and spices for a warm breakfast in minutes.' },
  { id: 87, name: 'Cup Noodles Veg', category: 'instant', price: 55, oldPrice: 70, unit: '70 g', rating: 4.4, time: 5, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80', tag: 'Hot cup', detail: 'Vegetable cup noodles with seasoning for a quick snack anywhere.' },
  { id: 88, name: 'Frozen Paratha', category: 'instant', price: 135, oldPrice: 165, unit: '5 pcs', rating: 4.5, time: 11, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80', tag: 'Heat & eat', detail: 'Layered frozen parathas that cook quickly on a hot tawa.' },
  { id: 89, name: 'Pasta Arrabbiata', category: 'instant', price: 145, oldPrice: 180, unit: '300 g', rating: 4.4, time: 12, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80', tag: 'Ready meal', detail: 'Ready-to-heat arrabbiata pasta with tomato sauce and herbs.' },
  { id: 90, name: 'Veggie Burger Patty', category: 'instant', price: 155, oldPrice: 195, unit: '4 pcs', rating: 4.3, time: 12, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80', tag: 'Freezer snack', detail: 'Frozen vegetable burger patties for quick burgers, wraps and snack plates.' },
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
    title: 'Top 10 products',
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

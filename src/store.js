import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialOrder = {
  id: 'FD10291',
  items: [
    { id: 5, quantity: 2 },
    { id: 7, quantity: 1 },
    { id: 17, quantity: 2 },
  ],
  location: 'Current location',
  status: 'Out for delivery',
  minutes: 6,
  total: 248,
  placedAt: '09 Jun, 05:15 pm',
  payment: 'Paid via UPI',
  address: 'Flat 204, Green Avenue, Current location',
};

const commerceSlice = createSlice({
  name: 'commerce',
  initialState: {
    cart: {},
    wishlist: [5, 10],
    coupon: '',
    location: 'Current location',
    addresses: [
      { id: 1, type: 'Home', address: '19S, Sector 69, Gurugram, Haryana', short: 'Sector 69, Gurugram' },
      { id: 2, type: 'Other', address: 'Chauhan pg Yadav Dhaba, Mullahera, Sector 22, Gurugram, Haryana', short: 'Sector 22, Gurugram' },
      { id: 3, type: 'Home', address: 'West Punjabi Bagh, Punjabi Bagh, New Delhi', short: 'West Punjabi Bagh' },
    ],
    orders: [initialOrder],
    savedOrders: ['FD10291'],
    walletBalance: 320,
    payment: {
      method: 'UPI',
      upiId: '',
      card: {
        number: '',
        name: '',
        expiry: '',
        cvv: '',
      },
    },
    shareProductId: null,
    shareStatus: '',
  },
  reducers: {
    addToCart(state, action) {
      const key = String(action.payload?.cartKey ?? action.payload);
      state.cart[key] = (state.cart[key] || 0) + 1;
    },
    decreaseCart(state, action) {
      const key = String(action.payload?.cartKey ?? action.payload);
      const nextQuantity = (state.cart[key] || 0) - 1;
      if (nextQuantity <= 0) {
        delete state.cart[key];
      } else {
        state.cart[key] = nextQuantity;
      }
    },
    clearCart(state) {
      state.cart = {};
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    toggleWishlist(state, action) {
      const productId = action.payload;
      state.wishlist = state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId];
    },
    setCoupon(state, action) {
      state.coupon = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    addAddress(state, action) {
      state.addresses.unshift({ id: Date.now(), ...action.payload });
      state.location = action.payload.short;
    },
    addOrder(state, action) {
      state.orders.unshift(action.payload);
    },
    toggleSavedOrder(state, action) {
      const orderId = action.payload;
      state.savedOrders = state.savedOrders.includes(orderId)
        ? state.savedOrders.filter((id) => id !== orderId)
        : [...state.savedOrders, orderId];
    },
    setPaymentMethod(state, action) {
      state.payment.method = action.payload;
    },
    setUpiId(state, action) {
      state.payment.upiId = action.payload;
    },
    setCardField(state, action) {
      const { field, value } = action.payload;
      state.payment.card[field] = value;
    },
    addWalletFunds(state, action) {
      state.walletBalance += action.payload;
    },
    deductWalletFunds(state, action) {
      state.walletBalance = Math.max(0, state.walletBalance - action.payload);
    },
    openShare(state, action) {
      state.shareProductId = action.payload;
      state.shareStatus = '';
    },
    closeShare(state) {
      state.shareProductId = null;
      state.shareStatus = '';
    },
    setShareStatus(state, action) {
      state.shareStatus = action.payload;
    },
  },
});

export const {
  addToCart,
  decreaseCart,
  clearCart,
  setCart,
  toggleWishlist,
  setCoupon,
  setLocation,
  addAddress,
  addOrder,
  toggleSavedOrder,
  setPaymentMethod,
  setUpiId,
  setCardField,
  addWalletFunds,
  deductWalletFunds,
  openShare,
  closeShare,
  setShareStatus,
} = commerceSlice.actions;

export const store = configureStore({
  reducer: {
    commerce: commerceSlice.reducer,
  },
});

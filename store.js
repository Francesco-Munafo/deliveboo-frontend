import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  cart: [],
  savedCart: localStorage.getItem("storageCart"),
  savedTotal: localStorage.getItem("storageTotalPrice"),
  totalPrice: 0,
  username: "",
  address: "",
  user_email: "",
  phone: "",
  saveCartToLocalStorage() {
    localStorage.setItem("storageCart", JSON.stringify(this.cart));
  },
  saveTotalPrice() {
    localStorage.setItem("storageTotalPrice", JSON.stringify(this.totalPrice));
  },
});

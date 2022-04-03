import create from "zustand";
import { devtools, persist } from "zustand/middleware";
let useStore = create((set) => ({
  filter: 2, //fetches furnitures on loading
  electronics: () => set((state) => ({ filter: 0 })),
  fashions: () => set((state) => ({ filter: 1 })),
  furnitures: () => set((state) => ({ filter: 2 })),
  accessories: () => set((state) => ({ filter: 3 })),
  vehicles: () => set((state) => ({ filter: 4 })),

  //product increment decrements products
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  cart: [],
  addToCart: (cartInfo) =>
    set((state) => ({ cart: [...state.cart, cartInfo] })),
}));

export default useStore;

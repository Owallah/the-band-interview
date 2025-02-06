import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  interface ProductState {
    products: Product[];
    addProduct: (product: Product) => void;
    updateProduct: (id: number, updatedProduct: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
    setProducts: (products: Product[]) => void;
  }
  
  export const useProductStore = create<ProductState>((set) => ({
    products: [],
    addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    updateProduct: (id, updatedProduct) =>
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        ),
      })),
    deleteProduct: (id) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      })),
    setProducts: (products) => set({ products }),
  }));
import axios from "axios";
import { useProductStore } from "../../context/useProductStore";

const BASE_URL = "https://fakestoreapi.com/products";

// fetch all the products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        useProductStore.getState().setProducts(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
};

// fetch a single product by its ID
export const fetchProductByID = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ID ${id}:`, error);
        throw new Error("Failed to fetch product");
    }
};

// add a new product
export const addNewProduct = async (product: any) => {
    try {
        const response = await axios.post(BASE_URL, product);
        useProductStore.getState().addProduct(response.data)
        return response.data;
    } catch (error) {
        console.error("Error adding new product:", error);
        throw new Error("Failed to add product");
    }
};

// update a product
export const updateProduct = async (id: number, product: any) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, product);
        useProductStore.getState().updateProduct(id, response.data)
        return response.data;
    } catch (error) {
        console.error(`Error updating product ID ${id}:`, error);
        throw new Error("Failed to update product");
    }
};

// delete a product by its ID
export const deleteProduct = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    useProductStore.getState().deleteProduct(id)
    console.log("Product deleted successfully");
    
    return response.data;
  } catch (error) {
    console.error(`Error deleting product ID ${id}:`, error);
    throw new Error("Failed to delete product");
  }
};

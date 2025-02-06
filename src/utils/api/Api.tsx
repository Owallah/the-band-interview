import axios from "axios"

const BASE_URL = "https://fakestoreapi.com/products"

// fetch all the products
export const fetchProducts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

// fetch a single product by its ID
export const fetchProductByID = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
}

// add a new product 
export const addNewProduct = async (product: any) => {
    const response = await axios.post(BASE_URL, product);
    return response.data;
}

// update a product
export const updateProducts = async (id: number, product: any) => {
    const response = await axios.put(`${BASE_URL}/${id}`, product);
    return response.data;
}

// delete a product by its ID
export const deleteProducts = async (id: number) => {
    const response = await axios.delete(`${BASE_URL}/$id`);
    return response.data;
}
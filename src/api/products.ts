import { CreateProduct, UpdateProduct } from "../interfaces/product.interface";

const API = "http://localhost:3000/api";

export const createProductRequest = (product: CreateProduct) =>
  fetch(`${API}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getProductRequest = () => fetch(`${API}/products`);

export const deleteProductRequest = (id: string) =>
  fetch(`${API}/products/${id}`, {
    method: "DELETE",
  });

export const updateProductRequest = (id: string, product: UpdateProduct) =>
  fetch(`${API}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });

import { createContext, useEffect, useState } from "react";
import {
  createProductRequest,
  getProductRequest,
  deleteProductRequest,
  updateProductRequest,
} from "../api/products";
import { Product, CreateProduct, UpdateProduct } from "../interfaces/product.interface";

interface ProductContextValue {
  products: Product[];
  createProduct: (product: CreateProduct) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  updateProduct: (id: string, product: UpdateProduct) => Promise<void>;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  createProduct: async () => {},
  deleteProduct: async () => {},
  updateProduct: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductRequest()
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const createProduct = async (product: CreateProduct) => {
    const res = await createProductRequest(product);
    const data = await res.json();
    setProducts([...products, data]);
  };

  const deleteProduct = async (id: string) => {
    const res = await deleteProductRequest(id);
    if (res.status === 204) {
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  const updateProduct = async (id: string, product: UpdateProduct) => {
    const res = await updateProductRequest(id, product);
    const data = await res.json();
    setProducts(
      products.map((prod) => (prod._id === id ? { ...prod, ...data } : prod))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

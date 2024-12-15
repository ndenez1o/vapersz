import React, { createContext, useContext, useState } from "react";
import { Product } from "../interfaces/product.interface";

// Creamos el contexto
const CartContext = createContext<any>(null);

// Proveedor de contexto para el carrito
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el carrito en cualquier componente
export const useCart = () => useContext(CartContext);

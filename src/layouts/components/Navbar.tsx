import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; // Para redirigir a Checkout

function Navbar() {
  const { cart, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const cartItemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const finishBuy = () => {
    // Al finalizar, redirigir al Checkout
    setIsCartOpen(false);
    navigate("/checkout", { state: { cart, totalPrice } });
  };

  return (
    <>
      <div className="navbar bg-slate-100 text-white fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
          <a
            href="/"
            className="font-bold text-xl text-green-500 hover:text-green-700"
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </a>
          <div className="space-x-4 flex">
            <button
              onClick={toggleCart}
              className="relative text-emerald-600 hover:text-green-400 focus:outline-none"
            >
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-2 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold text-emerald-600">Tu Carrito</h2>
          {cart.length === 0 ? (
            <p className="mt-4">No hay productos en el carrito.</p>
          ) : (
            <>
              <ul className="mt-4 space-y-2">
                {cart.map((product, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <span className="block font-semibold">
                        {product.brand} - {product.model}
                      </span>
                      <span className="block text-sm text-gray-500">
                        ${product.price} x {product.quantity || 1}
                      </span>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700 text-sm"
                      onClick={() => removeFromCart(product)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 font-bold text-lg text-gray-700">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </>
          )}
        </div>
        <button
          className="absolute top-4 right-4 text-emerald-600 hover:text-green-400"
          onClick={toggleCart}
        >
          Cerrar
        </button>
        <button
          className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={finishBuy}
        >
          Finalizar compra
        </button>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        ></div>
      )}
    </>
  );
}

export default Navbar;

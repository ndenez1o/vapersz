import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
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
              className="text-emerald-600 hover:text-green-400 focus:outline-none"
            >
              <FaShoppingCart size={20} />
            </button>
            {/* <a href="/login" className="text-emerald-600 hover:text-green-400">
              <FaUser size={20} />
            </a> */}
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
          <p className="mt-4">No hay productos en el carrito.</p>
        </div>
        <button
          className="absolute top-4 right-4 text-emerald-600 hover:text-green-400"
          onClick={toggleCart}
        >
          Cerrar
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

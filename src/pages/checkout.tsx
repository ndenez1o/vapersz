import React, { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pago realizado con éxito!");
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-slate-100 mt-24">
        ¡Ya casi completamos la compra!
      </h1>
      <p className="text-center text-slate-100">Solo unos pasos más y es tuyo</p>

      <div className="max-w-4xl mx-auto p-8 bg-slate-100 rounded shadow-md mt-12 mb-12">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Checkout
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Nombre Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Dirección</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Ciudad</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Código Postal</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-gray-700">Número de Tarjeta</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex space-x-4 md:space-x-0 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <label className="block text-gray-700">Vencimiento</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
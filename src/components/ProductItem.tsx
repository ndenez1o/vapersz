import { Product } from "../interfaces/product.interface";
import { useCart } from '../context/CartContext'; // Importamos el hook para acceder al carrito

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  const { addToCart } = useCart(); // Desestructuramos la función addToCart del contexto

  const handleAddToCart = () => {
    addToCart(product); // Llamamos a la función addToCart para agregar el producto al carrito
    console.log("Producto agregado al carrito", product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={product.image}
        alt={product.model}
      />
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        {product.brand} - {product.model}
      </h3>
      <div className="flex justify-between">
        <span className="font-bold text-slate-800 text-lg">${product.price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"    
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

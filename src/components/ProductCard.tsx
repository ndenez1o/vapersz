import Horizontal from '../assets/gardenite/horizontal.jpg';
function ProductCard () {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src={Horizontal}
                alt="Product"
            />
            <h3 className="text-lg font-bold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Product Description</p>
            <div className="flex justify-between">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Comprar
                </button>
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ProductCard
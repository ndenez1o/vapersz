import ProductList from "../../components/ProductList";
import ProdsCarousel from "../../components/ProdsCarousel";

function ProductsContainer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProdsCarousel />
      <h1 className="text-center text-2xl font-semibold bg-slate-100 rounded-lg py-3 text-emerald-600 mb-4 mt-20">
        Nuestros productos
      </h1>
      <ProductList />
    </div>
  );
}

export default ProductsContainer;

import ProductItem from "./ProductItem";
import useProducts from "../context/useProduct";

function ProductList() {
  const { products } = useProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 bg-emerald-800">
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
}

export default ProductList;

import ProductCard from "../components/ProductCard";
function IgnitePage() {
  return (
    <>
      <div className="mt-20">
        <h1>Ignite</h1>
      </div>

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default IgnitePage;

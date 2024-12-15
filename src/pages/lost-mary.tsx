import ProductCard from "../components/ProductCard";
function LostMaryPage() {
  return (<>
    <div className="mt-20"><h1>Lost Mary</h1></div>

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

export default LostMaryPage;

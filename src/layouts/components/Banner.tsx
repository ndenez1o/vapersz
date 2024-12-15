import { useEffect, useState } from "react";
import BGFrame from '../../assets/bg-frame.svg';
import BGFrameMobile from '../../assets/bg-frame-mobile.svg';

const mockData = [
  { id: 1, name: "Ignite" },
  { id: 2, name: "Lost Mary" },
];

function Banner() {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(mockData);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider mobile if the screen width is 768px or less
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(mockData);
      setShowDropdown(false);
    } else {
      const results = mockData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
      setShowDropdown(results.length > 0);
    }
  }, [searchTerm]);

  return (
    <div
      className="text-white py-20 px-6 text-center mt-19 min-h-[700px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${isMobile ? BGFrameMobile : BGFrame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto relative">
          <div className="text-2xl py-2 mt-4 bg-slate-100 rounded text-emerald-600">
            <h1 className="text-3xl font-bold">Bienvenido a Vapersz</h1>
            <p className="text-lg">Redefiniendo la experiencia de vapear</p>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar productos"
              className="w-full border text-black bg-slate-100 border-gray-300 rounded-md p-2 mt-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // Timeout to handle blur when clicking dropdown items
            />
            {showDropdown && (
              <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 bg-slate-100 rounded-md shadow-lg z-10">
                {filteredData.map(item => (
                  <a
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    {item.name}
                  </a>
                ))}
                {filteredData.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">No se encontraron resultados</div>
                )}
              </div>
            )}
          </div>
          <div className="space-x-6 py-3 flex justify-between mt-6">
            <a
              href="/ignite"
              className="relative group bg-slate-100 hover:bg-slate-300 rounded px-2 py-2"
            >
              <img
                style={{ width: "250px", height: "auto" }}
                src="https://eu.ignite.co/cdn/shop/files/ignite_logo_favicon.png?v=1697563861"
                alt="Logo Ignite"
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-sm text-black bg-slate-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Ignite
              </span>
            </a>

            <a
              href="/lost-mary"
              className="relative group bg-slate-100 hover:bg-slate-300 rounded px-2 py-2"
            >
              <img
                style={{ width: "250px", height: "auto" }}
                src="https://www.mycigara.com/cdn/shop/collections/lost-mary-qm600-131324.png?v=1715861688"
                alt="Logo Lost Mary"
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-sm text-black bg-slate-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Lost Mary
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

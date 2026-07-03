import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Rooms",
    "Gallery",
    "Videos",
    "Contact",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="ABIY Guest House Logo"
    className="w-12 h-12 rounded-full object-cover bg-white p-1 shadow-md"
  />

  <div>
    <h1
      className={`text-xl md:text-2xl font-bold ${
        scroll ? "text-green-700" : "text-white"
      }`}
    >
      ABIY Guest House
    </h1>

    <p
      className={`text-xs ${
        scroll ? "text-gray-600" : "text-gray-200"
      }`}
    >
      Comfort • Peace • Hospitality
    </p>
  </div>
</div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-yellow-500 ${
                  scroll ? "text-black" : "text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:block bg-yellow-500 px-5 py-2 rounded-full font-semibold hover:bg-yellow-600"
        >
          App Coming Soon
        </button>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className={scroll ? "text-black" : "text-white"} />
          ) : (
            <FaBars className={scroll ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {item}
            </a>
          ))}

          <button className="m-5 w-[90%] bg-yellow-500 py-3 rounded-full font-semibold">
            📱 App Coming Soon
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
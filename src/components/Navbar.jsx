function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-700">
          ABIY Guest House
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-green-700">Home</a></li>
          <li><a href="#about" className="hover:text-green-700">About</a></li>
          <li><a href="#rooms" className="hover:text-green-700">Rooms</a></li>
          <li><a href="#gallery" className="hover:text-green-700">Gallery</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
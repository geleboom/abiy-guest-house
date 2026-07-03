import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="ABIY Guest House"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to ABIY Guest House
        </h1>

        <p className="mt-6 text-xl">
          Comfort • Peace • Hospitality
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
            Download Our App
          </button>

          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import heroImage from "../assets/images/hero.jpg";
import guestHouse from "../data/guestHouse";
import Button from "./Button";
import logo from "../assets/logo/logo.png";
function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <img
        src={heroImage}
        alt={guestHouse.name}
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white max-w-3xl px-6">
        <img
  src={logo}
  alt="ABIY Guest House"
  className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-white p-2 shadow-2xl mb-6"
/>
        <h1 className="text-6xl font-bold">
          {guestHouse.name}
        </h1>

        <p className="mt-5 text-2xl">
          {guestHouse.slogan}
        </p>

        <p className="mt-8 text-lg text-gray-200">
          {guestHouse.description}
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Button text="Explore Rooms" />

          <Button text="Download App" type="secondary" />

        </div>

      </div>
    </section>
  );
}

export default Hero;
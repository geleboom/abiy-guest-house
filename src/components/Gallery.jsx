import gallery from "../data/gallery";

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Gallery"
              className="rounded-xl h-64 w-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;
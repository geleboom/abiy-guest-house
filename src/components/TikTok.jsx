import roomTour from "../assets/tiktok/room-tour.jpg";
import gardenTour from "../assets/tiktok/garden-tour.jpg";
import familyRoom from "../assets/tiktok/family-room.jpg";
import { FaPlay, FaTiktok } from "react-icons/fa";

function TikTok() {
  const videos = [
    {
      image: roomTour,
      title: "Room Tour",
    },
    {
      image: gardenTour,
      title: "Garden View",
    },
    {
      image: familyRoom,
      title: "Family Room",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            Follow Us on TikTok
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our rooms, beautiful garden, and guest experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {videos.map((video, index) => (
            <a
              key={index}
              href="https://www.tiktok.com/@abiy2424241"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-5 rounded-full group-hover:scale-110 transition">
                  <FaPlay className="text-black text-2xl" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5">
                <h3 className="text-white text-xl font-bold">
                  {video.title}
                </h3>
              </div>

            </a>
          ))}

        </div>

        <div className="text-center mt-12">

          <a
            href="https://www.tiktok.com/@abiy2424241"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
          >
            <FaTiktok />
            Follow @abiy2424241
          </a>

        </div>

      </div>
    </section>
  );
}

export default TikTok;
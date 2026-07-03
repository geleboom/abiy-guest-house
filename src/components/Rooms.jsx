import rooms from "../data/rooms";
import RoomCard from "./RoomCard";

function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-green-700">
            Our Rooms
          </h2>

          <p className="mt-5 text-gray-600">
            Relax in our clean and comfortable rooms.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {rooms.map(room => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Rooms;
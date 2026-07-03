import { FaWifi, FaBed, FaTv, FaBath } from "react-icons/fa";

function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={room.image}
        alt={room.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-green-700">
          {room.name}
        </h3>

        <p className="text-gray-600 mt-3">
          {room.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5 text-gray-700">

          <div className="flex items-center gap-2">
            <FaWifi />
            Free WiFi
          </div>

          <div className="flex items-center gap-2">
            <FaBath />
            Bathroom
          </div>

          <div className="flex items-center gap-2">
            <FaTv />
            Smart TV
          </div>

          <div className="flex items-center gap-2">
            <FaBed />
            Comfortable Bed
          </div>

        </div>

        <div className="mt-6 flex justify-between items-center">

          <span className="text-xl font-bold text-green-700">
            {room.price}
          </span>

          <button className="bg-yellow-500 px-5 py-2 rounded-full font-semibold hover:bg-yellow-600">
            Coming Soon
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoomCard;
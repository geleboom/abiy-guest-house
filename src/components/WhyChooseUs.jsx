import { FaWifi, FaParking, FaShieldAlt, FaTree } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaWifi size={40} />,
      title: "Free WiFi",
      desc: "Fast internet access throughout the guest house."
    },
    {
      icon: <FaParking size={40} />,
      title: "Secure Parking",
      desc: "Safe parking space for all guests."
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "24/7 Security",
      desc: "Your comfort and safety are our priority."
    },
    {
      icon: <FaTree size={40} />,
      title: "Beautiful Garden",
      desc: "Relax in our peaceful green surroundings."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Why Choose ABIY Guest House?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              <div className="text-yellow-500 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const phone1 = "+251913469555";
  const phone2 = "+251913480555";

  const whatsappLink = "https://wa.me/251913480555";
  const tiktokLink = "https://www.tiktok.com/@abiy2424241";
  const mapLink = "https://goo.gl/maps/WhznQYHyFse31jiJ8?g_st=atm";
  const email = "abiyzed11@gmail.com";

  return (
    <motion.section
      id="contact"
      className="py-24 bg-green-700 text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get in Touch
          </h2>

          <p className="text-green-100 mt-4 text-lg">
            We'd love to hear from you. Contact us anytime for reservations or
            inquiries.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Phone */}
          <a
            href={`tel:${phone1}`}
            className="bg-white text-black rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <FaPhone className="text-4xl text-green-700 transition hover:rotate-12 hover:scale-125" />

            <div>
              <h3 className="font-bold text-xl">Call Us</h3>
              <p>{phone1}</p>
              <p>{phone2}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="text-4xl text-green-600 transition hover:rotate-12 hover:scale-125" />

            <div>
              <h3 className="font-bold text-xl">WhatsApp</h3>
              <p>Chat with us instantly</p>
            </div>
          </a>

          {/* Location */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <FaMapMarkerAlt className="text-4xl text-red-500 transition hover:rotate-12 hover:scale-125" />

            <div>
              <h3 className="font-bold text-xl">Location</h3>
              <p>Bishoftu, Ethiopia</p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
          >
            <FaTiktok className="text-4xl transition hover:rotate-12 hover:scale-125" />

            <div>
              <h3 className="font-bold text-xl">TikTok</h3>
              <p>@abiy2424241</p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="bg-white text-black rounded-2xl p-6 flex items-center gap-5 md:col-span-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
          >
            <FaEnvelope className="text-4xl text-blue-600 transition hover:rotate-12 hover:scale-125" />

            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p>{email}</p>
            </div>
          </a>

        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <a
            href={`tel:${phone1}`}
            className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transition-all px-6 py-3 rounded-full font-semibold text-black"
          >
            📞 Call Now
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all px-6 py-3 rounded-full font-semibold"
          >
            💬 WhatsApp
          </a>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all px-6 py-3 rounded-full font-semibold"
          >
            📍 Directions
          </a>

          <a
            href={tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 hover:scale-105 transition-all px-6 py-3 rounded-full font-semibold"
          >
            🎵 TikTok
          </a>

        </div>

        {/* Google Map */}
        <div className="mt-14">
          <iframe
            title="ABIY Guest House Location"
            className="w-full h-80 rounded-2xl shadow-2xl"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.973474264089!2d39.00055907501615!3d8.788561991263496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDcnMTguOCJOIDM5wrAwMCcxMS4zIkU!5e0!3m2!1sen!2set!4v1783353818072!5m2!1sen!2set"
          ></iframe>

          <div className="text-center">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-600 hover:scale-110 active:scale-95 transition-all duration-300 text-black font-bold px-8 py-4 rounded-full shadow-xl"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default Contact;
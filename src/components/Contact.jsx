import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-green-700 text-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          <div>
            <h3 className="font-bold text-2xl mb-6">
              ABIY Guest House
            </h3>

            <p className="flex gap-3 mb-4">
              <FaPhone />
              +251 913 469 555
            </p>

            <p className="flex gap-3 mb-4">
              <FaPhone />
              +251 913 480 555
            </p>

         <p className="flex gap-3 mb-4">
  <FaMapMarkerAlt />
  Bishoftu, Ethiopia
</p>

          </div>

          <iframe
            title="Google Map"
            className="rounded-xl w-full h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9708089381797!2d39.00317189999999!3d8.788812499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b0d00580056a1%3A0xaba701b86c49e2a7!2sAbiy%20Guest%20House!5e0!3m2!1sen!2set!4v1783117465537!5m2!1sen!2set"
          ></iframe>
<a
  href="https://maps.app.goo.gl/2q9fRirAGKdxcgW49?g_st=atm"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
>
  📍 Get Directions
</a>
        </div>

      </div>

    </section>
  );
}

export default Contact;
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";

function Contact() {

  const phone1 = "+251913469555";
  const phone2 = "+251913480555";

  const whatsappLink = "https://wa.me/251913480555";
  const tiktokLink = "https://www.tiktok.com/@abiy2424241";
  const mapLink = "https://maps.app.goo.gl/2q9fRirAGKdxcgW49?g_st=atm";
  const email = "info@abiyguesthouse.com";

  return (
    <section id="contact" className="py-24 bg-green-700 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Get in Touch
        </h2>

        {/* Contact Buttons */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Phone */}
          <a href={`tel:${phone1}`} className="bg-white text-black p-5 rounded-xl flex items-center gap-4">
            <FaPhone className="text-green-700" />
            <div>
              <p className="font-bold">Call Us</p>
              <p>{phone1 }</p>
              <p>{phone2 }</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a href={whatsappLink} target="_blank" className="bg-white text-black p-5 rounded-xl flex items-center gap-4">
            <FaWhatsapp className="text-green-700" />
            <div>
              <p className="font-bold">WhatsApp</p>
              <p>Chat with us instantly</p>
            </div>
          </a>

          {/* Location */}
          <a href={mapLink} target="_blank" className="bg-white text-black p-5 rounded-xl flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-700" />
            <div>
              <p className="font-bold">Location</p>
              <p>Bishoftu, Ethiopia</p>
            </div>
          </a>

          {/* TikTok */}
          <a href={tiktokLink} target="_blank" className="bg-white text-black p-5 rounded-xl flex items-center gap-4">
            <FaTiktok className="text-green-700" />
            <div>
              <p className="font-bold">TikTok</p>
              <p>@abiy2424241</p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${email}`} className="bg-white text-black p-5 rounded-xl flex items-center gap-4 md:col-span-2">
            <FaEnvelope className="text-green-700" />
            <div>
              <p className="font-bold">Email</p>
              <p>{email}</p>
            </div>
          </a>

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

    </section>
  );
}

export default Contact;
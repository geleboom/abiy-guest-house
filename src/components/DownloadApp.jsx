function DownloadApp() {
  return (
    <section className="bg-green-700 py-24 text-white text-center">

      <h2 className="text-4xl font-bold">
        Mobile App
      </h2>

      <p className="mt-6 text-xl">
        Our mobile booking application is currently under development.
      </p>

      <p className="mt-3 text-gray-200">
        Soon you'll be able to book your room directly from your phone.
      </p>

      <button
        disabled
        className="mt-10 bg-yellow-500 text-black px-8 py-3 rounded-full cursor-not-allowed opacity-80"
      >
        📱 Coming Soon
      </button>

    </section>
  );
}

export default DownloadApp;
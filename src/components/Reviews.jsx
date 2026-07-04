import reviews from "../data/reviews";
import { FaStar } from "react-icons/fa";

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-700">
            What Our Guests Say
          </h2>

          <p className="mt-4 text-gray-600">
            Experiences shared by our valued guests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.country}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;
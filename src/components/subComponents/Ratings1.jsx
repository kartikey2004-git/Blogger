import { useState } from "react";
import { Star } from "lucide-react";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      // Example: console.log or send to backend
      console.log(`User rated: ${rating} stars`);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-md mt-10 p-6 rounded-2xl shadow-xl border ">
      <h2 className="text-xl font-semibold text-center mb-4 text-white">
        Rate Your Experience
      </h2>

      <div className="flex justify-center items-center mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
              (hoveredStar || rating) >= star
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => setRating(star)}
            fill={(hoveredStar || rating) >= star ? "currentColor" : "none"}
          />
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-white text-black rounded-lg transition duration-200"
        >
          Submit Rating
        </button>
      ) : (
        <p className="text-center text-green-500 font-medium mt-2">
          Thanks for rating {rating} star{rating > 1 ? "s" : ""}!
        </p>
      )}
    </div>
  );
};

export default RatingComponent;

import { useState } from "react";
import { Star } from "lucide-react"; // lucide-react for star icons

const Rating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0); // State to store user rating
  const [hover, setHover] = useState(0); // State to store hover state

  const handleRating = (rate) => {
    setRating(rate);
    if (onRate) {
      onRate(rate); // Optional callback when a rating is given
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
            (hover || rating) > index ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => handleRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {rating > 0 ? `You rated: ${rating}/${totalStars}` : "Rate this!"}
      </span>
    </div>
  );
};

export default Rating;

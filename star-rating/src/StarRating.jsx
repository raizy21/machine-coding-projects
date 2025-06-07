import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // tracks the current rating
  const [hover, setHover] = useState(0); // tracks the hovered star

  return (
    <div className="widget-container">
      <h1>star widget</h1>
      <div className="stars-container">
        {/* map through numbers 1-5 to create star buttons */}
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={`star ${num <= (hover || rating) ? "on" : "off"}`}>
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarRating;

import React from "react";

const CardSlider = ({ maxItems }) => {
  return (
    <div className="card-slider">
      <div className="card-slider-inner flex justify-between">
        {[...Array(maxItems)].map((_, index) => (
          <div key={index} className="card">
            <img
              src={`https://via.placeholder.com/200x300?text=Card+${index + 1}`}
              alt={`Card ${index + 1}`}
            />
            <h3 className="text-lg font-semibold mt-2">
              Card Title {index + 1}
            </h3>
          </div>
        ))}
      </div>
      <button className="slider-control-prev" type="button">
        <span className="slider-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="slider-control-next" type="button">
        <span className="slider-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default CardSlider;

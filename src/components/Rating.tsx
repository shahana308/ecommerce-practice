import React from "react";
import StarFull from "../assets/star-full.svg";
import StarOutline from "../assets/star-outline.svg";
import StarHalf from "../assets/star-half.svg";

interface RatingPropTypes {
  rating: number;
}

const Rating: React.FC<RatingPropTypes> = ({ rating }) => {
  const stars = [];
  const starCount = 5;

  for (let i = 0; i < starCount; i++) {
    let starSrc;
    if (rating >= i + 0.5) {
      starSrc = StarFull;
    } else if (rating >= i) {
      starSrc = StarHalf;
    } else {
      starSrc = StarOutline;
    }

    stars.push(
      <img
        key={i}
        src={starSrc}
        alt="rating"
        style={{ width: "30px", height: "30px" }}
      />
    );
  }

  return <div>{stars}</div>;
};

export default Rating;

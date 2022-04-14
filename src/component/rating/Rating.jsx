import React, { useState } from "react";
import "./rating.scss";
import Star from "../../images/icon-star.svg";
import ThankYou from "../../images/illustration-thank-you.svg";
export default function Rating() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const RATTING_COUNT = 5;
  const rattingBubbles = Array.from(Array(RATTING_COUNT).keys()).map(
    (rating) => {
      return (
        <div key={`rating-${rating + 1}`} className="bubble-container">
          <input
            id={`rating-${rating + 1}`}
            type="radio"
            name="rating"
            value={rating + 1}
            onChange={(e) => setSelectedValue(e.target.value)}
          ></input>
          <label htmlFor={`rating-${rating + 1}`}>{rating + 1}</label>
        </div>
      );
    }
  );
  if (isSubmitted) {
    return (
      <article className="rating">
        <div className="image-container">
          <img src={ThankYou} alt="thank you!" />
        </div>
        <div className="user-selection">
          <p className="user-selection-paragraph">
            you selected {selectedValue} out of 5
          </p>
        </div>
        <div className="text-container  center-text">
          <h2 className="text-header">Thank you!</h2>
          <p className="text-paragraph">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </article>
    );
  }
  return (
    <form className="rating">
      <div className="icon-container">
        <img src={Star} alt="star" />
      </div>
      <div className="text-container">
        <h2 className="text-header">How did we do?</h2>
        <p className="text-paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-container">{rattingBubbles}</div>
      <div className="button-container">
        <button className="submit-button" onClick={() => setIsSubmitted(true)}>
          submit
        </button>
      </div>
    </form>
  );
}

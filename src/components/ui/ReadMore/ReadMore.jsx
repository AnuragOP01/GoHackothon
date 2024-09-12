import React, { useState } from "react";

const ReadMore = ({ text, className, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={`read-more-container max-w-96 ${className}`}>
      <p className="read-more-text">
        {isReadMore ? text.slice(0, maxLength) + "..." : text}
        <button
          onClick={toggleReadMore}
          className="read-more-button text-blue-500"
        >
          {isReadMore ? "Read More" : "Read Less"}
        </button>
      </p>
    </div>
  );
};

export default ReadMore;

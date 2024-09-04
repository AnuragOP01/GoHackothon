import React, { useState } from 'react';

const ReadMore = ({ text,text1, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="read-more-container">
      <p className="read-more-text">
        {isReadMore ? text.slice(0, maxLength) + '...' : text}
        {/* {isReadMore ? text1.slice(0, maxLength) + '...' : text1} */}
        <button onClick={toggleReadMore} className="read-more-button">
          {isReadMore ? 'Read More' : 'Read Less'}
        </button>
      </p>
    </div>
  );
};

export default ReadMore;

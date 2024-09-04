import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

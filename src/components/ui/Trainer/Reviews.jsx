import React from "react";
import Button from "../Button/Button";

const Reviews = () => {
  return (
    <div className="font-serif flex justify-evenly mb-20">
      <textarea
        className="bg-[url('/src/assets/images/reviews.jpg')] bg-cover bg-no-repeat h-96 w-2/4 border-4 border-blue-600 rounded-3xl p-4 text-3xl mt-20 placeholder:text- "
        placeholder="Write Your Views About This Session ......."
      ></textarea>
      <div>
        <img src="/src/assets/images/avatar.png" className="h-96"></img>
        <Button className="ml-32 " text="Submit" to="/Ourmentor" />
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";

const Thanku = (props) => {
  return (
    <div>
      <div className="text-xl text-center grid gap-y-4 m-40">
        <img
          src="/src/assets/images/check.png"
          className="h-40 w-40 m-auto"
        ></img>
        <h1 className="font-black">Thank you!</h1>
        <p className="font-bold text-gray-500">{props.msg}</p>
      </div>
    </div>
  );
};

export default Thanku;

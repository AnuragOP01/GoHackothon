import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='font-serif'>
      <NavLink to="/home">
        <div className="flex m-8 mt-20">
          <FaChevronLeft className="font-light text-5xl my-2 mx-2" />
          <h1 className="text-blue-600 font-bold">Contact Us</h1>
        </div>
      </NavLink>
      
      {/* Header text */}
      <div className='flex justify-center mb-[50px] mt-20'>
        <div className='text-center text-[20px] w-[60%]'>
          <h2 className='text-[25px] font-[500]'>Have Some Question ?</h2>
          <p>Thank you for your interest in our services. Please fill out the form below or e-mail us 
            at info@gohackathon.in and we will get back to you promptly regarding your request.</p>
        </div>
      </div>
      <div className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/src/assets/images/bg-contactus.png)', // Set your background image path
      }}
    >
      {/* Form */}
      <div className="relative flex justify-start mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border-2 ml-[100px] w-[40%] h-[500px] bg-white p-6"
        >
          <div className="flex gap-4 mx-10 my-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="firstName" className="text-gray-700 font-bold">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="lastName" className="text-gray-700 font-bold">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-4 mx-10 my-4">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="phone" className="text-gray-700 font-bold">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="email" className="text-gray-700 font-bold">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col mx-10 my-4">
            <label htmlFor="message" className="text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 h-[100px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            />
          </div>
          <div className="text-left ml-[40px]">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 w-[40%] text-center text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>

        {/* Bottom-Right Corner Box */}
        <div className="absolute bottom-4 right-0 mb-8 mr-8  text-white p-4 rounded-md w-[400px]">
          <h3 className="text-[30px] font-[400]"> Request a Call Back</h3>
          <p className="text-lg mt-[10px]"> <i class="fa-solid fa-phone"></i> +91 7678476713 ,+91 9910018925 </p>
           <p className="text-lg mt-[10px]"> <i class="fa-solid fa-envelope"></i> info@gohackathon.in , hr@gohackathon.in</p>
          <p className="text-lg mt-[10px]"> <i class="fa-solid fa-location-dot"></i> H-87, Sector-63, Noida, U.p, 201301</p><hr/>
          <div className='mt-[10px]'>
            <i class="fa-brands fa-instagram mr-[10px] text-[20px]"></i> <i class="fa-brands fa-facebook mr-[10px] text-[20px]"></i> <i class="fa-brands fa-linkedin mr-[10px] text-[20px]"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;

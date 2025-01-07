import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { NavLink } from "react-router-dom";
const Contact = () => {
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  return (
    <section className="py-16 mt-4 bg-secondary-light text-white border-t-8 border-b border-blue-300" id="contact">
      <div className="container mx-auto px-4 md:px-16 lg:px-32">
        <h2 className="font-Oswald text-3xl font-bold text-center mb-12" data-aos="fade-up">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" data-aos="fade-up">
            <h3 className="font-Montserrat text-2xl font-bold mb-4">India</h3>
            <p className="font-Montserrat mb-4">
              <strong>Reach Us At -</strong>
              <br />
              DESIGN ON A DIME Pvt. Ltd.
              <br />
              Kamleshwar nagar, Gujrara Mansingh, Uttarakhand 248001
            </p>
          </div>
          <div className="font-Montserrat md:w-1/2 bg-secondary-light p-8 border border-blue-300 rounded-lg shadow-lg" data-aos="fade-up">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="4e686132-1a5a-4496-bae7-72af43820cb4"
              />
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full bg-secondary-light border border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white p-3"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full bg-secondary-light border border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white p-3"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-300"
                >
                  Contact Number
                </label>
                <PhoneInput
                  name="multipleErrorInput4"
                  autoCorrect="off"
                  placeholder="Enter a Valid Phone Number"
                  country={"in"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputClass="!bg-secondary-light !text-white !border !border-blue-300 !rounded-md !shadow-sm !px-15 !py-3"
                  containerClass="custom-phone-container"
                  inputStyle={{
                    width: "100%"
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-2 block w-full bg-secondary-light border border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white p-3"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Please note: By providing your information, you consent and
                acknowledge that you understand the{" "}
                <NavLink
                  to="/privacyPolicy"
                  className="text-blue-500 inline-block"
                >
                  Privacy Policy
                </NavLink>{" "}
                |{" "}
                <NavLink
                  to="/termsOfUse"
                  className="text-blue-500 inline-block"
                >
                  Terms of Use
                </NavLink>
              </p>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  SUBMIT MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

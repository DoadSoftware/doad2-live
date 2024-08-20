import React from "react";

const Contact = () => (
  <section className="py-16 bg-secondary-light text-white border-t-8 border-b border-blue-300">
    <div className="container mx-auto px-4 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">CONTACT US</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4">India</h3>
          <p className="mb-4">
            <strong>Regd Office -</strong>
            <br />
              DESIGN ON A DIME Pvt. Ltd.
            <br />
              10 Karanpur Dehradun, Uttarakhand 248001
          </p>
          <p className="mb-4">
            <strong>Corporate Office -</strong>
            <br />
            address....
          </p>
        </div>
        <div className="md:w-1/2 bg-secondary-light p-8 border border-blue-300 rounded-lg shadow-lg" data-aos="fade-up">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="4e686132-1a5a-4496-bae7-72af43820cb4"/>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name = "name"
                className="mt-2 block w-full bg-secondary-light border border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white p-3"
                placeholder="Your Name"
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
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-2 block w-full bg-secondary-light border border-blue-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white p-3"
                placeholder="Contact Number"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Describe Your Project/Budget
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
              <a href="#" className="text-blue-500">
                DOAD Privacy Policy
              </a>
              .
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

export default Contact;

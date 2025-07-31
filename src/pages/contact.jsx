import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12  min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-20 gap-8">
        {/* Contact Info */}
        <div className="space-y-4  ">
          <p className="text-lg">
            Need help with your booking or have a question? Get in touch!
          </p>
          <p>
            📍 <strong>Address:</strong> 123 Hotel Street, City Center islamabad, Pakistan
          </p>
          <p>
            📞 <strong>Phone:</strong> +92 3181677433
          </p>
          <p>
            📧 <strong>Email:</strong> royalheights@486.com
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

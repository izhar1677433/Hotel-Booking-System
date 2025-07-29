
     import React from "react";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@hotelbooking.com</p>
          <p className="text-gray-400">Phone: 03181677433</p>
          <p className="text-gray-400">Address: Capital of Pakistan Islamabad</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/rooms" className="text-gray-400 hover:text-white">Rooms</a></li>
            <li><a href="/booking" className="text-gray-400 hover:text-white">Book Now</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Restaurant</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i> {/* Replace with FontAwesomeIcon if using React */}
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-2">Subscribe for exclusive offers!</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-t-lg text-gray-800 focus:outline-none pb-2"
          />
          <button className="w-full bg-blue-600 text-white mb-1 py-2 rounded-b-lg hover:bg-blue-700 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Hotel Booking System. All rights reserved.</p>
      </div>
    </footer>
  );
};


;

export default Footer;

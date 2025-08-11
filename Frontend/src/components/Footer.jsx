import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Icon icon="mdi:email" className="text-white" />
                royalheights486@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Icon icon="mdi:phone" className="text-white" />
                03181677433
              </p>
              <p className="flex items-center gap-2">
                <Icon icon="mdi:map-marker" className="text-white" />
                Capital of Pakistan Islamabad
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 transition-colors hover:text-amber-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/rooms" 
                  className="text-gray-300 transition-colors hover:text-amber-400"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link 
                  to="/restaurants" 
                  className="text-gray-300 transition-colors hover:text-amber-400"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 transition-colors hover:text-amber-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-blue-600 hover:text-gray-900"
                aria-label="Facebook"
              >
                <Icon icon="uiw:facebook" width="20" height="20" />
              </a>
              <a 
                href="#" 
                className="rounded-full bg-gray-800 p-3 text-amber-400 transition-colors hover:bg-amber-400 hover:text-gray-900"
                aria-label="Instagram"
              >
                <Icon icon="skill-icons:instagram" width="20" height="20" />
              </a>
              <a 
                href="#" 
                className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-amber-400 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Icon icon="bi:github" width="20" height="20" />
              </a>
              <a 
                href="mailto:royalheights486@gmail.com" 
                className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-blue-600 hover:text-gray-900"
                aria-label="Email"
              >
                <Icon icon="mdi:email" width="20" height="20" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-gray-300">Subscribe for exclusive offers!</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Royal Heights Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

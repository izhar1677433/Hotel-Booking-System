import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-[150px] md:px-20  ">
      <div className="max-w-5xl mx-auto mt-50 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-yellow-500 inline-block">
          About Royal Heights
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-yellow-600">Royal Heights</span>, your trusted partner in finding and booking the best hotel rooms online. Our mission is to make your travel planning stress-free, affordable, and enjoyable.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you're looking for luxury suites, cozy budget rooms, or anything in between, we provide a wide range of accommodations to suit every traveler’s needs. Our platform is easy to use, secure, and always up to date.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Royal Heights, we prioritize customer satisfaction, transparency in pricing, and excellent support. Our dedicated team is always working to bring you the best deals from top-rated hotels across the country.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Wide selection of hotels at competitive rates</li>
            <li>User-friendly interface and seamless booking process</li>
            <li>Secure online payment and booking confirmation</li>
            <li>24/7 customer support</li>
            <li>Real-time availability and updated room listings</li>
            <li>Best service</li>
            <li>Delicious Foods</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

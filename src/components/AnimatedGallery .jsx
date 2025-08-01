import React, { useState } from 'react';
import '../assets/styles/AnimatedGallery.css';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: 'https://i.pinimg.com/736x/9a/bd/95/9abd95595f541b9a6cae5ca14ee7df8c.jpg',
    title: 'chicken karahii',
    description: '"Enjoy a smooth and hassle-free check-in experience with our friendly staff, ready to welcome you with comfort and care."'
  },
  {
    src: 'https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg',
    title: 'chicken tikka',
    description: 'Savor the rich flavors of our perfectly grilled Chicken Tikka, marinated with traditional spices for an authentic taste experience.'
  },
  {
    src: 'https://images.pexels.com/photos/12565941/pexels-photo-12565941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpg',
    title: 'chicken malai booti',
    description: 'Indulge in the creamy delight of our Chicken Malai Boti, tenderly grilled to perfection with rich, aromatic spices and a smooth, buttery marinade.'
  },
  {
    src: 'https://images.pexels.com/photos/17696653/pexels-photo-17696653/free-photo-of-chicken-wings-in-rice-with-saffron.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg',
    title: 'chicken biryani',
    description: 'Experience the royal taste of our aromatic biryani, layered with fragrant basmati rice, chicken pieces, and a perfect blend of traditional spices.'
  },
  {
    src: 'https://images.pexels.com/photos/5638541/pexels-photo-5638541.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load.jpeg',
    title: 'steam rice',
    description: 'Enjoy our perfectly steamed rice—light, fluffy, and the ideal companion to any flavorful dish'
  },
    {
    src: 'https://i.pinimg.com/736x/ac/be/c7/acbec7c6a8866058816aa31531003bfb.jpg',
    title: 'chapli kababs',
    description: 'Experience the bold flavors of our Chapli Kababs, crafted with minced meat and authentic spices for a true taste of tradition.'
  },
  {
    src: 'https://images.pexels.com/photos/15058850/pexels-photo-15058850/free-photo-of-a-plate-of-kebabs-with-vegetables-and-herbs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2.jpeg',
    title: 'sekh kabab',
    description: 'Indulge in our juicy Seekh Kababs, expertly grilled to perfection with a blend of traditional spices.'
  }
,
];

const AnimatedGallery = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
  <div className="maindev mx-auto min-h-screen w-full pt-[100px]">
    <div className="gallery-container ">
      <h2 className="gallery-title text-pink-700 text-4xl font-bold uppercase">foods from the menu </h2>
      <div className="slider-wrapper w-full">
        <button className="nav-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide portrait"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img src={images[index].src} alt={images[index].title} />
            <div className="caption">
              <h2>{images[index].title}</h2>
              <p>{images[index].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>  <br></br><br></br><br></br> 
    </div>
  );
};



export default AnimatedGallery;
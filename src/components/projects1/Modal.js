import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ isOpen, closeModal, images, description, date }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 object-cover rounded-lg w-xl">
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img className="w-full h-60 object-cover mb-2" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <h2 className="text-xl mb-2">{description}</h2>
        <p className="text-sm">{date}</p>
        <button className="bg-designColor text-white py-2 px-4 rounded mt-4" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

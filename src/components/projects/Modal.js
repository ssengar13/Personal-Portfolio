import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ isOpen, closeModal, project }) => {
  if (!isOpen || !project) return null;

  const { title, src, date, description } = project;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-xl modal-lg max-w-screen-lg overflow-y-auto">
        <div className="relative">
          <Carousel>
            <div>
              <img className="w-full h-60 object-cover mb-2" src={src} alt={title} />
            </div>
            {/* Add additional carousel slides for more images */}
          </Carousel>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="text-white bg-black border border-gray-300 rounded p-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
        <h2 className="text-xl mb-2">{title}</h2>
        <p className="text-sm">{date}</p>
        <p className="text-sm mt-4 text-black">{description}</p>
      </div>
    </div>
  );
};

export default Modal;

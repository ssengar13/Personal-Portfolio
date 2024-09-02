import React, { useState, useEffect } from "react";

const ProjectsCard1 = ({ title, des, src, date, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [truncatedDes, setTruncatedDes] = useState("");

  useEffect(() => {
    const bodyOverflow = isModalOpen ? "hidden" : "auto";
    document.body.style.overflow = bodyOverflow;

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const truncateDescription = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      const truncatedText = text.substr(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.substr(0, lastSpaceIndex) + "...";
    };

    const truncatedText = truncateDescription(des, 100);
    setTruncatedDes(truncatedText);
  }, [des]);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
          onClick={handleImageClick}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal cursor-pointer" onClick={handleImageClick}>
              {title}
            </h3>
            <div className="flex gap-2">
              <p className="text-sm text-gray-400">{date}</p>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {truncatedDes}
            {des.length > 100 && (
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-designColor duration-300"
                onClick={handleImageClick}
              >
                Read more
              </a>
            )}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50" style={{ zIndex: '9999', overflowX: 'scroll' }}>
          <div className="bg-white p-4 rounded-xl max-w-screen-xl overflow-y-auto">
            <div className="relative">
              <img
                className="w-full max-h-[550px]"
                src={images[currentImageIndex]}
                alt="src"
              />
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button
                  className="text-white bg-black border border-gray-300 rounded p-2"
                  onClick={handlePreviousImage}
                >
                  Prev
                </button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                  className="text-white bg-black border border-gray-300 rounded p-2"
                  onClick={handleNextImage}
                >
                  Next
                </button>
              </div>
            </div>
            <p className="text-sm mt-4 text-black">{des}</p>
            <button className="bg-designColor text-white py-2 px-4 rounded mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard1;

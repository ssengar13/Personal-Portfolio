import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ projects }) => {
  const handleButtonClick = (link) => {
    window.location.href = link;
  };
  const [blgImages, setBlgImages] = useState([]);
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return truncatedText.substr(0, lastSpaceIndex) + "...";
  };

  // Configure the settings for the slider
  var sliderSettings = '';
  // Configure the settings for the slider
  if(window.innerWidth < 400){
    sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  }
  

  return (
    <Slider {...sliderSettings}>
      {projects.map((project, ind) => (
        <div key={project.id} className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <div>
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={`https://arunkrishna.in/blog/media_blog.php?id=${project.featured_media}`}
              alt={project.title.rendered}
            />
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
              {project.title.rendered}
              </h3>
              <div className="flex gap-2">
                <p className="text-sm text-gray-400">{project.date.split('T', 1)}</p>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {truncateDescription(project.content.rendered.replace(/(<([^>]+)>)/ig, ''), 100)}
            </p>
            
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-designColor text-white py-2 px-4 rounded hover:bg-opacity-80 duration-300"
            onClick={() => handleButtonClick(project.link)}
          >
            Read More...
          </button>
        </div>
      </div>
      ))}
    </Slider>
  );
};

export default ProjectsCard;

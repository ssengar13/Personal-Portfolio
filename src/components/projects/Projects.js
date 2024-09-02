import React, { useEffect, useState } from 'react';
import Title from '../layouts/Title';
import { blog1, blog2, blog3 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const currentDate = new Date(); 
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options).toUpperCase(); 

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
     fetchProjects();
     fetchMediaData();
  },[]);

  function fetchMediaData(){
    fetch('https://arunkrishna.in/blog/wp-json/wp/v2/media').then(rsp => rsp.json()).then(data => {
      localStorage.setItem("media_posts", JSON.stringify(data));
    });
  }

  function fetchProjects(){
    fetch('https://arunkrishna.in/blog/wp-json/wp/v2/posts/').then(rsp => rsp.json()).then(data => {
      setProjectsData(data);
      console.log(data);
    });
  }


  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Blogs" />
      </div>
     
      <ProjectsCard projects={projectsData} />
    </section>
  );
}

export default Projects;

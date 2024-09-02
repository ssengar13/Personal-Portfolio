import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard1 from './ProjectsCard1';

const Projects1 = () => {

  const importAllImages = (folder) => {
    const images = {};
    folder.keys().forEach((item) => {
      images[item.replace('./', '')] = folder(item);
    });
    return images;
  };

  const busserviceImages = importAllImages(require.context('../../assets/images/projects1/busservices', false, /\.(png|jpe?g|svg)$/));
  const meetupsImages = importAllImages(require.context('../../assets/images/projects1/meetups', false, /\.(png|jpe?g|svg)$/));
  const newsImages = importAllImages(require.context('../../assets/images/projects1/news', false, /\.(png|jpe?g|svg)$/));
  const sportsImages = importAllImages(require.context('../../assets/images/projects1/sports', false, /\.(png|jpe?g|svg)$/));
  const nursesImages = importAllImages(require.context('../../assets/images/projects1/nurses', false, /\.(png|jpe?g|svg)$/));
  const distributionImages = importAllImages(require.context('../../assets/images/projects1/distributions', false, /\.(png|jpe?g|svg)$/));
  const SponsorshipImages = importAllImages(require.context('../../assets/images/projects1/sponsorship', false, /\.(png|jpe?g|svg)$/));
  const medicalcampImages = importAllImages(require.context('../../assets/images/projects1/medicalcamp', false, /\.(png|jpe?g|svg)$/));
  const feedbackImages = importAllImages(require.context('../../assets/images/projects1/feedback', false, /\.(png|jpe?g|svg)$/));

  return (
    <section id="projects1" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Social Activities" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard1
          title="Bus Service during Lockdown"
          des="Providing bus service during lockdown to ensure essential transportation and support for individuals in need."
          src={busserviceImages['busservice1.jpeg']}
          images={Object.values(busserviceImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Meet Ups"
          des="Organizing meet-ups to foster connections and facilitate knowledge sharing among individuals with common interests and passions."
          src={meetupsImages['meetups1.jpeg']}
          images={Object.values(meetupsImages)} // Pass the array of images
        />
         <ProjectsCard1
          title="News"
          des="Sharing the latest news and updates about our trust's initiatives, achievements, and community impact."
          src={newsImages['news1.jpeg']}
          images={Object.values(newsImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Sports"
          des="Engaging in sports activities to promote physical fitness, teamwork, and a spirit of healthy competition."
          src={sportsImages['sports1.jpeg']}
          images={Object.values(sportsImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Supporting Nurses"
          des="Providing free support and resources to nurses, acknowledging their dedication and vital role in healthcare."
          src={nursesImages['nurses1.jpeg']}
          images={Object.values(nursesImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Distributions"
          des="Organizing food, grocery, TV, mobiles, and other essential item distribution initiatives to support and provide necessary supplies for those in need."
          src={distributionImages['distribution1.jpeg']}
          images={Object.values(distributionImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Sponsorship"
          des="Sponsoring a student for her entire education journey, from enrollment to degree completion."
          src={SponsorshipImages['sponsorship1.jpeg']}
          images={Object.values(SponsorshipImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Medical Camp"
          des="Organizing and facilitating medical camps, providing essential healthcare services to underserved communities."
          src={medicalcampImages['medicalcamp1.jpeg']}
          images={Object.values(medicalcampImages)} // Pass the array of images
        />
        <ProjectsCard1
          title="Feedback's"
          des="Collecting and gathering valuable feedback from users to improve and enhance the overall experience."
          src={feedbackImages['feedback1.jpeg']}
          images={Object.values(feedbackImages)} // Pass the array of images
        />
      </div>
    </section>
  );
}

export default Projects1;

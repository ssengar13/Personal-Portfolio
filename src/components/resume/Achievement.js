import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Voluntary Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MIZHI Charitable Trust"
            subTitle="Founder and Persident"
            result="Success"
            des="Mizhi joins hands with communities in reaching out to people in need, fundraising for medical emergencies and feeding of the poor, care for the less fortunate and ultimately create a community network of helping hearts to offer best service to the society. We are a group of enthusiastic individuals whose aim is to serve the society in various ways, to feel the heart of the people and to become a reason of their smile. “The happiest people we know are those who loose themselves in the service of others”.'"
          />
          <ResumeCard
            title="PUNE Malayalees Official"
            subTitle="Founder and President"
            result="Success"
            des="PUNE Malayalees Official is a vibrant community organization dedicated to promoting Malayalee culture and fostering a sense of unity among Malayalees in Pune. Through cultural events, social gatherings, and community services, we celebrate our rich heritage and provide support to our members. Join us to connect, celebrate, and contribute to the thriving Malayalee community in Pune."
          />
          <ResumeCard
            title="Sports Secertary"
            subTitle="Hindustan College of Arts and Science, Chennai"
            result="Success"
            des="
            As the Sports Secretary, I lead sports activities, manage teams and facilities, and promote physical fitness and teamwork within the organization."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;

import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:flex-row md:gap-20"
    >
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Development Head"
            subTitle="Unified Voice Communication Pvt Ltd. - (2022 - present)"
            result="Pune"
            des="As a Development Head, my roles and responsibilities typically include overseeing software development projects, managing development teams, and ensuring the successful delivery of high-quality software solutions."
          />
          <ResumeCard
            title="Technical Director"
            subTitle="Unified Voice Communication Pvt Ltd. - (2019 - present)"
            result="Pune"
            des="Strategically directing and overseeing technology initiatives in the field of VoIP PBX, driving innovation, managing technical teams, and implementing cutting-edge solutions to optimize communication systems and enhance business efficiency."
          />
          <ResumeCard
            title="Branch Sales Head"
            subTitle="Unified Voice Communication Pvt Ltd. - (2020 - 2022)"
            result="Pune"
            des="As a Branch Sales Head, I am accountable for driving sales growth, leading a high-performing team, and fostering strong client relationships to achieve exceptional results and exceed targets."
          />
          <ResumeCard
            title="Technical Support Manager"
            subTitle="Unified Voice Communication Pvt Ltd. - (2018 - 2019)"
            result="Chennai"
            des="Managing and directing a technical support team, developing and implementing support strategies, coordinating resources, and ensuring effective resolution of customer issues to achieve high levels of customer satisfaction and meet service level agreements."
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">More Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Team Lead"
            subTitle="*astTECS - (2016 - 2017)"
            result="Bengaluru"
            des="Leading and supervising a technical support team, overseeing their performance, providing guidance and mentorship, and ensuring efficient resolution of customer issues to deliver exceptional customer support experiences."
          />
          <ResumeCard
            title="Technical Support Engineer"
            subTitle="*astTECS - (2015 - 2016)"
            result="Bengaluru"
            des="Providing technical support and resolving customer issues through effective troubleshooting and problem-solving techniques. Ensuring customer satisfaction by delivering prompt and accurate solutions to technical queries and concerns."
          />
          <ResumeCard
            title="Desktop Support Engineer"
            subTitle="3i Infotech Ltd. - (2013 - 2015)"
            result="Bengaluru"
            des="As a Desktop Support Engineer, I am responsible for providing technical assistance, resolving hardware and software issues, and ensuring smooth operation of computer systems to optimize user productivity and satisfaction."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

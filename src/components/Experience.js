import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 text-justify">
          <Details
            position="Reserach Assistant"
            company="BINUS"
            time="| Aug 2024 - Sept 2024"
            work="At BINUS University, I contributed as a Research Assistant on a project focused on applying artificial intelligence for image classification. My role involved:
                    Testing and validating code to ensure model accuracy and performance, 
                    Analyzing results from experiments to improve model evaluation, 
                    Collaborating with lecturers and senior students in refining research methods, 
                    Contributing to the writing of the research paper documenting our findings.
                    This experience allowed me to strengthen my technical skills , problem-solving, and research writing, while also learning how to collaborate effectively in an academic research setting."
          />

          <Details
            position="Marketing Team"
            company="BINUS"
            time="| April 2024 - Jun 2025"
            work="As part of the Marketing Team, I contributed to promoting BINUS University to prospective students and schools through a variety of outreach activities. My responsibilities included:
                  Delivering presentations to public and private schools across Jawa Barat,
                  Coordinating campus visit events, ensuring a smooth experience for visiting schools,
                  Representing the university on social media as on-screen talent for promotional content.
                  Through this role, I developed strong skills in public speaking, event coordination, and communication, while gaining hands-on experience in engaging with diverse audiences."
          />
          <Details
            position="Freshmen Leader"
            company="BINUS"
            time="| June 2024 - Sept 2025"
            work="As a Freshmen Leader, I supported first-year students in transitioning into university life and becoming familiar with BINUS University environment. My responsibilities included:
                  Guiding and mentoring a group of 10 freshmen throughout their first semester,
                  Assisting students in adjusting to campus life and academic expectations,
                  Monitoring attendance and task completion, ensuring students stayed on track,
                  Delivering presentations alongside fellow Freshmen Leaders to the entire freshmen class.
                  This role allowed me to strengthen my leadership, communication, and organizational skills, while also building meaningful connections with new students."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>

      </div>
    </div>
  );
};

export default Experience;

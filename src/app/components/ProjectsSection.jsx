"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Connect Threads",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MrVk07/ConnectThreads",
    previewUrl: process.env.NEXT_PUBLIC_CONNECT_THREADS_URL,
  },
  {
    id: 2,
    title: "Ecommerce Website",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/MrVk07/Ecommerce",
    previewUrl: process.env.NEXT_PUBLIC_ECOMMERCE_URL,
  },
  {
    id: 3,
    title: "Commodity Pricing",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/MrVk07/CommodityPricing",
    previewUrl: process.env.NEXT_PUBLIC_COMMODITY_PRICING_URL,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

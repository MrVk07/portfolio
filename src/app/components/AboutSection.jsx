"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Box from "./box";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc">
        <Box value="Node.js" />
        <Box value="React.js" />
        <Box value="Express.js" />
        <Box value="Next.js" />
        <Box value="Java" />
        <Box value="Python" />
        <Box value="MySQL" />
        <Box value="MongoDB" />
      </div>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.png" alt="About me" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a software developer who loves to build things. With a wide range of expertise, including modern technologies,
            and versatile programming languages, I’m well-equipped to tackle any project. Continuously expanding my
            knowledge base is a driving force, as I eagerly embrace new challenges and quickly adapt to evolving technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

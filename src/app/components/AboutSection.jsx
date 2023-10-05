"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import resumeData from "../../app/resumeData"; // Import your resume data

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-[17%] md:pl-[12%]">
        <li>{resumeData.education[0].institution}</li>
        <li>{resumeData.education[0].date}</li>
        {resumeData.education[0].details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-[38%] md:pl-[30%]">
        {resumeData.experience.map((exp, index) => (
          <li key={index}>
            {exp.title} at {exp.company}
            <br />
            {exp.location}, {exp.date}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="text-right w-[100%] pr-[12%] md:pr-[35%]">
        {resumeData.certificates.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
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
    <section className="text-white border border-t-[#333f3a] border-l-transparent border-r-transparent border-b-transparent">
      <div className="md:grid md:grid-cols-2  gap-8 py-16 px-4 xl:gap-16 sm:py-32 xl:px-16 items-start">
        <Image
          src={"/images/computer.jpg"}
          alt="hero image"
          className="rounded"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl py-5 font-semibold">About Me</h1>
          <p className="text-[#ADB7BE] text-[17px] lg:text-xl text-justify">
            {resumeData.summary}
          </p>
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabData, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
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

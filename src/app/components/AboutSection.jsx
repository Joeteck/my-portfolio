"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title : "Skills",
    id : "skills",
    content : (
      <ul className='list-disc pl-2'>
        <li>ReactJS</li>
        <li>Express</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>SEO</li>
        <li>Python</li>
        <li>Django</li>
        <li>Spring Boot</li>
        <li>Oracle DataBase</li>
        <li>Graphic Design</li>
      </ul>
    )

  },
  {
    title : "Education",
    id : "education",
    content : (
      <ul className='list-disc pl-[17%] md:pl-[12%]'>
        <li>NextJS</li>
        <li>Django</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>SEO</li>
        <li>Spring Boot</li>
        <li>Oracle DataBase</li>
        <li>Graphic Design</li>
      </ul>
    )

  },
  {
    title : "Experience",
    id : "experience",
    content : (
      <ul className='list-disc pl-[38%] md:pl-[30%]'>
        <li>Express</li>
        <li>NextJS</li>
        <li>Spring Boot</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>Python</li>
        <li>SEO</li>
        <li>Django</li>
        <li>Oracle DataBase</li>
        <li>Graphic Design</li>
      </ul>
    )

  },
  {
    title : "Certifications",
    id : "certifications",
    content : (
      <ul className='text-right w-[100%] pr-[12%] md:pr-[35%]'>
        <li>        Data Science Methodology-IBM Cognitive class.ai</li>
        <li>        Introduction to Data Science-IBM Cognitive class.ai</li>
        <li>        Data Science Tools-IBM Cognitive class.ai</li>
        <li>        Data Analysis with Python-IBM Cognitive class.ai</li>
        <li>        Python 101 for Data Science-IBM Cognitive class.ai</li>
        <li>        Data Visualization with Python-IBM Cognitive class.ai</li>
        <li>        Digital Skills Bootcamp &apos;21</li>
        <li>        Springboard-Ghana cares youth dialogues(Oct, 2021)</li>
      </ul>
    )

  },

]

const AboutSection = () => {
  const [tab,setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabchange = (id) => {
    startTransition(()=>{
      setTab(id);
    });
  };

  return (
    <section className='text-white border border-t-[#333f3a] border-l-transparent border-r-transparent border-b-transparent'>
        <div className='md:grid md:grid-cols-2  gap-8 py-16 px-4 xl:gap-16 sm:py-32 xl:px-16 items-start'>
            <Image
                src={"/images/computer.jpg"}
                alt='hero image'
                className='rounded'
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className='text-4xl py-5 font-semibold'>About Me</h1>
                <p className=' text-[#ADB7BE] text-[17px] lg:text-xl text-justify'>
                I&apos;m Ibukunoluwa Joel Adeyoju, a software developer with a flair for React Native, JavaScript, Python, and more. My experience as an academic head honed my teaching skills, covering subjects like data structures and algorithms. I&apos;m a problem solver at heart, having worked on e-commerce websites and blockchain-based projects.
                <br />
                Beyond coding, I&apos;ve directed media teams and dabbled in graphic design and 3D modeling. I&apos;m a dedicated learner, holding certificates in data science, and an active participant in tech events. Join me in my journey of innovation and creativity.
                </p>
                <div className='flex flex-row mt-8'>
                  <TabButton selectTab={ () => handleTabchange("skills")} active={tab === "skills"}>
                    { " " }
                    Skills{ ""}
                  </TabButton>
                  <TabButton selectTab={ () => handleTabchange("education")} active={tab === "education"}>
                    { " " }
                    Education{ ""}
                  </TabButton>
                  <TabButton selectTab={ () => handleTabchange("experience")} active={tab === "experience"}>
                    { " " }
                    Experience{ ""}
                  </TabButton>
                  <TabButton selectTab={ () => handleTabchange("certifications")} active={tab === "certifications"}>
                    { " " }
                    Certifications{ ""}
                  </TabButton>
                </div>
                <div className='mt-8'>
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>

    </section>
  )
}

export default AboutSection
"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-10'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:lg:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-emerald-400 to-emerald-600 '>Hello, I&apos;m {" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Joel',
                3000,
                'Software Developer',
                3000,
                'Graphics Designer',
                3000,
                'IT Consultant',
                3000,
              ]}
              wrapper='span'
              speed={1}
              className='text-5xl'
              repeat={Infinity}
            />
          </h1>
          <p className=' text-[#ADB7BE] text-lg lg:text-xl text-justify'>
            As a software developer, I have gained extensive experience in
            programming, application development, and teaching. In my role as the
            MUITSA academic head, I taught subjects like data structures,
            algorithms, Python, and C++, creating personalized lesson plans and
            study guides to support students&apos; learning. Additionally, I have
            contributed to software development by testing programs, writing
            high-quality code, and collaborating with teams to create new
            applications. With a strong technical skill set and a dedication to
            delivering quality solutions, I am excited to contribute to future
            software projects and drive innovation.
          </p>

          <div>
            <Link href='#contact' className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-indigo-400 via-teal-400 to-emerald-600 hover:bg-white text-white text-lg border hover:border-white border-emerald-700 mt-3'>
              Hire Me
            </Link>
            <a href='docs/Joel_resume.pdf' download>
              <button className='px-[3px] py-[3px] rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-indigo-300 via-teal-500 to-emerald-800 text-emerald-100 text-lg hover:text-white mt-3 justify-center'>
                <span className='block bg-black hover:gb-slate-800 rounded-full px-5 py-2 justify-center'>
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className='col-span-5 place-content-center mt-4 lg:mt-0 items-center self-center'>
          <div className={`flex-1 flex md:my-0 my-10 relative rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]`}>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative items-center'>
              <Image
                src={"/images/HeroImage.png"}
                alt='hero image'
                className="w-[100%] h-[100%] relative z-[5] hover:animate-pulse "              
                width={300}
                height={300}
              />
              <div className='absolute z-[0] w-[40%] h-[35%] top-0 emerald__gradient'></div>
              <div className='absolute z-[1] w-[80%] h-[50%] bottom-40 white__gradient'></div>
              <div className='absolute z-[0] w-[50%] h-[50%] right-40 bottom-40 emerald__gradient'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

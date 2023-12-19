'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  FaHtml5,
  FaPhp,
  FaSass,
  FaBootstrap,
  FaCss3,
  FaVuejs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMysql, DiJqueryLogo } from 'react-icons/di';
import {
  SiWebpack,
  SiFirebase,
  SiVite,
  SiVitest,
  SiCypress,
  SiJest,
} from 'react-icons/si';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Attendance Web Company',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaBootstrap className="text-purple-600" />{' '}
        <FaPhp className="text-sky-800" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <DiMysql className="text-sky-800" />{' '}
        <DiJqueryLogo className="text-sky-950" />
      </div>
    ),
    image: '/images/projects/login.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ikhsanfd1/company-website.github.io',
    previewUrl: 'https://github.com/ikhsanfd1/company-website.github.io',
  },
  {
    id: 2,
    title: 'CamilanOi Shop Web',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaCss3 className="text-blue-600" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <FaVuejs className="text-green-500" />
      </div>
    ),
    image: '/images/projects/vue_1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ikhsanfd1/kripik-shop.github.io',
    previewUrl: 'https://github.com/ikhsanfd1/kripik-shop.github.io',
  },
  {
    id: 3,
    title: 'Story App + Firebase Storage, Cloud & Hosting',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaCss3 className="text-blue-600" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <FaSass className="text-pink-500" />{' '}
        <FaBootstrap className="text-purple-600" />{' '}
        <SiWebpack className="text-blue-600" />{' '}
        <SiFirebase className="text-yellow-400" />
      </div>
    ),
    image: '/images/projects/Story_App_device_all.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ikhsanfd1/story-app',
    previewUrl: 'https://github.com/ikhsanfd1/story-app',
  },
  {
    id: 4,
    title: 'Restaurants App PWA + Testing Optimized',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaCss3 className="text-blue-600" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <FaSass className="text-pink-500" />{' '}
        <SiWebpack className="text-blue-600" />{' '}
        <SiJest className="text-purple-900" />
      </div>
    ),
    image: '/images/projects/dicoding-expert.png',
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/ikhsanfd1/restaurants-app-pwa',
    previewUrl: 'https://restaurants-apps-pwa.vercel.app/',
  },
  {
    id: 5,
    title: 'Personal Notes App React + Vite',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaCss3 className="text-blue-600" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <FaSass className="text-pink-500" />{' '}
        <FaReact className="text-blue-500" />{' '}
        <SiVite className="text-yellow-400" />
      </div>
    ),
    image: '/images/projects/Personal_App_device_all.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ikhsanfd1/notes-app',
    previewUrl: 'https://wow-notes-app.netlify.app/',
  },
  {
    id: 6,
    title: 'Dicoding Forum App + Testing Optimized',
    description: (
      <div className="flex gap-3 text-4xl">
        <FaHtml5 className="text-orange-400" />{' '}
        <FaCss3 className="text-blue-600" />{' '}
        <IoLogoJavascript className="text-yellow-400" />{' '}
        <FaSass className="text-pink-500" />{' '}
        <FaReact className="text-blue-500" />{' '}
        <SiVite className="text-yellow-400" />{' '}
        <SiVitest className="text-yellow-400" />{' '}
        <SiCypress className="text-green-400" />
      </div>
    ),
    image: '/images/projects/Forum_App_device_all.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/ikhsanfd1/dicoding-forum-app',
    previewUrl: 'https://dicoding-forum-app-six.vercel.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#231942] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-[#231942] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center mt-24 items-center">
        <a
          href="https://github.com/ikhsanfd1"
          target="_blank"
          className="flex bg-[#f45b6a] hover:bg-red-400 p-3 gap-2 text-[#231942] rounded-lg"
        >
          <FaGithub className="text-xl" />
          See All
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;

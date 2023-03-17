import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, creator } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

// the 'index * 0.5' is the delay for each card so they dont pop up all at once
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (    
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* 'absolute' so it appears on top of the card */}
          <div className='absolute flex inset-0 justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='flex black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2'
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='flex black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer'
            >
              <img 
                src={creator}
                alt='website'
                className='w-1/2 h-1/2'
              />
            </div>
          </div>
        </div>

        {/* Project Names */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>

          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        {/* Hashtags */}
        <div className='flex flex-wrap mt-4 gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>      
    </motion.div>
  )
}

const Works = () => {
  return (
    // we wrap things in a fragment because we wrap it in a section wrapper at the bottom
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>

        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary text-[17px] mt-3 max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* wrapper for project cards */}
      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
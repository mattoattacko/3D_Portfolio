import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white font-bold text-[24px]'>
          {experience.title}
        </h3>
        <p 
          className='text-secondary front-semibold text-[16px]'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        {/* Bullet Points */}
        {/* list-disc is the actual little circle */}
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={index}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )


}


const Experience = () => {
  return (
    <>
      {/* the first motion.div allows the p-tags inside of it to animate */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I've done so far
        </p>

        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline (appears as a single vertical line if we dont have anything inside the component) */}
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');
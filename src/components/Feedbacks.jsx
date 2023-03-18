import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles/'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'

const FeedbackCard = ({ name, image, testimonial, index, designation, company }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='w-full bg-black-200 p-10 rounded-3xl xs:w-[320px]'
  >
    <p className='text-white font-black text-[48px]'>
      "
    </p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
        {testimonial}
      </p>

      {/* div with the name, image, socials */}
      <div className='flex justify-between items-center mt-7 gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        {/* img of person */}
        <img 
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            What others are saying
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials.
          </h2>
        </motion.div>
      </div>

      {/* Testimonials wrapper div */}
      {/* the '-mt-20' moves the cards over on top of the div */}
      <div className={`${styles.paddingX} flex flex-wrap -mt-20 pb-14 gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
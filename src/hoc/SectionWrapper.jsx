//this component will wrap everything and keep our displayed elements off of the far left of the screen
import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

//since its a wrapper, we need the original component we are passing into it
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} //animation for the section
        initial='hidden' //start hidden
        whileInView='show' //show when in view
        viewport={{ once: true, amount: 0.25 }} //only animate for 0.25 seconds
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span
          id={idName}
          className='hash-span'
        >
          &nbsp;
          {/* &nbsp renders an empty space that we need rendered for our idName to get populated and being able to scroll to different sections */}
        </span>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
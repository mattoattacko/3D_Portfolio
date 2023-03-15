import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section
      className='relative w-full h-screen mx-auto'
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Text */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Line on Side */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Matt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A <span className='text-[#915eff]'>full-stack web developer</span> <br className='sm:block-hidden' />with a passion for creating the future
          </p>
        </div>
      </div>      

      {/* Canvas */}  
      <ComputersCanvas />

      {/* little gif thing */}
      <div
        className='absolute flex xs:bottom-10 bottom-32 w-full justify-center items-center'
      >
        <a href='#about'>
          <div
            className='flex justify-center items-start w-[35px] h-[64px] rounded-3xl border-4 border-secondary p-2'
          >
            <motion.div 
              animate={{
                y: [0, 24, 0] //y axis moves 24px up and down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero
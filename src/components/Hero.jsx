import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const LazyComputersCanvas = lazy(() => import('./canvas').then(module => ({ default: module.ComputersCanvas })));

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Hi, I'm <span className='text-[#915eff]'>Yogesh</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user-friendly interfaces and, <br className='sm:block hidden'/>
            powerful web applications
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Loading 3D model...</div>}>
        <LazyComputersCanvas />
      </Suspense>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </a>
      </div>
    </section>
  )
}

export default React.memo(Hero);

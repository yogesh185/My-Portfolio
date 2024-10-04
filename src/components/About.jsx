import React, { lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const LazyTilt = lazy(() => import('react-tilt').then(module => ({ default: module.Tilt })));

const ServiceCard = React.memo(({ index, title, icon }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyTilt className='xs:w-[250px] w-full' options={{ max: 25, scale: 1.05, speed: 450 }}>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' loading="lazy" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </LazyTilt>
    </Suspense>
  );
});

const About = () => {
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.icon;
    });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! I'm a web developer and a 4th-year student at VIT Bhopal. I specialize in creating intuitive user interfaces and building dynamic web applications. My hobbies include music, sports, and chess, which inspire my creativity and problem-solving skills. I'm currently seeking opportunities to apply my skills in real-world projects and collaborate with others. Let's connect and make great things happen!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default React.memo(SectionWrapper(About, "about"));



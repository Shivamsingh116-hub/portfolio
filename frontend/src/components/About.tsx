import { motion } from "framer-motion"
const cardContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.07 }
  },
}
const cardChild = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
const About = () => {
  return (
    <>
      <motion.div
        variants={cardContainer}
        initial='hidden'
        animate='show'
        className='sticky top-0 z-20 px-6 py-5 -mx-6 mb-4 backdrop-blur-md bg-[var(--default-bg)] w-screen lg:sr-only'>
        <motion.h2
          variants={cardChild}
          className='text-sm font-bold uppercase lg:sr-only'>
          About
        </motion.h2>
      </motion.div>
      <motion.div
        variants={cardContainer}>
        <motion.p
          variants={cardChild}
          className='mb-4'> I’m a developer passionate about building scalable and secure full-stack web applications that
          balance clean design with solid engineering. My favorite work lies at the intersection of modern
          frontend development and robust backend systems, where I bring ideas to life using the MERN stack
          and explore additional backend solutions with Flask.
        </motion.p>
        <motion.p
          variants={cardChild}
          className='mb-4'>
          Currently, I’m a B.Tech CSE student specializing in AI & ML, while honing my skills as
          a Full Stack Developer. I’ve worked on projects ranging from hospital management
          systems to AI-powered resume screeners, each strengthening my ability to design,
          develop, and deploy complete solutions.
        </motion.p>
        <motion.p
          variants={cardChild}
          className='mb-4'>
          In the past, I’ve gained experience across diverse academic and personal projects,
          experimenting with data-driven approaches, APIs, and secure authentication systems.
          These opportunities have helped me develop a strong foundation in both web development
          and applied machine learning.
        </motion.p>
        <motion.p
          variants={cardChild}
          className='mb-4'>
          Outside of coding, you’ll usually find me exploring new tech stacks, sharpening
          problem-solving skills, or diving into creative projects that challenge me to think
          differently.
        </motion.p>
      </motion.div>
    </>
  )
}

export default About
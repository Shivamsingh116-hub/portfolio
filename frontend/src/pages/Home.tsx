import { useEffect } from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import Education from '../components/Education'
import { AnimatePresence, motion } from 'framer-motion'
import '../style/pages/Home.scss'
import whatsAppImg from '/images/whatsapp.png'
import githubImg from '/images/github.webp'
import instagramImg from '/images/instagram.webp'
import linkedinImg from '/images/linkedin.webp'
const container = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.1 }
  },
}
const cardContainer = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  },
}
const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
const cardChild = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 }
}
const Home = () => {
  useEffect(() => {
    console.log(window.location)
  }, [])
  const linkArray = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ]
  const iconArray = [{ icon: githubImg, path: 'https://github.com/Shivamsingh116-hub' },
  { icon: instagramImg, path: 'https://www.instagram.com/shivam_0.0.4?igsh=MXBnYTRtZWg3ZTNwNQ==' },
  { icon: linkedinImg, path: 'http://www.linkedin.com/in/shivam-singh-3930492b4' },
  { icon: whatsAppImg, path: 'https://wa.me/+919996761239' }]
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0  mx-auto'>
      <AnimatePresence>
        <motion.div
          className='lg:flex lg:justify-between lg:gap-4'>
          <motion.div
            variants={child}
            key='header'
            className='lg:sticky lg:flex lg:flex-col lg:justify-between lg:top-0 lg:w-[48%] lg:max-h-screen lg:py-24'>
            <motion.section
              variants={cardContainer}
              initial='hidden'
              animate='show'
            >
              <motion.h2
                variants={cardChild}
                style={{ lineHeight: 1 }}
                className='text-[3rem] font-bold'>Shivam Singh</motion.h2>
              <motion.h3
                variants={cardChild}
                style={{ lineHeight: "1.75rem" }}
                className='text-[1.25rem] font-medium mt-[0.25rem]'
              >Full Stack Devloper</motion.h3>
              <motion.p
                variants={cardChild}
                style={{ lineHeight: 1.5 }}
                className='mt-[1rem] max-w-xs'
              >I build scalable and secure web applications with MERN
                and have experience with Flask also.</motion.p>
              <motion.nav
                variants={cardChild}
                className='hidden lg:block'>
                <motion.ul
                  variants={cardChild}
                  className="link-container flex flex-col gap-2 mt-16 w-max"
                  aria-label="In-page jump links"
                >
                  {linkArray.map((item) => (
                    <li
                      key={item.id}
                      className="link-item" id={`link-${item.id}`}>
                      <a href={`#${item.id}`}>
                        <span></span>
                        <p>{item.label}</p>
                      </a>
                    </li>
                  ))}
                </motion.ul>

              </motion.nav>
            </motion.section>
            <motion.ul
              variants={cardChild}
              className='flex items-center mt-8 ml-1' aria-label='Social-media'>
              {iconArray.map((item, i) =>
                <motion.li
                  key={`icon-${i}`}
                  className='mr-2 max-w-8 max-h-8 shrink-0 text-xs'>
                  <motion.a href={item.path} target='_blank'>
                    <motion.img
                      src={item.icon} alt='icon*' />
                  </motion.a>
                </motion.li>
              )}
            </motion.ul>
          </motion.div>
          <motion.div
            variants={cardContainer}
            initial='hidden'
            animate='show'
            key='main'
            className='pt-24 lg:py-24 lg:w-[52%]' >
            <motion.section
              variants={cardChild}
              id='about'
              className='lg:mb-44 mb-16  scroll-mt-24 '
            >
              <About />
            </motion.section>
            <motion.section
              variants={cardChild}
              id='education'
              className='lg:mb-24 mb-20 scroll-mt-24'
            >
              <Education />
            </motion.section>
            <motion.section
              variants={cardChild}
              id='projects'
              className='mb-36 scroll-mt-24'
            >
              <Projects />
            </motion.section>
          </motion.div>
        </motion.div >
      </AnimatePresence >
    </motion.div >
  )
}

export default Home
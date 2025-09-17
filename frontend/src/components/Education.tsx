import  { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import cssImg from '/skillsImage/css.png'
import jsImg from '/skillsImage/javascript.webp'
import htmlImg from '/skillsImage/html.webp'
import reactImg from '/skillsImage/reactjs.webp'
import nodeImg from '/skillsImage/nodejs.png'
import mongodbImg from '/skillsImage/mongodb.webp'
import tailwindImg from '/skillsImage/tailwindcss.png'
import pythonImg from '/skillsImage/python.webp'
import materialUiImg from '/skillsImage/materialui.png'
import mysqlImg from '/skillsImage/MYSQL.webp'
import expressImg from '/skillsImage/expressjs.png'
import flaskImg from '/skillsImage/flask.png'
import mernCerticicateImg from '/certificates/mern_certificate.jpg'
const Education = () => {
  const skillImageArray: string[] = [
    cssImg, jsImg, htmlImg, reactImg, nodeImg, mongodbImg,
    tailwindImg, pythonImg, materialUiImg, mysqlImg, expressImg, flaskImg
  ]

  const [startIndex, setStartIndex] = useState(0)
  const totalImage = skillImageArray.length

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalImage)
    }, 2000) // every 2s shift by 1
    return () => clearInterval(interval)
  }, [totalImage])

  // Get 3 images at a time
  const visibleImages = [
    skillImageArray[startIndex],
    skillImageArray[(startIndex + 1) % totalImage],
    skillImageArray[(startIndex + 2) % totalImage],
  ]

  return (
    <div
      className="education-container w-full max-h-full h-[75vh]
      overflow-hidden flex flex-col">
      <div
        className='skills-container mb-12'>
        <motion.div
          className="hidden lg:grid grid-cols-3 gap-14"
        >
          {visibleImages.map((img, i) =>
            <AnimatePresence mode='wait'>
              <motion.div
                key={`${startIndex}-${i}`}
                className="lg:w-32 lg:h-32 xl:w-40 xl:h-40  flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src={img}
                  alt="skill"
                  className="w-full h-full object-contain drop-shadow-[0_5px_5px_rgba(80,70,40,0.4)]"
                />

              </motion.div></AnimatePresence>)}
        </motion.div>
        <motion.div
          className="lg:hidden h-1/2 flex items-center justify-center"
        >
          <AnimatePresence mode='wait'>
            <motion.div className='w-56 h-auto'>
              <motion.img
                key={`skill${startIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                src={skillImageArray[startIndex]} alt='skill' />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.div className='p-2 flex flex-row gap-4 justify-between'>
        <motion.div className='flex flex-col'>
          <motion.h2
            className='font-bold text-lg'>
            Certified - MERN Stack Devloper
          </motion.h2>
          <motion.p
            className='text-sm'>
            Hands-on experience with <strong>React, Node.js, Express, and MongoDB.</strong>
            Building scalable full-stack applications and modern web solutions.
          </motion.p>
          <motion.button className='border mt-auto hover:opacity-50 hover:cursor-pointer max-w-fit  px-4 py-1 rounded-sm'>
            Explore More-
          </motion.button>
        </motion.div>
        <motion.a
          href='https://techsaksham.org/verify-certificate-v2/TSPIN25_593064'
          className='max-w-52 w-full pt-1.5'>
          <motion.img
            className='object-contain rounded-sm w-full h-auto shadow-md
           hover:scale-105  transition-all ease-in-out duration-300'
            src={mernCerticicateImg} />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Education

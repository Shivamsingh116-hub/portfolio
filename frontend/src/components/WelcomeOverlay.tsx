import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../utils/Button'

type WelcomeOverlayProps = {
  onFinish: () => void
}

// ====================
// Variants (moved outside component for performance)
// ====================

// Parent container for overall overlay
const overlayContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1 }
  }
}

// Card container animation (slide up on mount)
const cardContainer = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.05 }
  }
}

// Child animation (for each word)
const wordChild = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
}

// For signature "~ Shivam Singh"
const signatureChild = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

// For Exit button fade in
const buttonChild = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onFinish }) => {
  const [canExit, setCanExit] = useState(false)

  // ====================
  // Lifecycle: handle auto-dismiss and enabling exit button
  // ====================
  useEffect(() => {
    const finishWelcome = setTimeout(() => {
      onFinish()
    }, 5000)

    const exitDelay = setTimeout(() => {
      setCanExit(true)
    }, 3000)

    return () => {
      clearTimeout(finishWelcome)
      clearTimeout(exitDelay)
    }
  }, [onFinish])

  // ====================
  // Welcome text
  // ====================
  const welcomeLine =
    'Welcome to my world — where design meets code, and ideas come alive. Here, every pixel tells a story, every line of code shapes an experience, and imagination is the only limit.'

  const welcomeLineArray = welcomeLine.split(' ')

  return (

    <motion.div
      id="welcome-overlay-component"
      className="bg-[#ae8fdb] flex flex-col items-center justify-center min-h-screen p-5 fixed inset-0 z-50"
      variants={overlayContainer}
      initial="hidden"
      animate="show"
    >
      {/* Card container */}
      <AnimatePresence>
        <motion.div
          className="md:text-xl border-2 bg-[#f7f7f7] px-4 py-5 rounded-2xl flex flex-col md:max-w-1/2"
          variants={cardContainer}
        >
          {/* Animated welcome text (word by word) */}
          <motion.ul
            className="flex flex-wrap flex-row gap-1 justify-center"
            variants={cardContainer}
          >
            {welcomeLineArray.map((word, index) => (
              <motion.li
                key={`welcome_word_${index}`}
                variants={wordChild}
              >
                {word}
              </motion.li>
            ))}
          </motion.ul>

          {/* Signature */}
          <motion.h2
            className="text-2xl mt-3 font-bold self-end  mr-5"
            variants={signatureChild}
            transition={{ duration: 1 }}
          >
            ~ Shivam Singh
          </motion.h2>
        </motion.div>
      </AnimatePresence>
      {/* Exit button */}
      <motion.div
        className="mt-6 md:self-center self-end md:mr-0 mr-1"
        variants={buttonChild}
        transition={{ delay: 1 }}
      >
        <Button
          aria-label="Exit Welcome Overlay"
          onclick={() => canExit && onFinish()}
          w="80px"
          h="35px"
          btnName="Exit"
          classValue={`${canExit ? 'hover:cursor-pointer' : 'hover:cursor-not-allowed'
            }`}
        />
      </motion.div>
    </motion.div >

  )
}

export default WelcomeOverlay

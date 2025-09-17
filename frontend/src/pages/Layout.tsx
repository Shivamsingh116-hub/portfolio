import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import WelcomeOverlay from '../components/WelcomeOverlay';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion'

const Layout: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false); // default false
  useEffect(() => {
    const isAlreadyShown = sessionStorage.getItem('welcome_shown');
    if (!isAlreadyShown) {
      setShowWelcome(true)
    }
  }, [])
  const handleWelcomeFinish = () => {
    sessionStorage.setItem('welcome_shown', 'true')
    setShowWelcome(false)
  }
  return (

    <div className='max-h-screen'>
      <AnimatePresence mode='wait'>
        {showWelcome ?
          (<motion.div
            key='welcome'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <WelcomeOverlay onFinish={handleWelcomeFinish} />
          </motion.div>)
          : (<motion.div
            key='layout'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='min-h-screen flex flex-col'>
            <main>
              <Outlet />
            </main>
          </motion.div>)}
      </AnimatePresence>
    </div >
  )
}

export default Layout

'use client'

import { motion } from 'framer-motion'

const AnimateComponent = ({ children, style = {}, customClass = '' }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={style}
      className={customClass}
    >
      {children}
    </motion.div>
  )
}

export default AnimateComponent


import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CircleDotVariants = {
  animationOne: {
    x: [-20, 20],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
      },
    }
  }
};

const CircleDot = () => {
  const navigate = useNavigate();
  return (
    <div className="loader-container" onClick={() => navigate('/about') }>
      <motion.div className="loader"
        variants={CircleDotVariants}
        animate="animationOne"
      ></motion.div>
    </div>
  )
}

export default CircleDot;

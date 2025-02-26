import React from 'react';
import { motion } from 'framer-motion';

export const BrandingSide = () => {
  return (
    <motion.div 
      className="branding-side"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="brand-title">Skill Swap</h1>
      <p className="brand-quote">"Empower yourself through knowledge exchange"</p>
      <p className="brand-quote">"Learn, Share, Grow Together"</p>
      <p className="brand-quote">"Every skill you have is valuable to someone"</p>
    </motion.div>
  );
};

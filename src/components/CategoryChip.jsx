import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CategoryChip = ({ label, active, onClick }) => {
  const { theme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
        active
          ? 'bg-blue-500 text-white shadow-md'
          : theme === 'dark'
            ? 'bg-navy-700 text-gray-300 hover:bg-navy-600'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </motion.button>
  );
};

export default CategoryChip;
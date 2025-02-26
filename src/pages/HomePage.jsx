import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-navy-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Welcome to <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Skill Swap</span>
          </h1>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            This is the homepage of Skill Swap. Check out our Explore page to see the secondary page implementation.
          </p>
          <Link to="/explore">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
              Go to Explore Page
            </Button>
          </Link> 
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
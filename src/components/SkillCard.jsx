import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiClock, FiBookmark, FiStar } from 'react-icons/fi';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTheme } from '../context/ThemeContext';

const SkillCard = ({ skill }) => {
  const { theme } = useTheme();
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  return (
    <Card className={`overflow-hidden transition-all duration-300 group hover:shadow-xl ${
      theme === 'dark' 
        ? 'bg-navy-800/80 border-navy-700 hover:shadow-blue-900/30' 
        : 'bg-white border-gray-100 hover:shadow-blue-100/50'
    }`}>
      <div className="relative overflow-hidden">
        <img 
          src={skill.image} 
          alt={skill.title} 
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isBookmarked 
                ? 'bg-blue-500 text-white' 
                : theme === 'dark' ? 'bg-navy-700/80 text-white' : 'bg-white/80 text-gray-700'
            }`}
          >
            <FiBookmark className={isBookmarked ? 'fill-white' : ''} />
          </motion.button>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge className={`${
            skill.level === 'Beginner' ? 'bg-green-500' :
            skill.level === 'Intermediate' ? 'bg-blue-500' :
            'bg-purple-500'
          } text-white`}>
            {skill.level}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight">{skill.title}</h3>
        </div>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          by {skill.instructor}
        </p>
        
        <div className="flex items-center mt-3 mb-1">
          <div className="flex items-center">
            <FiStar className="text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-bold">{skill.rating}</span>
          </div>
          <div className="flex items-center ml-4">
            <FiUsers className={`mr-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {skill.students.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center ml-4">
            <FiClock className={`mr-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {skill.duration}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2 pb-4">
        <div className="font-bold text-lg text-blue-500">
          ${skill.price}
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
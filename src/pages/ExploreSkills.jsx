import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FiSearch, FiFilter, FiTrendingUp, FiStar, FiClock, FiBookmark } from 'react-icons/fi';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillCard from '../components/SkillCard';
import FilterSidebar from '../components/FilterSidebar';
import CategoryChip from '../components/CategoryChip';
import { useTheme } from '../context/ThemeContext';

const ExploreSkills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'tech', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'languages', name: 'Languages' },
    { id: 'music', name: 'Music' },
    { id: 'cooking', name: 'Cooking' }
  ];

  useEffect(() => {
    // Simulate fetching skills
    setTimeout(() => {
      setSkills(mockSkills);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    toast.info(`Searching for "${searchQuery}"...`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    toast.info(`Category changed to ${category}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const filteredSkills = skills.filter(skill => 
    selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-navy-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Explore Skills
          </h1>
          <p className="text-lg opacity-80">
            Discover new skills, connect with experts, and embark on your learning journey
          </p>
        </motion.div>

        {/* Search Bar & Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={`rounded-xl p-6 backdrop-blur-md ${
            theme === 'dark' 
              ? 'bg-navy-800/50 shadow-lg shadow-blue-900/20' 
              : 'bg-white/80 shadow-lg shadow-blue-100/50'
          }`}>
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-3 text-blue-400" />
                <Input 
                  type="text"
                  placeholder="Search for any skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 h-12 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-navy-700 border-navy-600 focus:border-blue-500' 
                      : 'bg-gray-50 border-gray-200 focus:border-blue-400'
                  }`}
                />
              </div>
              <Button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white h-12 px-6 rounded-lg"
              >
                Search
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={`h-12 px-4 rounded-lg flex items-center gap-2 ${
                  theme === 'dark' 
                    ? 'border-navy-600 hover:bg-navy-700' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <FiFilter />
                Filters
              </Button>
            </form>

            {/* Category Chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map(category => (
                <CategoryChip
                  key={category.id}
                  label={category.name}
                  active={selectedCategory === category.id}
                  onClick={() => handleCategoryChange(category.id)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filters Sidebar - only visible when showFilters is true */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-64 flex-shrink-0"
            >
              <FilterSidebar />
            </motion.div>
          )}

          {/* Skills Grid */}
          <div className="flex-grow">
            <Tabs defaultValue="trending" className="mb-8">
              <TabsList className={`p-1 ${
                theme === 'dark' ? 'bg-navy-800' : 'bg-gray-100'
              }`}>
                <TabsTrigger value="trending" className="flex items-center gap-2">
                  <FiTrendingUp /> Trending
                </TabsTrigger>
                <TabsTrigger value="popular" className="flex items-center gap-2">
                  <FiStar /> Most Popular
                </TabsTrigger>
                <TabsTrigger value="newest" className="flex items-center gap-2">
                  <FiClock /> Newest
                </TabsTrigger>
                <TabsTrigger value="saved" className="flex items-center gap-2">
                  <FiBookmark /> Saved
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="trending">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <Card key={i} className={`h-64 animate-pulse ${
                        theme === 'dark' ? 'bg-navy-800' : 'bg-gray-100'
                      }`} />
                    ))}
                  </div>
                ) : (
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredSkills.map(skill => (
                      <motion.div key={skill.id} variants={childVariants}>
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </TabsContent>
              
              <TabsContent value="popular">
                <div className="p-8 text-center">
                  <p>Popular skills content will be displayed here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="newest">
                <div className="p-8 text-center">
                  <p>Newest skills content will be displayed here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="saved">
                <div className="p-8 text-center">
                  <p>Your saved skills will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data
const mockSkills = [
  {
    id: 1,
    title: "React Development Masterclass",
    instructor: "Sarah Johnson",
    category: "tech",
    rating: 4.8,
    students: 1204,
    price: 49.99,
    image: "/api/placeholder/400/260",
    level: "Intermediate",
    duration: "10 weeks"
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Alex Chen",
    category: "design",
    rating: 4.9,
    students: 852,
    price: 39.99,
    image: "/api/placeholder/400/260",
    level: "Beginner",
    duration: "8 weeks"
  },
  {
    id: 3,
    title: "Advanced JavaScript Patterns",
    instructor: "Michael Stevens",
    category: "tech",
    rating: 4.7,
    students: 731,
    price: 59.99,
    image: "/api/placeholder/400/260",
    level: "Advanced",
    duration: "6 weeks"
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    instructor: "Emily Roberts",
    category: "business",
    rating: 4.6,
    students: 1567,
    price: 44.99,
    image: "/api/placeholder/400/260",
    level: "Intermediate",
    duration: "4 weeks"
  },
  {
    id: 5,
    title: "Spanish for Beginners",
    instructor: "Carlos Mendez",
    category: "languages",
    rating: 4.8,
    students: 2103,
    price: 29.99,
    image: "/api/placeholder/400/260",
    level: "Beginner",
    duration: "12 weeks"
  },
  {
    id: 6,
    title: "Piano Fundamentals",
    instructor: "Lisa Wong",
    category: "music",
    rating: 4.9,
    students: 675,
    price: 34.99,
    image: "/api/placeholder/400/260",
    level: "Beginner",
    duration: "8 weeks"
  },
];

export default ExploreSkills;
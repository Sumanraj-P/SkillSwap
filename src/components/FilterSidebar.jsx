import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTheme } from '../context/ThemeContext';

const FilterSidebar = () => {
  const { theme } = useTheme();
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [durationRange, setDurationRange] = React.useState([1, 12]);

  return (
    <div className={`rounded-xl p-6 ${
      theme === 'dark' 
        ? 'bg-navy-800/80 border border-navy-700' 
        : 'bg-white/80 border border-gray-100 shadow-sm'
    }`}>
      <h3 className="font-bold text-lg mb-4">Filters</h3>
      
      <Accordion type="single" collapsible defaultValue="price" className="w-full">
        <AccordionItem value="price" className="border-b-0">
          <AccordionTrigger className={`py-3 ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={200}
                step={5}
                className="my-6"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}+</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="level" className="border-b-0">
          <AccordionTrigger className={`py-3 ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
            Skill Level
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={`level-${level.toLowerCase()}`} />
                  <Label htmlFor={`level-${level.toLowerCase()}`}>{level}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="duration" className="border-b-0">
          <AccordionTrigger className={`py-3 ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
            Duration (weeks)
          </AccordionTrigger>
          <AccordionContent>
            <div className="py-2">
              <Slider
                value={durationRange}
                onValueChange={setDurationRange}
                min={1}
                max={24}
                step={1}
                className="my-6"
              />
              <div className="flex justify-between text-sm">
                <span>{durationRange[0]} week{durationRange[0] > 1 ? 's' : ''}</span>
                <span>{durationRange[1]} weeks+</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="features" className="border-b-0">
          <AccordionTrigger className={`py-3 ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
            Features
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="certificates">With Certificate</Label>
                <Switch id="certificates" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mentorship">Includes Mentorship</Label>
                <Switch id="mentorship" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="recorded">Recorded Lessons</Label>
                <Switch id="recorded" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="live">Live Sessions</Label>
                <Switch id="live" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="ratings" className="border-b-0">
          <AccordionTrigger className={`py-3 ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
            Ratings
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`}>
                    {rating}+ ★
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 flex gap-2">
        <Button variant="outline" className="flex-1">Reset</Button>
        <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">Apply</Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
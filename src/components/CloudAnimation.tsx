import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CloudAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger the animation to open clouds on page load
    setIsOpen(true);
  }, []);

  // Animation variants for cloud divs
  const cloudVariants = {
    openLeft: { x: '-110vw' },  // Move left cloud off-screen
    openRight: { x: '110vw' },  // Move right cloud off-screen
  };

  // Callback for animation completion
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-50">
      {/* Left "cloud" */}
      <motion.div
        className="absolute h-full w-[60vw] bg-blue-500 opacity-1"
        initial="closedLeft"
        animate={isOpen ? 'openLeft' : 'closedLeft'}
        variants={cloudVariants}
        transition={{ duration:3, ease: 'easeInOut' }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50 }}
      />

      {/* Right "cloud" */}
      <motion.div
        className="absolute h-full w-[60vw] bg-purple-500 opacity-1 right-0"
        initial="closedRight"
        animate={isOpen ? 'openRight' : 'closedRight'}
        variants={cloudVariants}
        transition={{ duration:3, ease: 'easeInOut' }}
        onAnimationComplete={handleAnimationComplete}
        style={{ zIndex: 50 }}
        
      />
    </div>
  );
};

export default CloudAnimation;

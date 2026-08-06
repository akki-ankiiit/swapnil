import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProgressLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 1.8 seconds to finish slightly before the 2-second suspense
    const duration = 1800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      // Use a simple ease-out quad calculation for smooth deceleration
      const t = currentStep / steps;
      const easedProgress = t * (2 - t); 
      
      setProgress(Math.min(easedProgress * 100, 100));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-ink text-porcelain overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-full max-w-xs px-8"
      >
        <img 
          src="/light.svg" 
          alt="Swapnil Jaggi Architects" 
          className="h-20 md:h-24 w-auto mb-12" 
        />
        
        <div className="w-full relative mt-4">
          <div className="w-full h-[2px] bg-porcelain/20 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-porcelain"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

function SingleButterfly({ 
  colorClass = "", 
  delayOffset = 0, 
  restXOffset = 60, 
  restYOffset = 60,
  randomness = 1
}: { 
  colorClass?: string; 
  delayOffset?: number;
  restXOffset?: number;
  restYOffset?: number;
  randomness?: number;
}) {
  const x = useMotionValue(typeof window !== 'undefined' ? (window.innerWidth / 2) + delayOffset : 0);
  const y = useMotionValue(typeof window !== 'undefined' ? (window.innerHeight / 2) + delayOffset : 0);
  const rotate = useMotionValue(0);

  const [isResting, setIsResting] = useState(false);
  const isRestingRef = useRef(isResting);
  
  useEffect(() => {
    isRestingRef.current = isResting;
  }, [isResting]);

  const target = useRef({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const resetTimer = () => {
      setIsResting(false);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsResting(true);
      }, 5000 + delayOffset); // slightly different rest timing
    };
    
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('click', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    resetTimer();
    
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [delayOffset]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRestingRef.current) {
        // Sit at the bottom right corner when resting
        target.current = { 
          x: window.innerWidth - restXOffset, 
          y: window.innerHeight - restYOffset 
        };
      } else {
        // Fly around randomly
        target.current = {
          x: Math.random() * (window.innerWidth - 200) + 100 * randomness,
          y: Math.random() * (window.innerHeight - 200) + 100 * randomness
        };
      }
    }, 2500 + delayOffset);
    return () => clearInterval(interval);
  }, [delayOffset, restXOffset, restYOffset, randomness]);

  useAnimationFrame((time) => {
    const currentX = x.get();
    const currentY = y.get();
    const tx = target.current.x;
    const ty = target.current.y;
    
    const dx = tx - currentX;
    const dy = ty - currentY;
    
    // Slow down when going to rest, fast when flying around
    const speed = isRestingRef.current ? 0.015 : 0.035;
    
    x.set(currentX + dx * speed);
    y.set(currentY + dy * speed);
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 10) {
      // Calculate rotation. The butterfly emoji naturally points top-left (-45 deg approx) or up.
      // By adding 90 degrees, we orient it to face the direction of movement.
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      const currentRotate = rotate.get();
      let diff = angle - currentRotate;
      // Normalize angle difference to avoid spinning
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      
      rotate.set(currentRotate + diff * 0.1);
      
    } else if (isRestingRef.current) {
      // Gently return to upright position when resting
      const currentRotate = rotate.get();
      let diff = 0 - currentRotate; 
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      rotate.set(currentRotate + diff * 0.05);
    }
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 text-4xl pointer-events-none z-[9999] drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] select-none ${colorClass}`}
      style={{ x, y, rotate }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, type: 'spring' }}
    >
      <div className={`transition-transform duration-300 ${isResting ? 'scale-90' : 'scale-100'}`}>
        <span className={`inline-block ${isResting ? 'animate-flap-slow' : 'animate-flap'}`}>
          🦋
        </span>
      </div>
    </motion.div>
  );
}

export default function PetButterfly() {
  return (
    <>
      {/* Original Blue Butterfly */}
      <SingleButterfly />
    </>
  );
}

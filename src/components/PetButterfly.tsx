import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

export default function PetButterfly() {
  const x = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
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
  const sparksContainerRef = useRef<HTMLDivElement>(null);
  const lastSparkTime = useRef(0);
  
  useEffect(() => {
    const resetTimer = () => {
      setIsResting(false);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsResting(true);
      }, 5000); // 5 seconds of inactivity to rest
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRestingRef.current) {
        // Sit at the bottom right corner when resting
        target.current = { 
          x: window.innerWidth - 60, 
          y: window.innerHeight - 60 
        };
      } else {
        // Fly around randomly
        target.current = {
          x: Math.random() * (window.innerWidth - 200) + 100,
          y: Math.random() * (window.innerHeight - 200) + 100
        };
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const createSpark = (px: number, py: number) => {
    if (!sparksContainerRef.current) return;
    const spark = document.createElement('div');
    // Magic glitter spark styling
    spark.className = 'absolute w-2 h-2 rounded-full pointer-events-none transition-all ease-out z-[9998]';
    spark.style.backgroundColor = ['#FDE047', '#FCD34D', '#FBBF24'][Math.floor(Math.random() * 3)];
    spark.style.boxShadow = '0 0 10px 2px rgba(253, 224, 71, 0.8)';
    
    // Adjust starting position to be behind the butterfly
    spark.style.left = `${px + 15}px`; 
    spark.style.top = `${py + 15}px`;
    spark.style.opacity = '1';
    spark.style.transform = 'scale(1)';
    spark.style.transitionDuration = '1000ms';
    
    sparksContainerRef.current.appendChild(spark);
    
    // Trigger animation next frame
    requestAnimationFrame(() => {
      spark.style.opacity = '0';
      spark.style.transform = `scale(0.2) translateY(${Math.random() * 30 + 15}px) translateX(${Math.random() * 40 - 20}px)`;
    });
    
    // Cleanup spark
    setTimeout(() => {
      if (sparksContainerRef.current && spark.parentNode === sparksContainerRef.current) {
        sparksContainerRef.current.removeChild(spark);
      }
    }, 1000);
  };

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
      
      // Emit sparks while flying
      if (!isRestingRef.current && time - lastSparkTime.current > 120) {
        lastSparkTime.current = time;
        createSpark(currentX, currentY);
      }
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
    <>
      {/* Container for raw DOM sparks to avoid React re-renders */}
      <div ref={sparksContainerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]" />
      
      {/* The Butterfly */}
      <motion.div
        className="fixed top-0 left-0 text-4xl pointer-events-none z-[9999] drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] select-none"
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
    </>
  );
}

import { motion } from "framer-motion";

export default function GoldenSpiralLoader() {
  const numDots = 80;
  const goldenAngle = 137.50776405; // Golden angle in degrees

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-ink text-porcelain overflow-hidden relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-[300px] h-[300px] flex items-center justify-center"
      >
        {[...Array(numDots)].map((_, i) => {
          // r = c * sqrt(i)
          const r = 10 * Math.sqrt(i);
          const theta = i * goldenAngle;
          
          const x = r * Math.cos((theta * Math.PI) / 180);
          const y = r * Math.sin((theta * Math.PI) / 180);

          return (
            <motion.div
              key={i}
              className="absolute bg-porcelain rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{
                width: 3 + i * 0.15, 
                height: 3 + i * 0.15,
                marginLeft: -(1.5 + i * 0.075), // center the dot
                marginTop: -(1.5 + i * 0.075),
                left: '50%',
                top: '50%',
                x: x,
                y: y,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.03, // creates an outward ripple effect
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 font-sans tracking-[0.4em] uppercase text-xs text-porcelain/60 relative"
      >
        <span className="relative z-10">Constructing Space</span>
        <motion.div 
          className="absolute left-0 right-0 h-[1px] bg-porcelain/30 -bottom-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

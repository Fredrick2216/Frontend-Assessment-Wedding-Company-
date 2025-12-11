import { motion } from "framer-motion";

const CatPawDecoration = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-8 hidden lg:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {/* Speech Bubble */}
      <motion.div
        className="relative bg-card border border-border rounded-2xl px-4 py-2 mb-2 shadow-soft"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-sm font-display italic text-foreground whitespace-nowrap">
          Best of Luck!
        </p>
        {/* Bubble tail */}
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
      </motion.div>

      {/* Cat Paw SVG */}
      <motion.svg
        className="w-24 h-28 ml-4"
        viewBox="0 0 100 120"
        fill="none"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Paw pad - main */}
        <ellipse cx="50" cy="85" rx="28" ry="25" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 2" />
        <ellipse cx="50" cy="85" rx="20" ry="18" fill="hsl(350 70% 85%)" />
        
        {/* Toe pads */}
        <ellipse cx="30" cy="55" rx="12" ry="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 2" />
        <ellipse cx="30" cy="55" rx="8" ry="10" fill="hsl(350 70% 85%)" />
        
        <ellipse cx="50" cy="45" rx="12" ry="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 2" />
        <ellipse cx="50" cy="45" rx="8" ry="10" fill="hsl(350 70% 85%)" />
        
        <ellipse cx="70" cy="55" rx="12" ry="14" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 2" />
        <ellipse cx="70" cy="55" rx="8" ry="10" fill="hsl(350 70% 85%)" />
      </motion.svg>
    </motion.div>
  );
};

export default CatPawDecoration;

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import parchmentBg from "@/assets/parchment-bg.jpg";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 relative"
    >
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${parchmentBg})` }}
      />

      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <Compass className="w-24 h-24 text-primary" />
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-display text-4xl md:text-6xl text-primary text-center tracking-wider"
      >
        GeoQuest
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-body text-lg text-muted-foreground text-center max-w-md italic"
      >
        "Fortune and glory, kid. Fortune and glory."
        <br />
        <span className="text-sm not-italic">— Identify 10 locations from around the world</span>
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-heading uppercase tracking-[0.2em] text-lg border-2 border-primary hover:shadow-gold transition-all"
      >
        Begin Expedition
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;

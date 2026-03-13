import { motion } from "framer-motion";
import { Trophy, RotateCcw } from "lucide-react";

interface FinalScoreProps {
  score: number;
  total: number;
  onPlayAgain: () => void;
}

const FinalScore = ({ score, total, onPlayAgain }: FinalScoreProps) => {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Legendary Explorer!";
    if (percentage >= 80) return "Master Adventurer!";
    if (percentage >= 60) return "Seasoned Traveler!";
    if (percentage >= 40) return "Curious Wanderer";
    return "Lost in the Jungle...";
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-6 p-8 md:p-12 bg-card rounded-2xl border-2 border-primary/30 shadow-adventure max-w-lg mx-auto"
    >
      <Trophy className="w-16 h-16 text-primary" />

      <h2 className="font-display text-3xl md:text-4xl text-primary text-center">
        Expedition Complete
      </h2>

      <p className="font-heading text-lg text-muted-foreground">{getMessage()}</p>

      <div className="flex items-baseline gap-2">
        <span className="font-display text-6xl text-foreground">{score}</span>
        <span className="font-heading text-2xl text-muted-foreground">/ {total}</span>
      </div>

      <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full bg-primary rounded-full"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPlayAgain}
        className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm border-2 border-primary hover:shadow-gold transition-all mt-2"
      >
        <RotateCcw className="w-5 h-5" />
        Play Again
      </motion.button>
    </motion.div>
  );
};

export default FinalScore;

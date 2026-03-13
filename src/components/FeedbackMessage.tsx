import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface FeedbackMessageProps {
  isCorrect: boolean | null;
  correctAnswer: string;
  onNext: () => void;
}

const FeedbackMessage = ({ isCorrect, correctAnswer, onNext }: FeedbackMessageProps) => {
  if (isCorrect === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center gap-3 mt-4"
      >
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <CheckCircle className="w-7 h-7 text-success" />
          ) : (
            <XCircle className="w-7 h-7 text-destructive" />
          )}
          <span className="font-heading text-xl tracking-wide">
            {isCorrect ? "Correct! Well done, adventurer!" : `Wrong! It was ${correctAnswer}.`}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm border-2 border-primary hover:shadow-gold transition-all"
        >
          Continue →
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeedbackMessage;

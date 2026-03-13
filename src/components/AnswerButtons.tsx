import { motion } from "framer-motion";

interface AnswerButtonsProps {
  options: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
}

const AnswerButtons = ({ options, correctAnswer, selectedAnswer, onSelect }: AnswerButtonsProps) => {
  const getButtonClasses = (option: string) => {
    const base =
      "w-full py-4 px-6 rounded-xl font-heading text-base md:text-lg tracking-wide transition-all duration-300 border-2 cursor-pointer";

    if (!selectedAnswer) {
      return `${base} bg-secondary border-primary/20 text-foreground hover:bg-primary/20 hover:border-primary/50 hover:shadow-gold`;
    }

    if (option === correctAnswer) {
      return `${base} bg-success border-success text-success-foreground`;
    }

    if (option === selectedAnswer && option !== correctAnswer) {
      return `${base} bg-destructive border-destructive text-destructive-foreground`;
    }

    return `${base} bg-secondary/50 border-border/50 text-muted-foreground opacity-50`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-4xl mx-auto px-4">
      {options.map((option, i) => (
        <motion.button
          key={option}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.3 }}
          whileHover={!selectedAnswer ? { scale: 1.03 } : undefined}
          whileTap={!selectedAnswer ? { scale: 0.97 } : undefined}
          className={getButtonClasses(option)}
          onClick={() => !selectedAnswer && onSelect(option)}
          disabled={!!selectedAnswer}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
};

export default AnswerButtons;

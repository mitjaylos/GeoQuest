import { motion } from "framer-motion";
import { Compass, Map } from "lucide-react";

interface GameHeaderProps {
  round: number;
  totalRounds: number;
  score: number;
}

const GameHeader = ({ round, totalRounds, score }: GameHeaderProps) => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-3"
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <Map className="w-5 h-5 text-primary" />
        <span className="font-heading text-sm uppercase tracking-widest">
          Round {round}/{totalRounds}
        </span>
      </div>

      <h1 className="font-display text-xl md:text-2xl text-primary tracking-wider hidden sm:block">
        GeoQuest
      </h1>

      <div className="flex items-center gap-2 text-muted-foreground">
        <Compass className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: "8s" }} />
        <span className="font-heading text-sm uppercase tracking-widest">
          Score: {score}
        </span>
      </div>
    </motion.header>
  );
};

export default GameHeader;

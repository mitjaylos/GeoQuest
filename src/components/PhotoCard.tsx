import { motion } from "framer-motion";

interface PhotoCardProps {
  image: string;
  hint: string;
  roundKey: number;
}

const PhotoCard = ({ image, hint, roundKey }: PhotoCardProps) => {
  return (
    <motion.div
      key={roundKey}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl border-4 border-primary/30 shadow-adventure"
    >
      <img
        src={image}
        alt="Where in the world is this?"
        className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
        <p className="font-body text-sm text-muted-foreground italic">
          Clue: "{hint}"
        </p>
      </div>
    </motion.div>
  );
};

export default PhotoCard;

import { useState, useCallback } from "react";
import { generateQuestions, Question } from "@/data/gameData";
import StartScreen from "@/components/StartScreen";
import GameHeader from "@/components/GameHeader";
import PhotoCard from "@/components/PhotoCard";
import AnswerButtons from "@/components/AnswerButtons";
import FeedbackMessage from "@/components/FeedbackMessage";
import FinalScore from "@/components/FinalScore";
import parchmentBg from "@/assets/parchment-bg.jpg";

type GameState = "start" | "playing" | "finished";

const TOTAL_ROUNDS = 10;

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const startGame = useCallback(() => {
    setQuestions(generateQuestions(TOTAL_ROUNDS));
    setCurrentRound(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameState("playing");
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      const correct = answer === questions[currentRound].correctAnswer;
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      if (correct) setScore((s) => s + 1);
    },
    [questions, currentRound]
  );

  const handleNext = useCallback(() => {
    if (currentRound + 1 >= TOTAL_ROUNDS) {
      setGameState("finished");
    } else {
      setCurrentRound((r) => r + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  }, [currentRound]);

  if (gameState === "start") {
    return <StartScreen onStart={startGame} />;
  }

  const question = questions[currentRound];

  return (
    <div className="min-h-screen flex flex-col items-center py-4 px-2 relative">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${parchmentBg})` }}
      />

      {gameState === "playing" && question && (
        <div className="relative z-10 w-full flex flex-col items-center gap-5">
          <GameHeader round={currentRound + 1} totalRounds={TOTAL_ROUNDS} score={score} />
          <PhotoCard image={question.image} hint={question.hint} roundKey={currentRound} />
          <AnswerButtons
            options={question.options}
            correctAnswer={question.correctAnswer}
            selectedAnswer={selectedAnswer}
            onSelect={handleAnswer}
          />
          <FeedbackMessage
            isCorrect={isCorrect}
            correctAnswer={question.correctAnswer}
            onNext={handleNext}
          />
        </div>
      )}

      {gameState === "finished" && (
        <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
          <FinalScore score={score} total={TOTAL_ROUNDS} onPlayAgain={startGame} />
        </div>
      )}
    </div>
  );
};

export default Index;

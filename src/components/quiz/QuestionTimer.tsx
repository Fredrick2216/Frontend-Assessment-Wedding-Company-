import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface QuestionTimerProps {
  timeLimit: number; // seconds
  isActive: boolean;
  onTimeUp: () => void;
  questionIndex: number;
}

const QuestionTimer = ({ timeLimit, isActive, onTimeUp, questionIndex }: QuestionTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(timeLimit);
  }, [questionIndex, timeLimit]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft, onTimeUp]);

  const percentage = (timeLeft / timeLimit) * 100;
  const isLow = timeLeft <= 5;
  const isCritical = timeLeft <= 3;

  const getColor = () => {
    if (isCritical) return "text-red-500";
    if (isLow) return "text-amber-500";
    return "text-primary";
  };

  const getBarColor = () => {
    if (isCritical) return "bg-red-500";
    if (isLow) return "bg-amber-500";
    return "bg-primary";
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className={`flex items-center gap-2 ${getColor()} transition-colors`}>
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Time Remaining</span>
        </div>
        <motion.span
          key={timeLeft}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className={`text-lg font-bold tabular-nums ${getColor()} transition-colors`}
        >
          {timeLeft}s
        </motion.span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${getBarColor()} transition-colors duration-300`}
          initial={{ width: "100%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Warning animation */}
      {isCritical && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-center mt-2 text-red-500 text-sm font-medium"
        >
          Hurry up!
        </motion.div>
      )}
    </div>
  );
};

export default QuestionTimer;

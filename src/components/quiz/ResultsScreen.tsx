import { motion } from "framer-motion";
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, AlertCircle } from "lucide-react";

interface ResultsScreenProps {
  totalQuestions: number;
  correctAnswers: number;
  totalTime: number;
  timeouts: number;
  onRestart: () => void;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins > 0) {
    return `${mins}m ${secs}s`;
  }
  return `${secs}s`;
};

const ResultsScreen = ({
  totalQuestions,
  correctAnswers,
  totalTime,
  timeouts,
  onRestart,
}: ResultsScreenProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const isPassing = percentage >= 50;
  const avgTimePerQuestion = Math.round(totalTime / totalQuestions);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center py-8"
    >
      {/* Trophy Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center
          ${isPassing ? "bg-quiz-correct/20" : "bg-quiz-incorrect/20"}`}
      >
        <Trophy
          className={`w-12 h-12 ${
            isPassing ? "text-quiz-correct" : "text-quiz-incorrect"
          }`}
        />
      </motion.div>

      {/* Score */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2"
      >
        {percentage}%
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-muted-foreground mb-6"
      >
        You got {correctAnswers} out of {totalQuestions} questions correct!
      </motion.p>

      {/* Time Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="bg-accent/50 rounded-xl p-4 mb-6 max-w-sm mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">Time Statistics</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Time</p>
            <p className="font-bold text-foreground text-lg">{formatTime(totalTime)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Avg per Question</p>
            <p className="font-bold text-foreground text-lg">{formatTime(avgTimePerQuestion)}</p>
          </div>
        </div>
      </motion.div>

      {/* Results breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-8"
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-quiz-correct" />
          <span className="font-medium text-foreground">{correctAnswers} Correct</span>
        </div>
        <div className="flex items-center gap-2">
          <XCircle className="w-5 h-5 text-quiz-incorrect" />
          <span className="font-medium text-foreground">
            {totalQuestions - correctAnswers - timeouts} Incorrect
          </span>
        </div>
        {timeouts > 0 && (
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <span className="font-medium text-foreground">{timeouts} Timed Out</span>
          </div>
        )}
      </motion.div>

      {/* Restart Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground 
          rounded-xl font-medium shadow-button hover:shadow-lg transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <RotateCcw className="w-5 h-5" />
        Try Again
      </motion.button>
    </motion.div>
  );
};

export default ResultsScreen;

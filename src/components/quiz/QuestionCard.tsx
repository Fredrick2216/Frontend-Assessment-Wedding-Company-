import { motion } from "framer-motion";
import { Question, categoryLabels, categoryColors } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showResult: boolean;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
}: QuestionCardProps) => {
  const getOptionClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? "selected" : "";
    }
    
    if (index === question.correctAnswer) {
      return "correct";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "incorrect";
    }
    
    return "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        className="flex justify-center mb-4"
      >
        <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${categoryColors[question.category]}`}>
          {categoryLabels[question.category]}
        </span>
      </motion.div>

      {/* Question */}
      <motion.div
        className="bg-quiz-question-bg rounded-xl p-6 mb-6"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <h2 className="text-lg md:text-xl font-medium text-center text-foreground font-body">
          {question.id}. {question.question}
        </h2>
      </motion.div>

      {/* Options */}
      <div className="space-y-3" role="radiogroup" aria-label="Answer options">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
            onClick={() => !showResult && onSelectAnswer(index)}
            disabled={showResult}
            className={`option-card w-full py-4 px-6 rounded-xl text-center font-medium 
              text-foreground cursor-pointer focus:outline-none focus:ring-2 
              focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed
              ${getOptionClass(index)}`}
            role="radio"
            aria-checked={selectedAnswer === index}
            aria-label={option}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  hasSelectedAnswer: boolean;
}

const NavigationButtons = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
  hasSelectedAnswer,
}: NavigationButtonsProps) => {
  return (
    <div className="flex items-center justify-end gap-3 mt-8">
      <motion.button
        whileHover={{ scale: canGoPrevious ? 1.05 : 1 }}
        whileTap={{ scale: canGoPrevious ? 0.95 : 1 }}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`w-12 h-12 rounded-full flex items-center justify-center border 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary
          ${
            canGoPrevious
              ? "border-border bg-card hover:bg-accent hover:border-primary cursor-pointer"
              : "border-border/50 bg-muted/50 text-muted-foreground cursor-not-allowed"
          }`}
        aria-label="Previous question"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: hasSelectedAnswer ? 1.05 : 1 }}
        whileTap={{ scale: hasSelectedAnswer ? 0.95 : 1 }}
        onClick={onNext}
        disabled={!hasSelectedAnswer}
        className={`w-12 h-12 rounded-full flex items-center justify-center border 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary
          ${
            hasSelectedAnswer
              ? "border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground cursor-pointer"
              : "border-border/50 bg-muted/50 text-muted-foreground cursor-not-allowed"
          }`}
        aria-label={isLastQuestion ? "See results" : "Next question"}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default NavigationButtons;

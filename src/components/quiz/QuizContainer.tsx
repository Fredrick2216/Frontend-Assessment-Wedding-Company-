import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quizQuestions } from "@/data/quizData";
import ProgressIndicator from "./ProgressIndicator";
import QuestionCard from "./QuestionCard";
import NavigationButtons from "./NavigationButtons";
import ResultsScreen from "./ResultsScreen";
import CatPawDecoration from "./CatPawDecoration";
import QuestionTimer from "./QuestionTimer";

const TIME_PER_QUESTION = 15; // seconds

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const startTimeRef = useRef<number>(Date.now());

  // Track total time
  useEffect(() => {
    if (showResults) return;
    
    const interval = setInterval(() => {
      setTotalTimeElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [showResults]);

  const handleSelectAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = answerIndex;
      return updated;
    });
  }, [currentQuestion]);

  const handleTimeUp = useCallback(() => {
    // Auto-select wrong answer or skip if time runs out
    if (selectedAnswers[currentQuestion] === null) {
      // Mark as -1 to indicate timeout (will be counted as wrong)
      setSelectedAnswers((prev) => {
        const updated = [...prev];
        updated[currentQuestion] = -1; // timeout marker
        return updated;
      });
    }
    
    // Auto-advance after a brief delay
    setTimeout(() => {
      if (!completedSteps.includes(currentQuestion)) {
        setCompletedSteps((prev) => [...prev, currentQuestion]);
      }
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowResults(true);
      }
    }, 500);
  }, [currentQuestion, selectedAnswers, completedSteps]);

  const handleNext = useCallback(() => {
    if (selectedAnswers[currentQuestion] === null) return;

    // Mark current step as completed
    if (!completedSteps.includes(currentQuestion)) {
      setCompletedSteps((prev) => [...prev, currentQuestion]);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestion, selectedAnswers, completedSteps]);

  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setShowResults(false);
    setCompletedSteps([]);
    setTotalTimeElapsed(0);
    startTimeRef.current = Date.now();
    setIsTimerActive(true);
  }, []);

  const calculateCorrectAnswers = () => {
    return selectedAnswers.reduce((count, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? count + 1 : count;
    }, 0);
  };

  const calculateTimeouts = () => {
    return selectedAnswers.filter((answer) => answer === -1).length;
  };

  return (
    <div className="min-h-screen quiz-gradient-bg flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card w-full max-w-4xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            <span className="italic text-foreground">Test Your </span>
            <span className="italic text-primary">Knowledge</span>
          </h1>
          <div className="inline-block bg-card border border-border rounded-full px-6 py-2">
            <p className="text-sm md:text-base text-muted-foreground">
              Answer all questions to see your results
            </p>
          </div>
        </motion.div>

        {!showResults && (
          <>
            {/* Progress Indicator */}
            <div className="mb-6">
              <ProgressIndicator
                totalSteps={quizQuestions.length}
                currentStep={currentQuestion}
                completedSteps={completedSteps}
              />
            </div>

            {/* Timer */}
            <QuestionTimer
              timeLimit={TIME_PER_QUESTION}
              isActive={isTimerActive && selectedAnswers[currentQuestion] === null}
              onTimeUp={handleTimeUp}
              questionIndex={currentQuestion}
            />

            {/* Question */}
            <AnimatePresence mode="wait">
              <QuestionCard
                key={currentQuestion}
                question={quizQuestions[currentQuestion]}
                selectedAnswer={selectedAnswers[currentQuestion]}
                onSelectAnswer={handleSelectAnswer}
                showResult={false}
              />
            </AnimatePresence>

            {/* Navigation */}
            <NavigationButtons
              onPrevious={handlePrevious}
              onNext={handleNext}
              canGoPrevious={currentQuestion > 0}
              canGoNext={currentQuestion < quizQuestions.length - 1}
              isLastQuestion={currentQuestion === quizQuestions.length - 1}
              hasSelectedAnswer={selectedAnswers[currentQuestion] !== null}
            />
          </>
        )}

        {showResults && (
          <ResultsScreen
            totalQuestions={quizQuestions.length}
            correctAnswers={calculateCorrectAnswers()}
            totalTime={totalTimeElapsed}
            timeouts={calculateTimeouts()}
            onRestart={handleRestart}
          />
        )}

        {/* Decorative Cat Paw */}
        <CatPawDecoration />
      </motion.div>
    </div>
  );
};

export default QuizContainer;

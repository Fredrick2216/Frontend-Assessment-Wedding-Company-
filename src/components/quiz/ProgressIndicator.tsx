import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  completedSteps: number[];
}

const ProgressIndicator = ({
  totalSteps,
  currentStep,
  completedSteps,
}: ProgressIndicatorProps) => {
  return (
    <div 
      className="flex items-center gap-3 w-full max-w-lg mx-auto" 
      role="progressbar"
      aria-valuenow={currentStep + 1}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Question ${currentStep + 1} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isCompleted = completedSteps.includes(index);
        const isActive = index === currentStep;

        return (
          <motion.div
            key={index}
            className="flex-1 h-1 rounded-full overflow-hidden"
            initial={false}
          >
            <motion.div
              className={`h-full rounded-full ${
                isActive
                  ? "bg-foreground"
                  : isCompleted
                  ? "bg-primary"
                  : "bg-border"
              }`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;

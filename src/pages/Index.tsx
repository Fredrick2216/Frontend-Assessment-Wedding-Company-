import { Helmet } from "react-helmet-async";
import QuizContainer from "@/components/quiz/QuizContainer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Test Your Knowledge - Interactive Quiz</title>
        <meta
          name="description"
          content="Challenge yourself with our interactive quiz! Test your knowledge across various topics with smooth animations and instant feedback."
        />
      </Helmet>
      <main>
        <QuizContainer />
      </main>
    </>
  );
};

export default Index;

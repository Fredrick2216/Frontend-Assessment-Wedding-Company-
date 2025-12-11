export type Category = "animals" | "science" | "history" | "geography";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: Category;
}

export const categoryLabels: Record<Category, string> = {
  animals: "🐾 Animals",
  science: "🔬 Science",
  history: "📜 History",
  geography: "🌍 Geography",
};

export const categoryColors: Record<Category, string> = {
  animals: "bg-amber-100 text-amber-700 border-amber-200",
  science: "bg-violet-100 text-violet-700 border-violet-200",
  history: "bg-rose-100 text-rose-700 border-rose-200",
  geography: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

export const quizQuestions: Question[] = [
  // Animals
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
    category: "animals",
  },
  {
    id: 2,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Lion", "Elephant", "Bear"],
    correctAnswer: 1,
    category: "animals",
  },
  
  // Science
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
    category: "science",
  },
  {
    id: 4,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "science",
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    options: ["WA", "H2O", "O2", "CO2"],
    correctAnswer: 1,
    category: "science",
  },
  
  // History
  {
    id: 6,
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    category: "history",
  },
  {
    id: 7,
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    correctAnswer: 1,
    category: "history",
  },
  {
    id: 8,
    question: "Which ancient wonder was located in Egypt?",
    options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
    correctAnswer: 2,
    category: "history",
  },
  
  // Geography
  {
    id: 9,
    question: "What is the capital city of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    category: "geography",
  },
  {
    id: 10,
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: 1,
    category: "geography",
  },
  {
    id: 11,
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Australia", "Africa", "South America"],
    correctAnswer: 2,
    category: "geography",
  },
  {
    id: 12,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    category: "geography",
  },
];

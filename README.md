# Test Your Knowledge - Interactive Quiz

A pixel-perfect implementation of a quiz interface based on the provided Figma design, built with modern web technologies and best practices.

## 🚀 Live Demo

[View Live Demo](https://typescript-react-pal-wyx4.vercel.app/)

## 🛠️ Tech Stack

### Required Technologies
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Modern ES6+** JavaScript

### Bonus Technologies
- **Framer Motion** for smooth animations and transitions
- **Vite** for fast development and optimized builds

### Additional Libraries
- `react-router-dom` - Client-side routing
- `lucide-react` - Beautiful icons
- `react-helmet-async` - SEO optimization

## ✨ Key Features Implemented

### Design Accuracy
- Pixel-perfect implementation matching Figma specifications
- Glassmorphism card design with subtle shadows
- Elegant serif typography (Playfair Display) for headings
- Soft teal/cyan gradient background
- Progress indicator with step tracking
- Decorative cat paw element with "Best of Luck!" speech bubble

### Interactivity
- Smooth page transitions with Framer Motion
- Hover states on all interactive elements
- Answer selection with visual feedback
- Navigation between questions (previous/next)
- Results screen with score calculation
- Restart functionality

### Accessibility (WCAG 2.1)
- Semantic HTML structure (`main`, `h1`, `h2`)
- ARIA labels and roles for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Color contrast compliance
- Screen reader friendly

### Code Quality
- TypeScript for type safety
- Component-based architecture
- Clean folder structure
- Reusable components
- Design system with CSS variables
- No inline styles - all styles through Tailwind

## 📁 Project Structure

```
src/
├── components/
│   └── quiz/
│       ├── QuizContainer.tsx    # Main quiz logic
│       ├── QuestionCard.tsx     # Question display
│       ├── ProgressIndicator.tsx # Step progress
│       ├── NavigationButtons.tsx # Nav controls
│       ├── ResultsScreen.tsx    # Final results
│       └── CatPawDecoration.tsx # Decorative element
├── data/
│   └── quizData.ts              # Quiz questions
├── pages/
│   ├── Index.tsx                # Main page
│   └── NotFound.tsx             # 404 page
├── index.css                    # Design system
└── App.tsx                      # App entry
```

## 🏃 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <https://github.com/Fredrick2216/Frontend-Assessment-Wedding-Company->

# Navigate to project directory
cd <Frontend Assessment>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 📝 Assumptions Made

1. **Desktop-first**: Implemented for desktop screens as specified, with responsive considerations
2. **Quiz Data**: Created sample questions since specific quiz content wasn't provided
3. **Results Logic**: Simple scoring based on correct/incorrect answers
4. **Animations**: Used Framer Motion for smooth, performant animations
5. **Font Choices**: Selected Playfair Display for headings (similar to the Figma design's serif style)

## ⏱️ Time Spent

- Design system setup: ~30 minutes
- Component development: ~1.5 hours
- Animations & interactions: ~30 minutes
- Accessibility improvements: ~20 minutes
- Documentation: ~15 minutes
- **Total: ~3 hours**

## 🎨 Design Decisions

- **Glassmorphism**: Used backdrop blur and semi-transparent backgrounds for the modern glass effect
- **Color Palette**: Teal/cyan tones matching the Figma design with proper contrast ratios
- **Typography**: Playfair Display for elegant headings, DM Sans for readable body text
- **Animations**: Subtle fade and scale transitions that enhance UX without being distracting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)



export interface Question {
  id: number
  text: string
  options: [string, string, string] // exactly 3 options
  correctIndex: 0 | 1 | 2
  category: string
  timeLimit: number // seconds: 15 (easy), 20 (medium), 30 (hard)
  difficulty: "easy" | "medium" | "hard"
}

// ─── Activity 1: Mental Arithmetic — 20 questions, increasing difficulty ───
export const arithmeticQuestions: Question[] = [
  // Easy (1-7): 15 seconds each — simple single-operation
  { id: 1, text: "What is 8 + 5?", options: ["12", "13", "14"], correctIndex: 1, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What is 15 - 7?", options: ["7", "8", "9"], correctIndex: 1, category: "Subtraction", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What is 6 x 4?", options: ["20", "24", "28"], correctIndex: 1, category: "Multiplication", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What is 36 / 6?", options: ["5", "6", "7"], correctIndex: 1, category: "Division", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "What is 23 + 19?", options: ["41", "42", "43"], correctIndex: 1, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 6, text: "What is 9 x 7?", options: ["56", "63", "72"], correctIndex: 1, category: "Multiplication", timeLimit: 15, difficulty: "easy" },
  { id: 7, text: "What is 100 - 37?", options: ["63", "67", "73"], correctIndex: 0, category: "Subtraction", timeLimit: 15, difficulty: "easy" },

  // Medium (8-14): 20 seconds each — two-step or larger numbers
  { id: 8, text: "What is 47 + 86?", options: ["123", "133", "143"], correctIndex: 1, category: "Addition", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "What is 15 x 12?", options: ["170", "180", "190"], correctIndex: 1, category: "Multiplication", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "What is 225 / 15?", options: ["13", "15", "17"], correctIndex: 1, category: "Division", timeLimit: 20, difficulty: "medium" },
  { id: 11, text: "What is 34 + 67 + 19?", options: ["110", "120", "130"], correctIndex: 1, category: "Multi-step", timeLimit: 20, difficulty: "medium" },
  { id: 12, text: "What is 18 x 18?", options: ["304", "324", "344"], correctIndex: 1, category: "Multiplication", timeLimit: 20, difficulty: "medium" },
  { id: 13, text: "What is 500 - 178?", options: ["312", "322", "332"], correctIndex: 1, category: "Subtraction", timeLimit: 20, difficulty: "medium" },
  { id: 14, text: "What is 144 / 12?", options: ["11", "12", "13"], correctIndex: 1, category: "Division", timeLimit: 20, difficulty: "medium" },

  // Hard (15-20): 30 seconds each — multi-step, fractions, percentages
  { id: 15, text: "What is 15% of 240?", options: ["32", "36", "40"], correctIndex: 1, category: "Percentage", timeLimit: 30, difficulty: "hard" },
  { id: 16, text: "What is 37 x 24?", options: ["868", "888", "908"], correctIndex: 1, category: "Multiplication", timeLimit: 30, difficulty: "hard" },
  { id: 17, text: "What is 1000 - 347 + 89?", options: ["732", "742", "752"], correctIndex: 1, category: "Multi-step", timeLimit: 30, difficulty: "hard" },
  { id: 18, text: "What is (25 x 16) / 8?", options: ["40", "50", "60"], correctIndex: 1, category: "Order of Operations", timeLimit: 30, difficulty: "hard" },
  { id: 19, text: "What is 729 / 27?", options: ["23", "27", "31"], correctIndex: 1, category: "Division", timeLimit: 30, difficulty: "hard" },
  { id: 20, text: "What is 56 x 43 - 1000?", options: ["1308", "1408", "1508"], correctIndex: 1, category: "Multi-step", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 2: Pattern Matching — 20 number pattern questions, increasing difficulty ───
export const patternQuestions: Question[] = [
  // Easy (1-7): 15 seconds each — simple arithmetic progressions
  { id: 1, text: "What comes next: 2, 4, 6, 8, ?", options: ["9", "10", "12"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What comes next: 5, 10, 15, 20, ?", options: ["22", "25", "30"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What comes next: 1, 3, 5, 7, ?", options: ["8", "9", "10"], correctIndex: 1, category: "Odd Numbers", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What comes next: 100, 90, 80, 70, ?", options: ["50", "55", "60"], correctIndex: 2, category: "Decreasing Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "What comes next: 3, 6, 9, 12, ?", options: ["14", "15", "16"], correctIndex: 1, category: "Multiples", timeLimit: 15, difficulty: "easy" },
  { id: 6, text: "What comes next: 10, 20, 30, 40, ?", options: ["45", "50", "55"], correctIndex: 1, category: "Multiples of 10", timeLimit: 15, difficulty: "easy" },
  { id: 7, text: "What is missing: 4, 8, ?, 16, 20", options: ["10", "12", "14"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },

  // Medium (8-14): 20 seconds each — geometric, squared, factorial patterns
  { id: 8, text: "What comes next: 2, 6, 18, 54, ?", options: ["108", "162", "216"], correctIndex: 1, category: "Geometric Sequence", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "What comes next: 1, 4, 9, 16, ?", options: ["20", "25", "30"], correctIndex: 1, category: "Perfect Squares", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "What comes next: 1, 1, 2, 3, 5, 8, ?", options: ["11", "13", "15"], correctIndex: 1, category: "Fibonacci", timeLimit: 20, difficulty: "medium" },
  { id: 11, text: "What comes next: 3, 9, 27, 81, ?", options: ["162", "243", "324"], correctIndex: 1, category: "Powers of 3", timeLimit: 20, difficulty: "medium" },
  { id: 12, text: "What comes next: 1, 8, 27, 64, ?", options: ["100", "125", "150"], correctIndex: 1, category: "Perfect Cubes", timeLimit: 20, difficulty: "medium" },
  { id: 13, text: "What comes next: 2, 3, 5, 7, 11, ?", options: ["12", "13", "15"], correctIndex: 1, category: "Prime Numbers", timeLimit: 20, difficulty: "medium" },
  { id: 14, text: "What comes next: 100, 81, 64, 49, ?", options: ["25", "36", "42"], correctIndex: 1, category: "Reverse Squares", timeLimit: 20, difficulty: "medium" },

  // Hard (15-20): 30 seconds each — complex and interleaved patterns
  { id: 15, text: "What comes next: 1, 2, 4, 7, 11, 16, ?", options: ["20", "22", "24"], correctIndex: 1, category: "Triangular Differences", timeLimit: 30, difficulty: "hard" },
  { id: 16, text: "What comes next: 2, 5, 10, 17, 26, ?", options: ["33", "35", "37"], correctIndex: 2, category: "n-squared+1", timeLimit: 30, difficulty: "hard" },
  { id: 17, text: "What is missing: 1, 4, ?, 16, 25, 36", options: ["6", "8", "9"], correctIndex: 2, category: "Squares", timeLimit: 30, difficulty: "hard" },
  { id: 18, text: "What comes next: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21"], correctIndex: 2, category: "Fibonacci Extended", timeLimit: 30, difficulty: "hard" },
  { id: 19, text: "What comes next: 1, 3, 7, 15, 31, ?", options: ["47", "55", "63"], correctIndex: 2, category: "2^n - 1", timeLimit: 30, difficulty: "hard" },
  { id: 20, text: "What comes next: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44"], correctIndex: 1, category: "n(n+1)", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 3: Memory Retention (unchanged for now) ───
export const memoryQuestions: Question[] = [
  { id: 1, text: "Remember this list: Apple, Book, Cat, Door, Eagle. What was the 3rd item?", options: ["Book", "Cat", "Door"], correctIndex: 1, category: "Serial Recall", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "A sequence was shown: 7, 3, 9, 1, 5. What was the 4th number?", options: ["3", "1", "5"], correctIndex: 1, category: "Digit Span", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "Which color was NOT in the list: Red, Blue, Green, Yellow?", options: ["Red", "Orange", "Blue"], correctIndex: 1, category: "Recognition", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "Recall: The capital of Australia is:", options: ["Sydney", "Canberra", "Melbourne"], correctIndex: 1, category: "Fact Recall", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "In the sequence Sun, Moon, Star, Cloud, Rain — what comes after Star?", options: ["Moon", "Cloud", "Rain"], correctIndex: 1, category: "Sequential Memory", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "What is the reverse of the word 'MEMORY'?", options: ["YROMEM", "MROMEY", "YMEROM"], correctIndex: 0, category: "Working Memory", timeLimit: 20, difficulty: "medium" },
  { id: 7, text: "How many letters in the word 'NEUROSCIENCE'?", options: ["11", "12", "13"], correctIndex: 1, category: "Processing", timeLimit: 20, difficulty: "medium" },
  { id: 8, text: "If today is Wednesday, what day was it 3 days ago?", options: ["Monday", "Sunday", "Saturday"], correctIndex: 1, category: "Temporal Recall", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "The periodic table symbol for Gold is:", options: ["Go", "Au", "Ag"], correctIndex: 1, category: "Fact Recall", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "Remember: 42, 17, 83, 56, 29. What was the largest number?", options: ["56", "83", "42"], correctIndex: 1, category: "Magnitude Recall", timeLimit: 20, difficulty: "medium" },
]

// ─── Activity 4: Reading Comprehension (unchanged for now) ───
export const comprehensionQuestions: Question[] = [
  { id: 1, text: "Passage: 'The EEG captures electrical signals from the scalp using electrodes.' — What does EEG capture?", options: ["Magnetic fields", "Electrical signals", "Sound waves"], correctIndex: 1, category: "Fact Extraction", timeLimit: 20, difficulty: "easy" },
  { id: 2, text: "Passage: 'Alpha waves (8-13 Hz) are dominant when eyes are closed.' — When are alpha waves dominant?", options: ["During sleep", "Eyes closed", "During exercise"], correctIndex: 1, category: "Comprehension", timeLimit: 20, difficulty: "easy" },
  { id: 3, text: "Passage: 'The EMOTIV EPOC X has 14 channels and uses wireless transmission.' — How many channels?", options: ["10", "14", "16"], correctIndex: 1, category: "Detail Recall", timeLimit: 20, difficulty: "easy" },
  { id: 4, text: "Passage: 'Beta waves indicate active thinking and focus.' — What do beta waves indicate?", options: ["Sleep", "Active thinking", "Meditation"], correctIndex: 1, category: "Inference", timeLimit: 20, difficulty: "medium" },
  { id: 5, text: "Passage: 'Preprocessing removes noise from raw EEG signals.' — What is removed during preprocessing?", options: ["Data", "Noise", "Channels"], correctIndex: 1, category: "Fact Extraction", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "If a study finds 'higher theta/alpha ratio correlates with fatigue', a fatigued person would have:", options: ["Low theta", "High theta/alpha ratio", "Equal theta and alpha"], correctIndex: 1, category: "Analytical Reading", timeLimit: 30, difficulty: "hard" },
  { id: 7, text: "Passage: 'The 10-20 system ensures cross-study comparability.' — Why use the 10-20 system?", options: ["It's cheaper", "Cross-study comparability", "It uses fewer electrodes"], correctIndex: 1, category: "Purpose Identification", timeLimit: 20, difficulty: "medium" },
  { id: 8, text: "Passage: 'Motor imagery involves imagining movement without physical action.' — Motor imagery requires:", options: ["Physical movement", "No movement", "Verbal response"], correctIndex: 1, category: "Comprehension", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "A research abstract states: 'N=50, p<0.01'. This means the result is:", options: ["Not significant", "Statistically significant", "Inconclusive"], correctIndex: 1, category: "Research Literacy", timeLimit: 30, difficulty: "hard" },
  { id: 10, text: "Passage: 'Frontal electrodes (F3, F4) are used for working memory tasks.' — Which electrodes for working memory?", options: ["O1, O2", "F3, F4", "P7, P8"], correctIndex: 1, category: "Detail Matching", timeLimit: 20, difficulty: "medium" },
]

// ─── Activity 5: Sustained Attention (unchanged for now) ───
export const attentionQuestions: Question[] = [
  { id: 1, text: "Count the number of times 'A' appears: A B C A D A E F A G", options: ["3", "4", "5"], correctIndex: 1, category: "Target Counting", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "Which number appears twice: 5, 8, 3, 7, 8, 2, 9, 1?", options: ["5", "8", "7"], correctIndex: 1, category: "Duplicate Detection", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "In the sequence: X O X X O X O X X X — how many X's?", options: ["5", "7", "8"], correctIndex: 1, category: "Sustained Counting", timeLimit: 20, difficulty: "medium" },
  { id: 4, text: "Which word is different: run, jog, sprint, read, dash?", options: ["jog", "read", "sprint"], correctIndex: 1, category: "Oddball Detection", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "How many even numbers: 13, 24, 37, 48, 51, 62, 79, 80?", options: ["3", "4", "5"], correctIndex: 1, category: "Selective Attention", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "What letter comes after the 2nd vowel in: B E A U T I F U L?", options: ["T", "U", "I"], correctIndex: 1, category: "Sequential Focus", timeLimit: 20, difficulty: "medium" },
  { id: 7, text: "Count backwards: 50, 45, 40, 35, ? — what comes next?", options: ["25", "30", "20"], correctIndex: 1, category: "Working Attention", timeLimit: 15, difficulty: "easy" },
  { id: 8, text: "In 'MISSISSIPPI', how many S's are there?", options: ["3", "4", "5"], correctIndex: 1, category: "Letter Counting", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "Which is the only prime number: 15, 21, 23, 27?", options: ["15", "23", "27"], correctIndex: 1, category: "Analytical Focus", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "Track the target: if X moves right 3, up 2, left 1 — net horizontal movement is:", options: ["1 right", "2 right", "3 right"], correctIndex: 1, category: "Spatial Tracking", timeLimit: 30, difficulty: "hard" },
]

export function getQuestionsForActivity(activityId: string): Question[] {
  switch (activityId) {
    case "arithmetic":
      return arithmeticQuestions
    case "pattern":
      return patternQuestions
    case "memory":
      return memoryQuestions
    case "comprehension":
      return comprehensionQuestions
    case "attention":
      return attentionQuestions
    default:
      return []
  }
}

export function getActivityTitle(activityId: string): string {
  switch (activityId) {
    case "arithmetic":
      return "Mental Arithmetic"
    case "pattern":
      return "Pattern Matching"
    case "memory":
      return "Memory Retention"
    case "comprehension":
      return "Reading Comprehension"
    case "attention":
      return "Sustained Attention"
    default:
      return ""
  }
}

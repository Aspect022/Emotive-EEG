export interface Question {
  id: number
  text: string
  options: [string, string, string] // exactly 3 options
  correctIndex: 0 | 1 | 2
  category: string
  timeLimit: number // seconds to answer
  difficulty: "easy" | "medium" | "hard"
  // For memory/attention: stimulus shown before question
  stimulus?: string
  stimulusTime?: number // seconds to show stimulus before hiding
}

// ─── Activity 1: Mental Arithmetic — 20 questions, increasing difficulty ───
export const arithmeticQuestions: Question[] = [
  // Easy (1-7): 15 seconds each
  { id: 1, text: "What is 8 + 5?", options: ["12", "13", "14"], correctIndex: 1, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What is 15 - 7?", options: ["7", "8", "9"], correctIndex: 1, category: "Subtraction", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What is 6 x 4?", options: ["20", "24", "28"], correctIndex: 1, category: "Multiplication", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What is 36 / 6?", options: ["5", "6", "7"], correctIndex: 1, category: "Division", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "What is 23 + 19?", options: ["41", "42", "43"], correctIndex: 1, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 6, text: "What is 9 x 7?", options: ["56", "63", "72"], correctIndex: 1, category: "Multiplication", timeLimit: 15, difficulty: "easy" },
  { id: 7, text: "What is 100 - 37?", options: ["63", "67", "73"], correctIndex: 0, category: "Subtraction", timeLimit: 15, difficulty: "easy" },
  // Medium (8-14): 20 seconds each
  { id: 8, text: "What is 47 + 86?", options: ["123", "133", "143"], correctIndex: 1, category: "Addition", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "What is 15 x 12?", options: ["170", "180", "190"], correctIndex: 1, category: "Multiplication", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "What is 225 / 15?", options: ["13", "15", "17"], correctIndex: 1, category: "Division", timeLimit: 20, difficulty: "medium" },
  { id: 11, text: "What is 34 + 67 + 19?", options: ["110", "120", "130"], correctIndex: 1, category: "Multi-step", timeLimit: 20, difficulty: "medium" },
  { id: 12, text: "What is 18 x 18?", options: ["304", "324", "344"], correctIndex: 1, category: "Multiplication", timeLimit: 20, difficulty: "medium" },
  { id: 13, text: "What is 500 - 178?", options: ["312", "322", "332"], correctIndex: 1, category: "Subtraction", timeLimit: 20, difficulty: "medium" },
  { id: 14, text: "What is 144 / 12?", options: ["11", "12", "13"], correctIndex: 1, category: "Division", timeLimit: 20, difficulty: "medium" },
  // Hard (15-20): 30 seconds each
  { id: 15, text: "What is 15% of 240?", options: ["32", "36", "40"], correctIndex: 1, category: "Percentage", timeLimit: 30, difficulty: "hard" },
  { id: 16, text: "What is 37 x 24?", options: ["868", "888", "908"], correctIndex: 1, category: "Multiplication", timeLimit: 30, difficulty: "hard" },
  { id: 17, text: "What is 1000 - 347 + 89?", options: ["732", "742", "752"], correctIndex: 1, category: "Multi-step", timeLimit: 30, difficulty: "hard" },
  { id: 18, text: "What is (25 x 16) / 8?", options: ["40", "50", "60"], correctIndex: 1, category: "Order of Operations", timeLimit: 30, difficulty: "hard" },
  { id: 19, text: "What is 729 / 27?", options: ["23", "27", "31"], correctIndex: 1, category: "Division", timeLimit: 30, difficulty: "hard" },
  { id: 20, text: "What is 56 x 43 - 1000?", options: ["1308", "1408", "1508"], correctIndex: 1, category: "Multi-step", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 2: Pattern Matching — 20 number patterns ───
export const patternQuestions: Question[] = [
  // Easy (1-7): 15 seconds each
  { id: 1, text: "What comes next: 2, 4, 6, 8, ?", options: ["9", "10", "12"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What comes next: 5, 10, 15, 20, ?", options: ["22", "25", "30"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What comes next: 1, 3, 5, 7, ?", options: ["8", "9", "10"], correctIndex: 1, category: "Odd Numbers", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What comes next: 100, 90, 80, 70, ?", options: ["50", "55", "60"], correctIndex: 2, category: "Decreasing Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 5, text: "What comes next: 3, 6, 9, 12, ?", options: ["14", "15", "16"], correctIndex: 1, category: "Multiples", timeLimit: 15, difficulty: "easy" },
  { id: 6, text: "What comes next: 10, 20, 30, 40, ?", options: ["45", "50", "55"], correctIndex: 1, category: "Multiples of 10", timeLimit: 15, difficulty: "easy" },
  { id: 7, text: "What is missing: 4, 8, ?, 16, 20", options: ["10", "12", "14"], correctIndex: 1, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  // Medium (8-14): 20 seconds each
  { id: 8, text: "What comes next: 2, 6, 18, 54, ?", options: ["108", "162", "216"], correctIndex: 1, category: "Geometric Sequence", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "What comes next: 1, 4, 9, 16, ?", options: ["20", "25", "30"], correctIndex: 1, category: "Perfect Squares", timeLimit: 20, difficulty: "medium" },
  { id: 10, text: "What comes next: 1, 1, 2, 3, 5, 8, ?", options: ["11", "13", "15"], correctIndex: 1, category: "Fibonacci", timeLimit: 20, difficulty: "medium" },
  { id: 11, text: "What comes next: 3, 9, 27, 81, ?", options: ["162", "243", "324"], correctIndex: 1, category: "Powers of 3", timeLimit: 20, difficulty: "medium" },
  { id: 12, text: "What comes next: 1, 8, 27, 64, ?", options: ["100", "125", "150"], correctIndex: 1, category: "Perfect Cubes", timeLimit: 20, difficulty: "medium" },
  { id: 13, text: "What comes next: 2, 3, 5, 7, 11, ?", options: ["12", "13", "15"], correctIndex: 1, category: "Prime Numbers", timeLimit: 20, difficulty: "medium" },
  { id: 14, text: "What comes next: 100, 81, 64, 49, ?", options: ["25", "36", "42"], correctIndex: 1, category: "Reverse Squares", timeLimit: 20, difficulty: "medium" },
  // Hard (15-20): 30 seconds each
  { id: 15, text: "What comes next: 1, 2, 4, 7, 11, 16, ?", options: ["20", "22", "24"], correctIndex: 1, category: "Triangular Differences", timeLimit: 30, difficulty: "hard" },
  { id: 16, text: "What comes next: 2, 5, 10, 17, 26, ?", options: ["33", "35", "37"], correctIndex: 2, category: "n-squared+1", timeLimit: 30, difficulty: "hard" },
  { id: 17, text: "What is missing: 1, 4, ?, 16, 25, 36", options: ["6", "8", "9"], correctIndex: 2, category: "Squares", timeLimit: 30, difficulty: "hard" },
  { id: 18, text: "What comes next: 0, 1, 1, 2, 3, 5, 8, 13, ?", options: ["18", "20", "21"], correctIndex: 2, category: "Fibonacci Extended", timeLimit: 30, difficulty: "hard" },
  { id: 19, text: "What comes next: 1, 3, 7, 15, 31, ?", options: ["47", "55", "63"], correctIndex: 2, category: "2^n - 1", timeLimit: 30, difficulty: "hard" },
  { id: 20, text: "What comes next: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44"], correctIndex: 1, category: "n(n+1)", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 3: Memory Retention — 20 questions, stimulus card → hide → answer ───
export const memoryQuestions: Question[] = [
  // Easy (1-7): 5s stimulus, 10s answer
  { id: 1, stimulus: "4   7   2", stimulusTime: 5, text: "What was the middle number?", options: ["4", "7", "2"], correctIndex: 1, category: "Digit Recall", timeLimit: 10, difficulty: "easy" },
  { id: 2, stimulus: "RED   BLUE   GREEN", stimulusTime: 5, text: "What was the first color?", options: ["BLUE", "RED", "GREEN"], correctIndex: 1, category: "Word Recall", timeLimit: 10, difficulty: "easy" },
  { id: 3, stimulus: "8   3   6   1", stimulusTime: 5, text: "What was the largest number?", options: ["6", "8", "3"], correctIndex: 1, category: "Digit Recall", timeLimit: 10, difficulty: "easy" },
  { id: 4, stimulus: "CAT   DOG   FISH", stimulusTime: 5, text: "What was the last word?", options: ["CAT", "DOG", "FISH"], correctIndex: 2, category: "Word Recall", timeLimit: 10, difficulty: "easy" },
  { id: 5, stimulus: "5   9   2   7", stimulusTime: 5, text: "What was the sum of the first two numbers?", options: ["11", "14", "16"], correctIndex: 1, category: "Digit Operation", timeLimit: 10, difficulty: "easy" },
  { id: 6, stimulus: "MOON   STAR   SUN", stimulusTime: 5, text: "Which word was in the middle?", options: ["MOON", "STAR", "SUN"], correctIndex: 1, category: "Word Recall", timeLimit: 10, difficulty: "easy" },
  { id: 7, stimulus: "3   8   1   6", stimulusTime: 5, text: "What were the numbers in order?", options: ["3, 8, 1, 6", "3, 1, 8, 6", "8, 3, 6, 1"], correctIndex: 0, category: "Sequence Recall", timeLimit: 10, difficulty: "easy" },
  // Medium (8-14): 6s stimulus, 12s answer
  { id: 8, stimulus: "14   27   36   52   8", stimulusTime: 6, text: "What was the smallest number?", options: ["14", "8", "27"], correctIndex: 1, category: "Digit Recall", timeLimit: 12, difficulty: "medium" },
  { id: 9, stimulus: "APPLE   CHAIR   RIVER   CLOCK", stimulusTime: 6, text: "Which word was NOT shown?", options: ["APPLE", "TABLE", "RIVER"], correctIndex: 1, category: "Word Recognition", timeLimit: 12, difficulty: "medium" },
  { id: 10, stimulus: "7   2   9   4   5   1", stimulusTime: 6, text: "What was the 4th number?", options: ["9", "4", "5"], correctIndex: 1, category: "Position Recall", timeLimit: 12, difficulty: "medium" },
  { id: 11, stimulus: "BLUE = 3     RED = 7     GREEN = 5", stimulusTime: 6, text: "What number was assigned to RED?", options: ["3", "5", "7"], correctIndex: 2, category: "Pair Recall", timeLimit: 12, difficulty: "medium" },
  { id: 12, stimulus: "6   3   8   1   9   4", stimulusTime: 6, text: "How many numbers were greater than 5?", options: ["2", "3", "4"], correctIndex: 1, category: "Digit Analysis", timeLimit: 12, difficulty: "medium" },
  { id: 13, stimulus: "TIGER   EAGLE   SHARK   BEAR   OWL", stimulusTime: 6, text: "How many animals were shown?", options: ["4", "5", "6"], correctIndex: 1, category: "Counting", timeLimit: 12, difficulty: "medium" },
  { id: 14, stimulus: "15   22   37   44   58", stimulusTime: 6, text: "What was the third number?", options: ["22", "37", "44"], correctIndex: 1, category: "Position Recall", timeLimit: 12, difficulty: "medium" },
  // Hard (15-20): 7s stimulus, 15s answer
  { id: 15, stimulus: "3   7   1   9   4   6   2   8", stimulusTime: 7, text: "What were the last three numbers in order?", options: ["6, 2, 8", "4, 2, 8", "2, 8, 6"], correctIndex: 0, category: "Sequence Recall", timeLimit: 15, difficulty: "hard" },
  { id: 16, stimulus: "A = 4     B = 9     C = 2     D = 7     E = 5", stimulusTime: 7, text: "What is A + D?", options: ["9", "11", "13"], correctIndex: 1, category: "Pair Operation", timeLimit: 15, difficulty: "hard" },
  { id: 17, stimulus: "PIANO   OCEAN   BRIDGE   CROWN   FLAME   GHOST", stimulusTime: 7, text: "What was the 4th word?", options: ["BRIDGE", "CROWN", "FLAME"], correctIndex: 1, category: "Position Recall", timeLimit: 15, difficulty: "hard" },
  { id: 18, stimulus: "42   17   83   56   29   64   71", stimulusTime: 7, text: "What was the sum of the first and last numbers?", options: ["103", "113", "123"], correctIndex: 1, category: "Digit Operation", timeLimit: 15, difficulty: "hard" },
  { id: 19, stimulus: "X = BLUE     Y = RED     Z = GREEN     W = GOLD", stimulusTime: 7, text: "What color was Z?", options: ["RED", "GOLD", "GREEN"], correctIndex: 2, category: "Pair Recall", timeLimit: 15, difficulty: "hard" },
  { id: 20, stimulus: "5   12   3   19   7   14   8   21   2", stimulusTime: 7, text: "How many numbers were odd?", options: ["4", "5", "6"], correctIndex: 1, category: "Digit Analysis", timeLimit: 15, difficulty: "hard" },
]

// ─── Activity 4: Reading Comprehension — 10 questions ───
export const comprehensionQuestions: Question[] = [
  { id: 1, text: "Passage: 'The EEG captures electrical signals from the scalp using electrodes.' — What does EEG capture?", options: ["Magnetic fields", "Electrical signals", "Sound waves"], correctIndex: 1, category: "Fact Extraction", timeLimit: 20, difficulty: "easy" },
  { id: 2, text: "Passage: 'Alpha waves (8-13 Hz) are dominant when eyes are closed.' — When are alpha waves dominant?", options: ["During sleep", "Eyes closed", "During exercise"], correctIndex: 1, category: "Comprehension", timeLimit: 20, difficulty: "easy" },
  { id: 3, text: "Passage: 'The EMOTIV EPOC X has 14 channels and uses wireless transmission.' — How many channels?", options: ["10", "14", "16"], correctIndex: 1, category: "Detail Recall", timeLimit: 20, difficulty: "easy" },
  { id: 4, text: "Passage: 'Beta waves indicate active thinking and focus.' — What do beta waves indicate?", options: ["Sleep", "Active thinking", "Meditation"], correctIndex: 1, category: "Inference", timeLimit: 20, difficulty: "medium" },
  { id: 5, text: "Passage: 'Preprocessing removes noise from raw EEG signals.' — What is removed during preprocessing?", options: ["Data", "Noise", "Channels"], correctIndex: 1, category: "Fact Extraction", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "If a study finds 'higher theta/alpha ratio correlates with fatigue', a fatigued person would have:", options: ["Low theta", "High theta/alpha ratio", "Equal theta and alpha"], correctIndex: 1, category: "Analytical Reading", timeLimit: 30, difficulty: "hard" },
  { id: 7, text: "Passage: 'The 10-20 system ensures cross-study comparability.' — Why use the 10-20 system?", options: ["It's cheaper", "Cross-study comparability", "Fewer electrodes"], correctIndex: 1, category: "Purpose Identification", timeLimit: 20, difficulty: "medium" },
  { id: 8, text: "Passage: 'Motor imagery involves imagining movement without physical action.' — Motor imagery requires:", options: ["Physical movement", "No movement", "Verbal response"], correctIndex: 1, category: "Comprehension", timeLimit: 20, difficulty: "medium" },
  { id: 9, text: "A research abstract states: 'N=50, p<0.01'. This means the result is:", options: ["Not significant", "Statistically significant", "Inconclusive"], correctIndex: 1, category: "Research Literacy", timeLimit: 30, difficulty: "hard" },
  { id: 10, text: "Passage: 'Frontal electrodes (F3, F4) are used for working memory tasks.' — Which electrodes for working memory?", options: ["O1, O2", "F3, F4", "P7, P8"], correctIndex: 1, category: "Detail Matching", timeLimit: 20, difficulty: "medium" },
]

// ─── Activity 5: Sustained Attention — 20 questions, stimulus → answer ───
export const attentionQuestions: Question[] = [
  // Easy (1-7): 5s stimulus, 8s answer
  { id: 1, stimulus: "3   3   3   7   3   3", stimulusTime: 5, text: "What number was different from the rest?", options: ["3", "7", "1"], correctIndex: 1, category: "Oddball Detection", timeLimit: 8, difficulty: "easy" },
  { id: 2, stimulus: "A   A   A   A   B   A   A", stimulusTime: 5, text: "How many times did 'B' appear?", options: ["0", "1", "2"], correctIndex: 1, category: "Count Target", timeLimit: 8, difficulty: "easy" },
  { id: 3, stimulus: "2   4   6   8   9   10   12", stimulusTime: 5, text: "Which number broke the even pattern?", options: ["8", "9", "10"], correctIndex: 1, category: "Pattern Break", timeLimit: 8, difficulty: "easy" },
  { id: 4, stimulus: "^   ^   ^   v   ^   ^", stimulusTime: 5, text: "What position was the down arrow?", options: ["3rd", "4th", "5th"], correctIndex: 1, category: "Position Detect", timeLimit: 8, difficulty: "easy" },
  { id: 5, stimulus: "RED   RED   RED   BLUE   RED", stimulusTime: 5, text: "What was the odd word out?", options: ["RED", "BLUE", "GREEN"], correctIndex: 1, category: "Oddball Detection", timeLimit: 8, difficulty: "easy" },
  { id: 6, stimulus: "5   5   5   5   5   3   5", stimulusTime: 5, text: "At what position was the different number?", options: ["5th", "6th", "7th"], correctIndex: 1, category: "Position Detect", timeLimit: 8, difficulty: "easy" },
  { id: 7, stimulus: "O   O   O   X   O   O   O   O", stimulusTime: 5, text: "How many O's were there?", options: ["6", "7", "8"], correctIndex: 1, category: "Count Target", timeLimit: 8, difficulty: "easy" },
  // Medium (8-14): 6s stimulus, 10s answer
  { id: 8, stimulus: "1   3   5   7   8   11   13", stimulusTime: 6, text: "Which number is NOT odd?", options: ["7", "8", "11"], correctIndex: 1, category: "Rule Violation", timeLimit: 10, difficulty: "medium" },
  { id: 9, stimulus: "A B   A B   A B   A A   A B", stimulusTime: 6, text: "Where did the pattern A-B first break?", options: ["5th & 6th", "7th & 8th", "9th & 10th"], correctIndex: 1, category: "Pattern Break", timeLimit: 10, difficulty: "medium" },
  { id: 10, stimulus: "7 2   7 2   7 2   7 3   7 2", stimulusTime: 6, text: "What replaced the expected '2'?", options: ["7", "3", "5"], correctIndex: 1, category: "Oddball Detection", timeLimit: 10, difficulty: "medium" },
  { id: 11, stimulus: "15   12   9   6   4   0", stimulusTime: 6, text: "Which number broke the pattern of -3?", options: ["6", "4", "0"], correctIndex: 1, category: "Rule Violation", timeLimit: 10, difficulty: "medium" },
  { id: 12, stimulus: "X O X O X X X O X O", stimulusTime: 6, text: "How many X's appeared in total?", options: ["5", "6", "7"], correctIndex: 1, category: "Count Target", timeLimit: 10, difficulty: "medium" },
  { id: 13, stimulus: "2   4   8   16   33   64", stimulusTime: 6, text: "Which number broke the doubling pattern?", options: ["16", "33", "64"], correctIndex: 1, category: "Pattern Break", timeLimit: 10, difficulty: "medium" },
  { id: 14, stimulus: "GO  GO  STOP  GO  GO  GO  STOP  GO  STOP", stimulusTime: 6, text: "How many times did STOP appear?", options: ["2", "3", "4"], correctIndex: 1, category: "Count Target", timeLimit: 10, difficulty: "medium" },
  // Hard (15-20): 7s stimulus, 12s answer
  { id: 15, stimulus: "3 1 4 1 5 9 2 6 5 3 5 8", stimulusTime: 7, text: "How many times did '5' appear?", options: ["2", "3", "4"], correctIndex: 1, category: "Count Target", timeLimit: 12, difficulty: "hard" },
  { id: 16, stimulus: "A1  B2  C3  D4  E6  F6  G7", stimulusTime: 7, text: "Which pair broke the letter-number pattern?", options: ["D4", "E6", "F6"], correctIndex: 1, category: "Pattern Break", timeLimit: 12, difficulty: "hard" },
  { id: 17, stimulus: "11  13  17  19  21  23  29  31", stimulusTime: 7, text: "Which number is NOT a prime?", options: ["19", "21", "23"], correctIndex: 1, category: "Rule Violation", timeLimit: 12, difficulty: "hard" },
  { id: 18, stimulus: "1  4  2  5  3  6  4  8  5  8", stimulusTime: 7, text: "The pattern is +3, -2. Where did it break?", options: ["7th number", "8th number", "9th number"], correctIndex: 1, category: "Pattern Break", timeLimit: 12, difficulty: "hard" },
  { id: 19, stimulus: "Z  Y  X  W  V  U  S  S  R  Q", stimulusTime: 7, text: "Which letter was skipped in reverse alphabet?", options: ["V", "T", "U"], correctIndex: 1, category: "Sequence Violation", timeLimit: 12, difficulty: "hard" },
  { id: 20, stimulus: "2 4 6 8 10 12 15 16 18 20", stimulusTime: 7, text: "Which number broke the +2 pattern?", options: ["12", "15", "16"], correctIndex: 1, category: "Pattern Break", timeLimit: 12, difficulty: "hard" },
]

export function getQuestionsForActivity(activityId: string): Question[] {
  switch (activityId) {
    case "arithmetic": return arithmeticQuestions
    case "pattern": return patternQuestions
    case "memory": return memoryQuestions
    case "comprehension": return comprehensionQuestions
    case "attention": return attentionQuestions
    default: return []
  }
}

export function getActivityTitle(activityId: string): string {
  switch (activityId) {
    case "arithmetic": return "Mental Arithmetic"
    case "pattern": return "Pattern Matching"
    case "memory": return "Memory Retention"
    case "comprehension": return "Reading Comprehension"
    case "attention": return "Sustained Attention"
    default: return ""
  }
}

/** Returns true if this activity uses stimulus-then-answer flow */
export function isStimulusActivity(activityId: string): boolean {
  return activityId === "memory" || activityId === "attention"
}

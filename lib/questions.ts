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
  // For reading comprehension: which passage set (0 or 1)
  passageIndex?: number
}

// ─── Passages for Reading Comprehension ───
export const passages = [
  {
    title: "The Importance of Sleep",
    text: `Sleep is an important part of our daily lives. When we sleep, our bodies get a chance to rest and heal. Our brains use this time to organize what we learned during the day. This is called "consolidation". Without enough sleep, it becomes very hard to pay attention in school or at work. It can also make us feel grumpy or tired. Good sleep helps our immune system fight off sickness. It is recommended that adults get about seven to eight hours of sleep each night. A quiet, dark room can help you fall asleep faster and stay asleep longer. Staring at phone screens before bed can disrupt your sleep because of the bright light, so it is best to read a book or relax instead.`,
  },
  {
    title: "How We Learn New Things",
    text: `Learning something new takes time and practice. When you study or practice a skill, your brain creates connections between its cells. These connections are called "synapses". The more you practice, the stronger these connections become. This is why repeating something makes you better at it. Scientists have found that taking short breaks while studying actually helps you learn faster. This is called "spaced repetition". It is also helpful to test yourself instead of just reading notes over and over. Making mistakes is a normal part of learning and it can even help you remember things better. Exercise and eating healthy food also support your brain in learning more easily.`,
  },
]

// ─── Activity 1: Mental Arithmetic — 10 questions ───
export const arithmeticQuestions: Question[] = [
  // Easy (1-4): 15 seconds each
  { id: 1, text: "What is 8 + 5?", options: ["13", "12", "14"], correctIndex: 0, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What is 36 / 6?", options: ["7", "5", "6"], correctIndex: 2, category: "Division", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What is 23 + 19?", options: ["42", "41", "43"], correctIndex: 0, category: "Addition", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What is 100 - 37?", options: ["63", "67", "73"], correctIndex: 0, category: "Subtraction", timeLimit: 15, difficulty: "easy" },
  // Medium (5-7): 20 seconds each
  { id: 5, text: "What is 47 + 86?", options: ["123", "143", "133"], correctIndex: 2, category: "Addition", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "What is 15 x 12?", options: ["180", "170", "190"], correctIndex: 0, category: "Multiplication", timeLimit: 20, difficulty: "medium" },
  { id: 7, text: "What is 225 / 15?", options: ["13", "15", "17"], correctIndex: 1, category: "Division", timeLimit: 20, difficulty: "medium" },
  // Hard (8-10): 30 seconds each
  { id: 8, text: "What is 15% of 240?", options: ["32", "40", "36"], correctIndex: 2, category: "Percentage", timeLimit: 30, difficulty: "hard" },
  { id: 9, text: "What is 37 x 24?", options: ["888", "868", "908"], correctIndex: 0, category: "Multiplication", timeLimit: 30, difficulty: "hard" },
  { id: 10, text: "What is 1000 - 347 + 89?", options: ["732", "742", "752"], correctIndex: 1, category: "Multi-step", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 2: Pattern Matching — 10 number patterns ───
export const patternQuestions: Question[] = [
  // Easy (1-4): 15 seconds each
  { id: 1, text: "What comes next: 2, 4, 6, 8, ?", options: ["9", "12", "10"], correctIndex: 2, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 2, text: "What comes next: 5, 10, 15, 20, ?", options: ["25", "22", "30"], correctIndex: 0, category: "Arithmetic Sequence", timeLimit: 15, difficulty: "easy" },
  { id: 3, text: "What comes next: 1, 3, 5, 7, ?", options: ["10", "9", "8"], correctIndex: 1, category: "Odd Numbers", timeLimit: 15, difficulty: "easy" },
  { id: 4, text: "What comes next: 100, 90, 80, 70, ?", options: ["50", "55", "60"], correctIndex: 2, category: "Decreasing Sequence", timeLimit: 15, difficulty: "easy" },
  // Medium (5-7): 20 seconds each
  { id: 5, text: "What comes next: 1, 4, 9, 16, ?", options: ["20", "30", "25"], correctIndex: 2, category: "Perfect Squares", timeLimit: 20, difficulty: "medium" },
  { id: 6, text: "What comes next: 1, 1, 2, 3, 5, 8, ?", options: ["11", "13", "15"], correctIndex: 1, category: "Fibonacci", timeLimit: 20, difficulty: "medium" },
  { id: 7, text: "What comes next: 1, 8, 27, 64, ?", options: ["150", "100", "125"], correctIndex: 2, category: "Perfect Cubes", timeLimit: 20, difficulty: "medium" },
  // Hard (8-10): 30 seconds each
  { id: 8, text: "What comes next: 1, 2, 4, 7, 11, 16, ?", options: ["20", "24", "22"], correctIndex: 2, category: "Triangular Differences", timeLimit: 30, difficulty: "hard" },
  { id: 9, text: "What is missing: 1, 4, ?, 16, 25, 36", options: ["9", "6", "8"], correctIndex: 0, category: "Squares", timeLimit: 30, difficulty: "hard" },
  { id: 10, text: "What comes next: 2, 6, 12, 20, 30, ?", options: ["42", "44", "40"], correctIndex: 0, category: "n(n+1)", timeLimit: 30, difficulty: "hard" },
]

// ─── Activity 3: Memory Retention — 10 questions ───
export const memoryQuestions: Question[] = [
  // Easy (1-4): 5s stimulus, 10s answer
  { id: 1, stimulus: "4   7   2", stimulusTime: 5, text: "What was the middle number?", options: ["7", "4", "2"], correctIndex: 0, category: "Digit Recall", timeLimit: 10, difficulty: "easy" },
  { id: 2, stimulus: "RED   BLUE   GREEN", stimulusTime: 5, text: "What was the first color?", options: ["GREEN", "BLUE", "RED"], correctIndex: 2, category: "Word Recall", timeLimit: 10, difficulty: "easy" },
  { id: 3, stimulus: "8   3   6   1", stimulusTime: 5, text: "What was the largest number?", options: ["6", "8", "3"], correctIndex: 1, category: "Digit Recall", timeLimit: 10, difficulty: "easy" },
  { id: 4, stimulus: "CAT   DOG   FISH", stimulusTime: 5, text: "What was the last word?", options: ["FISH", "CAT", "DOG"], correctIndex: 0, category: "Word Recall", timeLimit: 10, difficulty: "easy" },
  // Medium (5-7): 6s stimulus, 12s answer
  { id: 5, stimulus: "14   27   36   52   8", stimulusTime: 6, text: "What was the smallest number?", options: ["8", "14", "27"], correctIndex: 0, category: "Digit Recall", timeLimit: 12, difficulty: "medium" },
  { id: 6, stimulus: "7   2   9   4   5   1", stimulusTime: 6, text: "What was the 4th number?", options: ["9", "4", "5"], correctIndex: 1, category: "Position Recall", timeLimit: 12, difficulty: "medium" },
  { id: 7, stimulus: "15   22   37   44   58", stimulusTime: 6, text: "What was the third number?", options: ["44", "22", "37"], correctIndex: 2, category: "Position Recall", timeLimit: 12, difficulty: "medium" },
  // Hard (8-10): 7s stimulus, 15s answer
  { id: 8, stimulus: "3   7   1   9   4   6   2   8", stimulusTime: 7, text: "What were the last three numbers in order?", options: ["6, 2, 8", "4, 2, 8", "2, 8, 6"], correctIndex: 0, category: "Sequence Recall", timeLimit: 15, difficulty: "hard" },
  { id: 9, stimulus: "PIANO   OCEAN   BRIDGE   CROWN   FLAME   GHOST", stimulusTime: 7, text: "What was the 4th word?", options: ["BRIDGE", "CROWN", "FLAME"], correctIndex: 1, category: "Position Recall", timeLimit: 15, difficulty: "hard" },
  { id: 10, stimulus: "5   12   3   19   7   14   8   21   2", stimulusTime: 7, text: "How many numbers were odd?", options: ["4", "6", "5"], correctIndex: 2, category: "Digit Analysis", timeLimit: 15, difficulty: "hard" },
]

// ─── Activity 4: Reading Comprehension — 2 passages, 5 questions each = 10 total ───
export const comprehensionQuestions: Question[] = [
  // Passage 1: The Importance of Sleep — questions 1-5
  { id: 1, passageIndex: 0, text: "What does the brain do while we sleep?", options: ["Organizes what we learned", "Dreams about flying", "Forgets everything"], correctIndex: 0, category: "Fact Extraction", timeLimit: 25, difficulty: "easy" },
  { id: 2, passageIndex: 0, text: "What is the word used for how the brain organizes information?", options: ["Consolidation", "Disruption", "Healing"], correctIndex: 0, category: "Detail Recall", timeLimit: 25, difficulty: "medium" },
  { id: 3, passageIndex: 0, text: "How many hours of sleep are recommended for adults?", options: ["7 to 8 hours", "9 to 10 hours", "5 to 6 hours"], correctIndex: 0, category: "Fact Extraction", timeLimit: 25, difficulty: "easy" },
  { id: 4, passageIndex: 0, text: "Why is staring at a phone screen before bed a bad idea?", options: ["Because it makes you too smart", "Because the bright light can disrupt sleep", "Because it uses too much battery"], correctIndex: 1, category: "Inference", timeLimit: 25, difficulty: "medium" },
  { id: 5, passageIndex: 0, text: "According to the text, what can happen if you don't get enough sleep?", options: ["You get grumpy and find it hard to pay attention", "You become better at math", "You can see in the dark"], correctIndex: 0, category: "Detail Recall", timeLimit: 25, difficulty: "easy" },
  // Passage 2: How We Learn New Things — questions 6-10
  { id: 6, passageIndex: 1, text: "What are the connections between brain cells called?", options: ["Neurons", "Synapses", "Muscles"], correctIndex: 1, category: "Fact Extraction", timeLimit: 25, difficulty: "easy" },
  { id: 7, passageIndex: 1, text: "What happens to brain connections when you practice more?", options: ["They get weaker", "They disappear", "They become stronger"], correctIndex: 2, category: "Detail Recall", timeLimit: 25, difficulty: "easy" },
  { id: 8, passageIndex: 1, text: "What is 'spaced repetition' according to the passage?", options: ["Taking short breaks while studying", "Studying everything at once", "Skipping difficult topics"], correctIndex: 0, category: "Detail Recall", timeLimit: 25, difficulty: "medium" },
  { id: 9, passageIndex: 1, text: "What does the passage say about making mistakes?", options: ["Mistakes are bad for learning", "Mistakes can help you remember better", "Mistakes mean you should stop"], correctIndex: 1, category: "Inference", timeLimit: 25, difficulty: "medium" },
  { id: 10, passageIndex: 1, text: "Besides studying, what else helps the brain learn?", options: ["Watching TV all day", "Exercise and healthy food", "Sleeping less"], correctIndex: 1, category: "Fact Extraction", timeLimit: 25, difficulty: "easy" },
]

// ─── Activity 5: Sustained Attention — 10 questions ───
export const attentionQuestions: Question[] = [
  // Easy (1-4): 5s stimulus, 8s answer
  { id: 1, stimulus: "3   3   3   7   3   3", stimulusTime: 5, text: "What number was different from the rest?", options: ["3", "1", "7"], correctIndex: 2, category: "Oddball Detection", timeLimit: 8, difficulty: "easy" },
  { id: 2, stimulus: "A   A   A   A   B   A   A", stimulusTime: 5, text: "How many times did 'B' appear?", options: ["1", "0", "2"], correctIndex: 0, category: "Count Target", timeLimit: 8, difficulty: "easy" },
  { id: 3, stimulus: "2   4   6   8   9   10   12", stimulusTime: 5, text: "Which number broke the even pattern?", options: ["8", "10", "9"], correctIndex: 2, category: "Pattern Break", timeLimit: 8, difficulty: "easy" },
  { id: 4, stimulus: "^   ^   ^   v   ^   ^", stimulusTime: 5, text: "What position was the down arrow?", options: ["3rd", "4th", "5th"], correctIndex: 1, category: "Position Detect", timeLimit: 8, difficulty: "easy" },
  // Medium (5-7): 6s stimulus, 10s answer
  { id: 5, stimulus: "1   3   5   7   8   11   13", stimulusTime: 6, text: "Which number is NOT odd?", options: ["7", "11", "8"], correctIndex: 2, category: "Rule Violation", timeLimit: 10, difficulty: "medium" },
  { id: 6, stimulus: "X O X O X X X O X O", stimulusTime: 6, text: "How many X's appeared in total?", options: ["6", "5", "7"], correctIndex: 0, category: "Count Target", timeLimit: 10, difficulty: "medium" },
  { id: 7, stimulus: "GO  GO  STOP  GO  GO  GO  STOP  GO  STOP", stimulusTime: 6, text: "How many times did STOP appear?", options: ["2", "4", "3"], correctIndex: 2, category: "Count Target", timeLimit: 10, difficulty: "medium" },
  // Hard (8-10): 7s stimulus, 12s answer
  { id: 8, stimulus: "3 1 4 1 5 9 2 6 5 3 5 8", stimulusTime: 7, text: "How many times did '5' appear?", options: ["4", "2", "3"], correctIndex: 2, category: "Count Target", timeLimit: 12, difficulty: "hard" },
  { id: 9, stimulus: "11  13  17  19  21  23  29  31", stimulusTime: 7, text: "Which number is NOT a prime?", options: ["19", "23", "21"], correctIndex: 2, category: "Rule Violation", timeLimit: 12, difficulty: "hard" },
  { id: 10, stimulus: "2 4 6 8 10 12 15 16 18 20", stimulusTime: 7, text: "Which number broke the +2 pattern?", options: ["12", "16", "15"], correctIndex: 2, category: "Pattern Break", timeLimit: 12, difficulty: "hard" },
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
    default: return "Activity"
  }
}

export function isStimulusActivity(activityId: string): boolean {
  return activityId === "memory" || activityId === "attention"
}

export function isComprehensionActivity(activityId: string): boolean {
  return activityId === "comprehension"
}

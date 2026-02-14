export interface Question {
  id: number
  text: string
  options: string[]
  correctIndex: number
  category: string
}

// Activity 1: Mental Arithmetic — 10 basic arithmetic + 10 theoretical/pattern/recall
export const arithmeticQuestions: Question[] = [
  // Basic Arithmetic (1-10)
  { id: 1, text: "What is 47 + 86?", options: ["123", "133", "143", "113"], correctIndex: 1, category: "Basic Arithmetic" },
  { id: 2, text: "What is 215 - 78?", options: ["137", "147", "127", "157"], correctIndex: 0, category: "Basic Arithmetic" },
  { id: 3, text: "What is 12 x 15?", options: ["170", "180", "190", "160"], correctIndex: 1, category: "Basic Arithmetic" },
  { id: 4, text: "What is 144 / 12?", options: ["11", "13", "12", "14"], correctIndex: 2, category: "Basic Arithmetic" },
  { id: 5, text: "What is 999 + 1?", options: ["1001", "1000", "999", "1010"], correctIndex: 1, category: "Basic Arithmetic" },
  { id: 6, text: "What is 56 x 7?", options: ["382", "402", "392", "412"], correctIndex: 2, category: "Basic Arithmetic" },
  { id: 7, text: "What is 1000 - 347?", options: ["653", "663", "643", "673"], correctIndex: 0, category: "Basic Arithmetic" },
  { id: 8, text: "What is 225 / 15?", options: ["13", "14", "15", "16"], correctIndex: 2, category: "Basic Arithmetic" },
  { id: 9, text: "What is 33 + 67 + 100?", options: ["190", "200", "210", "180"], correctIndex: 1, category: "Basic Arithmetic" },
  { id: 10, text: "What is 18 x 18?", options: ["314", "324", "334", "304"], correctIndex: 1, category: "Basic Arithmetic" },
  // Theoretical / Pattern / Recall (11-20)
  { id: 11, text: "What comes next: 2, 6, 18, 54, ?", options: ["108", "162", "148", "216"], correctIndex: 1, category: "Pattern Recognition" },
  { id: 12, text: "If 5 machines make 5 widgets in 5 minutes, how many minutes for 100 machines to make 100 widgets?", options: ["100", "20", "5", "50"], correctIndex: 2, category: "Logical Reasoning" },
  { id: 13, text: "What is the next number: 1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "10"], correctIndex: 2, category: "Pattern Recognition" },
  { id: 14, text: "A bat and a ball cost $1.10. The bat costs $1 more than the ball. How much is the ball?", options: ["$0.10", "$0.05", "$0.15", "$0.20"], correctIndex: 1, category: "Logical Reasoning" },
  { id: 15, text: "Which number is the odd one out: 3, 5, 11, 14, 17, 23?", options: ["3", "14", "11", "23"], correctIndex: 1, category: "Pattern Recognition" },
  { id: 16, text: "What is 15% of 200?", options: ["25", "30", "35", "20"], correctIndex: 1, category: "Applied Math" },
  { id: 17, text: "Complete the series: 100, 81, 64, 49, ?", options: ["25", "36", "16", "42"], correctIndex: 1, category: "Pattern Recognition" },
  { id: 18, text: "If you rearrange 'CIFAIPC', you get the name of a(n):", options: ["Country", "City", "Ocean", "Animal"], correctIndex: 2, category: "Recall" },
  { id: 19, text: "How many degrees are in the interior angles of a triangle?", options: ["360", "180", "270", "90"], correctIndex: 1, category: "Recall" },
  { id: 20, text: "What is the square root of 196?", options: ["12", "13", "14", "15"], correctIndex: 2, category: "Applied Math" },
]

// Activity 2: Pattern Matching
export const patternQuestions: Question[] = [
  { id: 1, text: "Which shape completes the pattern: Circle, Square, Triangle, Circle, Square, ?", options: ["Circle", "Triangle", "Square", "Pentagon"], correctIndex: 1, category: "Shape Patterns" },
  { id: 2, text: "Find the odd one out: Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], correctIndex: 2, category: "Classification" },
  { id: 3, text: "If A=1, B=2, C=3, what is the value of CAB?", options: ["312", "6", "321", "123"], correctIndex: 1, category: "Symbolic Logic" },
  { id: 4, text: "Which doesn't belong: 144, 169, 196, 200, 225?", options: ["144", "169", "200", "225"], correctIndex: 2, category: "Number Patterns" },
  { id: 5, text: "Mirror image of 'b' is:", options: ["d", "p", "q", "b"], correctIndex: 0, category: "Spatial Reasoning" },
  { id: 6, text: "Complete: AB, CD, EF, GH, ?", options: ["IJ", "HI", "JK", "GI"], correctIndex: 0, category: "Sequence Patterns" },
  { id: 7, text: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are:", options: ["Razzies only", "Lazzies", "Neither", "Cannot determine"], correctIndex: 1, category: "Logical Deduction" },
  { id: 8, text: "How many triangles in a Star of David?", options: ["6", "8", "10", "20"], correctIndex: 1, category: "Visual Counting" },
  { id: 9, text: "Which number replaces ?: 3, 9, 27, ?, 243", options: ["54", "72", "81", "108"], correctIndex: 2, category: "Number Patterns" },
  { id: 10, text: "Rotate the letter 'N' 180 degrees. What do you get?", options: ["Z", "N", "U", "M"], correctIndex: 1, category: "Spatial Reasoning" },
]

// Activity 3: Memory Retention
export const memoryQuestions: Question[] = [
  { id: 1, text: "Remember this list: Apple, Book, Cat, Door, Eagle. What was the 3rd item?", options: ["Book", "Door", "Cat", "Eagle"], correctIndex: 2, category: "Serial Recall" },
  { id: 2, text: "A sequence was shown: 7, 3, 9, 1, 5. What was the 4th number?", options: ["3", "9", "1", "5"], correctIndex: 2, category: "Digit Span" },
  { id: 3, text: "Which color was NOT in the list: Red, Blue, Green, Yellow?", options: ["Red", "Orange", "Blue", "Green"], correctIndex: 1, category: "Recognition" },
  { id: 4, text: "Recall: The capital of Australia is:", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctIndex: 2, category: "Fact Recall" },
  { id: 5, text: "In the sequence Sun, Moon, Star, Cloud, Rain — what comes after Star?", options: ["Moon", "Cloud", "Rain", "Sun"], correctIndex: 1, category: "Sequential Memory" },
  { id: 6, text: "What is the reverse of the word 'MEMORY'?", options: ["YROMEM", "MROMEY", "YMEROM", "YRMOEM"], correctIndex: 0, category: "Working Memory" },
  { id: 7, text: "How many letters in the word 'NEUROSCIENCE'?", options: ["11", "12", "13", "10"], correctIndex: 1, category: "Processing" },
  { id: 8, text: "If today is Wednesday, what day was it 3 days ago?", options: ["Monday", "Sunday", "Saturday", "Tuesday"], correctIndex: 1, category: "Temporal Recall" },
  { id: 9, text: "The periodic table symbol for Gold is:", options: ["Go", "Gd", "Au", "Ag"], correctIndex: 2, category: "Fact Recall" },
  { id: 10, text: "Remember: 42, 17, 83, 56, 29. What was the largest number?", options: ["56", "83", "42", "29"], correctIndex: 1, category: "Magnitude Recall" },
]

// Activity 4: Reading Comprehension
export const comprehensionQuestions: Question[] = [
  { id: 1, text: "Passage: 'The EEG captures electrical signals from the scalp using electrodes.' — What does EEG capture?", options: ["Magnetic fields", "Electrical signals", "Sound waves", "Light"], correctIndex: 1, category: "Fact Extraction" },
  { id: 2, text: "Passage: 'Alpha waves (8-13 Hz) are dominant when eyes are closed.' — When are alpha waves dominant?", options: ["During sleep", "Eyes open", "Eyes closed", "During exercise"], correctIndex: 2, category: "Comprehension" },
  { id: 3, text: "Passage: 'The EMOTIV EPOC X has 14 channels and uses wireless transmission.' — How many channels?", options: ["10", "12", "14", "16"], correctIndex: 2, category: "Detail Recall" },
  { id: 4, text: "Passage: 'Beta waves indicate active thinking and focus.' — What do beta waves indicate?", options: ["Sleep", "Relaxation", "Active thinking", "Meditation"], correctIndex: 2, category: "Inference" },
  { id: 5, text: "Passage: 'Preprocessing removes noise from raw EEG signals.' — What is removed during preprocessing?", options: ["Data", "Electrodes", "Noise", "Channels"], correctIndex: 2, category: "Fact Extraction" },
  { id: 6, text: "If a study finds 'higher theta/alpha ratio correlates with fatigue', a fatigued person would have:", options: ["Low theta", "High alpha", "High theta/alpha ratio", "Equal theta and alpha"], correctIndex: 2, category: "Analytical Reading" },
  { id: 7, text: "Passage: 'The 10-20 system ensures cross-study comparability.' — Why use the 10-20 system?", options: ["It's cheaper", "Cross-study comparability", "It uses fewer electrodes", "It's wireless"], correctIndex: 1, category: "Purpose Identification" },
  { id: 8, text: "Passage: 'Motor imagery involves imagining movement without physical action.' — Motor imagery requires:", options: ["Physical movement", "No movement", "Verbal response", "Eye tracking"], correctIndex: 1, category: "Comprehension" },
  { id: 9, text: "A research abstract states: 'N=50, p<0.01'. This means the result is:", options: ["Not significant", "Statistically significant", "Inconclusive", "Random"], correctIndex: 1, category: "Research Literacy" },
  { id: 10, text: "Passage: 'Frontal electrodes (F3, F4) are used for working memory tasks.' — Which electrodes for working memory?", options: ["O1, O2", "T7, T8", "F3, F4", "P7, P8"], correctIndex: 2, category: "Detail Matching" },
]

// Activity 5: Sustained Attention
export const attentionQuestions: Question[] = [
  { id: 1, text: "Count the number of times 'A' appears: A B C A D A E F A G", options: ["3", "4", "5", "2"], correctIndex: 1, category: "Target Counting" },
  { id: 2, text: "Which number appears twice: 5, 8, 3, 7, 8, 2, 9, 1?", options: ["5", "3", "8", "7"], correctIndex: 2, category: "Duplicate Detection" },
  { id: 3, text: "In the sequence: X O X X O X O X X X — how many X's?", options: ["5", "6", "7", "8"], correctIndex: 2, category: "Sustained Counting" },
  { id: 4, text: "Which word is different: run, jog, sprint, read, dash?", options: ["run", "jog", "read", "sprint"], correctIndex: 2, category: "Oddball Detection" },
  { id: 5, text: "How many even numbers: 13, 24, 37, 48, 51, 62, 79, 80?", options: ["3", "4", "5", "2"], correctIndex: 1, category: "Selective Attention" },
  { id: 6, text: "What letter comes after the 2nd vowel in: B E A U T I F U L?", options: ["T", "U", "I", "B"], correctIndex: 0, category: "Sequential Focus" },
  { id: 7, text: "Count backwards: 50, 45, 40, 35, ? — what comes next?", options: ["25", "30", "20", "15"], correctIndex: 1, category: "Working Attention" },
  { id: 8, text: "In 'MISSISSIPPI', how many S's are there?", options: ["3", "4", "5", "2"], correctIndex: 1, category: "Letter Counting" },
  { id: 9, text: "Which is the only prime number: 15, 21, 23, 27?", options: ["15", "21", "23", "27"], correctIndex: 2, category: "Analytical Focus" },
  { id: 10, text: "Track the target: if X moves right 3, up 2, left 1 — net horizontal movement is:", options: ["1 right", "2 right", "3 right", "0"], correctIndex: 1, category: "Spatial Tracking" },
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

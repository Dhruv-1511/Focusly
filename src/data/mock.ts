export const PROBLEMS = [
  {
    id: "focus",
    title: "I can't focus",
    searchTerms: ["focus", "concentration", "distracted"],
    why: "Commonly caused by digital distractions, lack of structured goals, or high cortisol levels (stress).",
    fiveStepFix: [
      "Phone in another room (The 10-meter rule).",
      "Set a single 25-minute goal.",
      "Hydrate - drink 300ml of water.",
      "Clear your desk of everything except the current subject.",
      "Start with the easiest 2-minute task."
    ],
    tools: ["Pomodoro Timer", "White Noise Generator", "Site Blocker"],
    mistakes: ["Trying to multi-task", "Studying in bed", "Checking social media 'just for a second'"],
    quickAction: "Close all tabs except one and set a timer for 5 minutes of deep work.",
  },
  {
    id: "memory",
    title: "I forget what I study",
    searchTerms: ["forget", "memory", "remember", "retention"],
    why: "The 'Forgetting Curve' describes how information is lost over time when there is no attempt to retain it.",
    fiveStepFix: [
      "Active Recall: Test yourself immediately.",
      "Spaced Repetition: Review after 1 day, 3 days, 1 week.",
      "Teach it to an imaginary student.",
      "Create a Mind Map connecting to existing knowledge.",
      "Sleep 7-8 hours to consolidate memory."
    ],
    tools: ["Smart Flashcards", "Revision Scheduler", "Mind Mapper"],
    mistakes: ["Passive re-reading", "Highlighting everything", "Studying while sleep-deprived"],
    quickAction: "Write down 3 things you learned in the last hour from memory.",
  },
  {
    id: "stress",
    title: "Exam stress",
    searchTerms: ["stress", "anxiety", "exam", "worried"],
    why: "Fear of failure or high expectations creates a fight-or-flight response in the brain.",
    fiveStepFix: [
      "Square Breathing: 4s inhale, 4s hold, 4s exhale, 4s hold.",
      "Brain Dump: Write all worries on paper.",
      "Focus on the process, not the result.",
      "10-minute light walk.",
      "Acknowledge that exams don't define your worth."
    ],
    tools: ["Breathing Guide", "Calm Music", "Affirmation Journal"],
    mistakes: ["Isolating completely", "Too much caffeine", "Catastrophizing outcomes"],
    quickAction: "Take 10 deep breaths and list 3 things you are safe and grateful for right now.",
  },
  {
    id: "procrastination",
    title: "Procrastination",
    searchTerms: ["procrastination", "lazy", "delay", "later"],
    why: "Procrastination is an emotional regulation problem, not a time management one.",
    fiveStepFix: [
      "Forgive yourself for procrastinating earlier.",
      "Break the giant task into 10 tiny pieces.",
      "Use the 5-second rule (5-4-3-2-1-GO).",
      "Remove the first hurdle (Open the book now).",
      "Reward yourself after 15 minutes of work."
    ],
    tools: ["Habit Tracker", "Daily Challenge", "XP System"],
    mistakes: ["Waiting for 'motivation' to strike", "Perfecting the workspace first", "Overplanning"],
    quickAction: "Open the file or book you've been avoiding right now. Just open it.",
  }
];

export const MOCK_STUDY_PLAN = {
  daily: [
    { time: "08:00 AM", task: "Deep Work: Mathematics", type: "Focus" },
    { time: "10:00 AM", task: "Break / Hydrate", type: "Break" },
    { time: "10:15 AM", task: "Review: Physics Notes", type: "Revision" },
    { time: "12:00 PM", task: "Lunch & Social", type: "Break" },
    { time: "01:30 PM", task: "Exam Practice: History", type: "Mock" },
  ],
  stats: {
    hoursStudied: 124,
    focusStreak: 12,
    xp: 2450,
    level: 15,
    badges: ["Early Bird", "Deep Diver", "consistency King"]
  }
};

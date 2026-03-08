type Option = { readonly value: string; readonly label: string };

export const LANGUAGES = [
  { value: "", label: "All" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "c++", label: "C++" },
  { value: "c#", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "dart", label: "Dart" },
  { value: "shell", label: "Shell" },
] as const satisfies readonly Option[];

export const LABELS_BEGINNER = [
  { value: "good first issue", label: "Good First Issue" },
  { value: "good-first-issue", label: "good-first-issue" },
  { value: "first-timers-only", label: "First Timers Only" },
  { value: "beginner", label: "Beginner" },
  { value: "beginner friendly", label: "Beginner Friendly" },
  { value: "easy", label: "Easy" },
  { value: "easy fix", label: "Easy Fix" },
  { value: "low-hanging fruit", label: "Low Hanging Fruit" },
  { value: "starter", label: "Starter" },
  { value: "newcomer", label: "Newcomer" },
  { value: "difficulty/newcomer", label: "Difficulty: Newcomer" },
  { value: "D-easy", label: "D-Easy (Rust)" },
  { value: "E-easy", label: "E-Easy" },
  { value: "level:starter", label: "level:starter" },
  { value: "difficulty:easy", label: "difficulty:easy" },
  { value: "effort:small", label: "effort:small" },
  { value: "complexity:low", label: "complexity:low" },
  { value: "priority:low", label: "priority:low" },
] as const satisfies readonly Option[];

export const LABELS_INTERMEDIATE = [
  { value: "help wanted", label: "Help Wanted" },
  { value: "up-for-grabs", label: "Up For Grabs" },
  { value: "contributions welcome", label: "Contributions Welcome" },
  { value: "intermediate", label: "Intermediate" },
  { value: "medium", label: "Medium" },
  { value: "moderate", label: "Moderate" },
  { value: "difficulty:medium", label: "difficulty:medium" },
  { value: "effort:medium", label: "effort:medium" },
  { value: "complexity:medium", label: "complexity:medium" },
  { value: "level:intermediate", label: "level:intermediate" },
  { value: "D-medium", label: "D-Medium (Rust)" },
  { value: "priority:medium", label: "priority:medium" },
] as const satisfies readonly Option[];

export const LABELS_ADVANCED = [
  { value: "advanced", label: "Advanced" },
  { value: "hard", label: "Hard" },
  { value: "expert", label: "Expert" },
  { value: "difficult", label: "Difficult" },
  { value: "challenge", label: "Challenge" },
  { value: "difficulty:hard", label: "difficulty:hard" },
  { value: "effort:large", label: "effort:large" },
  { value: "complexity:high", label: "complexity:high" },
  { value: "level:advanced", label: "level:advanced" },
  { value: "D-hard", label: "D-Hard (Rust)" },
  { value: "priority:high", label: "priority:high" },
  { value: "priority:critical", label: "priority:critical" },
] as const satisfies readonly Option[];

export const LABELS_WORK_TYPE = [
  { value: "bug", label: "Bug" },
  { value: "enhancement", label: "Enhancement" },
  { value: "feature", label: "Feature" },
  { value: "feature request", label: "Feature Request" },
  { value: "refactor", label: "Refactor" },
  { value: "documentation", label: "Documentation" },
  { value: "docs", label: "Docs" },
  { value: "testing", label: "Testing" },
  { value: "test", label: "Test" },
  { value: "tech-debt", label: "Tech Debt" },
  { value: "chore", label: "Chore" },
] as const satisfies readonly Option[];

export const LABELS_AREA = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "api", label: "API" },
  { value: "cli", label: "CLI" },
  { value: "UI", label: "UI" },
  { value: "UX", label: "UX" },
  { value: "design", label: "Design" },
  { value: "accessibility", label: "Accessibility" },
  { value: "i18n", label: "i18n" },
  { value: "translation", label: "Translation" },
  { value: "performance", label: "Performance" },
  { value: "security", label: "Security" },
  { value: "devops", label: "DevOps" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "database", label: "Database" },
  { value: "mobile", label: "Mobile" },
  { value: "hacktoberfest", label: "Hacktoberfest" },
] as const satisfies readonly Option[];

export const ORG_SHORTCUTS = [
  { value: "microsoft", label: "Microsoft" },
  { value: "facebook", label: "Meta" },
  { value: "google", label: "Google" },
  { value: "vercel", label: "Vercel" },
  { value: "apache", label: "Apache" },
  { value: "mozilla", label: "Mozilla" },
  { value: "elastic", label: "Elastic" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "rust-lang", label: "Rust" },
  { value: "golang", label: "Go" },
  { value: "denoland", label: "Deno" },
  { value: "sveltejs", label: "Svelte" },
] as const satisfies readonly Option[];

export const STARS_OPTIONS = [
  { value: "", label: "starsAny" },
  { value: "10", label: "10+" },
  { value: "50", label: "50+" },
  { value: "100", label: "100+" },
  { value: "500", label: "500+" },
  { value: "1000", label: "1,000+" },
  { value: "5000", label: "5,000+" },
  { value: "10000", label: "10,000+" },
] as const satisfies readonly Option[];

export const DATE_OPTIONS = [
  { value: "", label: "dateAny" },
  { value: "7", label: "date7" },
  { value: "14", label: "date14" },
  { value: "30", label: "date30" },
  { value: "90", label: "dateMonths3" },
  { value: "180", label: "dateMonths6" },
  { value: "365", label: "dateYear" },
] as const satisfies readonly Option[];

export const SORT_OPTIONS = [
  { value: "updated", label: "sortUpdated" },
  { value: "created", label: "sortCreated" },
  { value: "comments", label: "sortComments" },
  { value: "reactions", label: "sortReactions" },
] as const satisfies readonly Option[];

export const PER_PAGE_OPTIONS = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
] as const satisfies readonly Option[];

export const DEFAULT_FILTERS = {
  search: "",
  language: "",
  label: "good first issue",
  stars: "100",
  date: "30",
  sort: "updated",
  perPage: "20",
  org: "",
  repo: "",
  noAssignee: false,
  noComments: false,
  noPr: false,
  hasBody: false,
} as const;

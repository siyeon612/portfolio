export type Visibility =
  | "Private"
  | "Public"
  | "Research"
  | "Commercial"
  | "Personal"
  | "University";

export const visibilityStyles: Record<Visibility, string> = {
  Private:
    "border-zinc-600 bg-zinc-800/40 text-zinc-300",

  Public:
    "border-emerald-500/50 bg-emerald-500/10 text-emerald-300",

  Research:
    "border-sky-500/50 bg-sky-500/10 text-sky-300",

  Commercial:
    "border-violet-500/50 bg-violet-500/10 text-violet-300",

  Personal:
    "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",

  University:
    "border-amber-500/50 bg-amber-500/10 text-amber-300",
};
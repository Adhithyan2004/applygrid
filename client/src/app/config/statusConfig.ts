export const statusConfig = {
  APPLIED: {
    label: "Applied",
    dot: "bg-blue-500",
    style: "bg-blue-100 text-blue-700 border-blue-200",
  },

  INTERVIEW: {
    label: "Interview",
    dot: "bg-yellow-500",
    style: "bg-yellow-100 text-yellow-700 border-purple-200",
  },

  OFFER: {
    label: "Offer",
    dot: "bg-green-500",
    style: "bg-green-100 text-green-700 border-green-200",
  },

  REJECTED: {
    label: "Rejected",
    dot: "bg-red-500",
    style: "bg-red-100 text-red-700 border-red-200",
  },

  GHOSTED: {
    label: "Ghosted",
    dot: "bg-zinc-500",
    style: "bg-zinc-200 text-zinc-700 border-zinc-200",
  },
} as const;

export type StatusType = keyof typeof statusConfig;

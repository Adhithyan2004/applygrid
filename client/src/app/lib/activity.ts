export const getActivityText = (status: string, companyName: string) => {
  switch (status) {
    case "APPLIED":
      return `Applied at ${companyName}`;

    case "INTERVIEW":
      return `Interview at ${companyName}`;

    case "OFFER":
      return `Offer from ${companyName}`;

    case "REJECTED":
      return `Rejected by ${companyName}`;

    case "GHOSTED":
      return `Ghosted by ${companyName}`;

    default:
      return companyName;
  }
};

export const STATUS_FILTERS = [
  {
    value: "ALL",
    label: "All",
    activeClass: "bg-primary text-white border",
  },
  {
    value: "APPLIED",
    label: "Applied",
    activeClass: "bg-blue-100 text-blue-700 border",
  },
  {
    value: "INTERVIEW",
    label: "Interview",
    activeClass: "bg-yellow-100 text-yellow-700 border",
  },
  {
    value: "OFFER",
    label: "Offer",
    activeClass: "bg-emerald-100 text-emerald-700 border",
  },
  {
    value: "REJECTED",
    label: "Rejected",
    activeClass: "bg-red-100 text-red-700 border",
  },
  {
    value: "GHOSTED",
    label: "Ghosted",
    activeClass: "bg-slate-200 text-slate-700 border",
  },
] as const;

export type StatusFilter = (typeof STATUS_FILTERS)[number]["value"];

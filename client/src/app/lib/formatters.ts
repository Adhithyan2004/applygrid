export const formatTimeAgo = (date: string) => {
  const diff = Date.now() - new Date(date).getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "Just Now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;

  const months = Math.floor(days / 30);
  return `${months}mo ago`;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};

export const formatSalary = (value: number | null) => {
  if (value === null) return "";
  return value.toLocaleString("en-IN");
};

export const formatSource = (source: string) => {
  switch (source) {
    case "LINKEDIN":
      return "Linkedin";

    case "COMPANY_CAREER_PAGE":
      return "Company Page";

    case "REFERRAL":
      return "Referral";

    case "INDEED":
      return "Indeed";

    case "CUTSHORT":
      return "CutShort";

    case "WELLFOUND":
      return "Wellfound";

    case "GLASSDOOR":
      return "Glassdoor";

    case "CAMPUS_PLACEMENT":
      return "Campus Placements";

    case "COLD_MAILING":
      return "Cold Mailing";
  }
};

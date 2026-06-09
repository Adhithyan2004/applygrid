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

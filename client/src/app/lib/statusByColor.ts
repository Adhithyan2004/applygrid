export const getStatusStyles = (status: string) => {
  switch (status) {
    case "APPLIED":
      return "bg-blue-100 text-blue-700";

    case "INTERVIEW":
      return "bg-yellow-100 text-yellow-700";

    case "OFFER":
      return "bg-green-100 text-green-700";

    case "REJECTED":
      return "bg-red-100 text-red-700";

    case "WITHDRAWN":
      return "bg-orange-100 text-orange-700";

    case "GHOSTED":
      return "bg-zinc-200 text-zinc-700";

    default:
      return "bg-zinc-100 text-zinc-700";
  }
};

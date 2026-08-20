export const getStatusAvatarStyle = (status: string) => {
  switch (status) {
    case "APPLIED":
      return "bg-blue-500/50";
    case "INTERVIEW":
      return "bg-yellow-500/50";
    case "OFFER":
      return "bg-green-500/50";
    case "REJECTED":
      return "bg-red-500/50";
    case "GHOSTED":
      return "bg-zinc-400/50";
    default:
      return "bg-zinc-300/50";
  }
};

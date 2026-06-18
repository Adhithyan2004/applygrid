export const calculateStreak = (dates: Date[]) => {
  const uniqueDates = new Set(dates.map((date) => getLocalDateString(date)));

  let streak = 0;

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  const today = getLocalDateString(currentDate);

  // No application today
  if (!uniqueDates.has(today)) {
    currentDate.setDate(currentDate.getDate() - 1);

    const yesterday = getLocalDateString(currentDate);

    // No application yesterday either
    if (!uniqueDates.has(yesterday)) {
      return 0;
    }
  }
  while (true) {
    const dateString = getLocalDateString(currentDate);

    if (!uniqueDates.has(dateString)) {
      break;
    }

    streak++;

    currentDate.setDate(currentDate.getDate() - 1);
  }

  return streak;
};

// Helper cause ISO f'ed up the function lol
const getLocalDateString = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

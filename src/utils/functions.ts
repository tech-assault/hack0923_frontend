const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

export const generateFormattedDatesBetween = (from: number, to: number): string[] => {
    const dates = [];

    const startDate = new Date(from);
    const endDate = new Date(to);

    for (let current = startDate; current <= endDate; current.setDate(current.getDate() + 1)) {
      dates.push(formatDate(current));
    }

    return dates;
  }
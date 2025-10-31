export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function getTimeDifference(submittedTime: string): string {
  const submitted = new Date(submittedTime);
  const now = new Date();

  const diffMs = now.getTime() - submitted.getTime(); // difference in milliseconds
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const formattedHours = String(diffHours).padStart(2, '0');
  const formattedMinutes = String(diffMinutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

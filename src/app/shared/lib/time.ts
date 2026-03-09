export const formatTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) return '00h 00m 00s';

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return `${hours.toString().padStart(2, '0')}h ${minutes
    .toString()
    .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
};

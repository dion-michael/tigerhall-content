const secondsToMinutes = (seconds: number) => {
  return Math.floor(seconds / 60);
};

export const getPodcastDuration = (seconds: number) => {
  const minutes = secondsToMinutes(seconds);
  if (minutes) {
    return `${minutes}m`;
  }
  return `${seconds}s`;
};

export default secondsToMinutes;

// This utility function formats a movie release date from a timestamp
// into a human-readable string in the format "MMM DD, YYYY".
export function formatMovieDate(dateInput) {
  if (!dateInput) return "Date not available";
  try {
    const date = new Date(parseInt(dateInput));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "Invalid date";
  }
}

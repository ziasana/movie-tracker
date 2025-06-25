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

// Truncates a string if it exceeds a specified maximum length and appends a replacement string.
// Ex: concatString("Texttttttttttttttt", 10, 7, "...") => Returns "Textttt..."
export const concatString = (
  str: string,
  maxLength: number,
  stopAt: number,
  replaceBy: string
) => {
  return str.length > maxLength ? `${str.slice(0, stopAt)}${replaceBy}` : str;
};

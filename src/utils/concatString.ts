export const concatString = (
  str: string,
  maxLength: number,
  stopAt: number,
  replaceBy: string
) => {
  return str.length > maxLength ? `${str.slice(0, stopAt)}${replaceBy}` : str;
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) throw Error("size must be greater than zero");
  const chunks: T[][] = [];
  let start = 0;
  while (start < arr.length) {
    const chunk = arr.slice(start, start + size);
    chunks.push(chunk);
    start += size;
  }

  return chunks;
};

export const flatten = <T>(arr: T[][]): T[] => {
  return arr.flat(Infinity) as T[];
};

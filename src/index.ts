/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

const chunk = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  let start = 0;

  while (start < arr.length) {
    const chunk = arr.slice(start, start + size);
    chunks.push(chunk);
    start += size;
  }

  return chunks;
};

console.log(chunk([1, 2, 3, 4, 5], 6));

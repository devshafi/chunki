import { chunk } from "../src/index";

describe("Chunk function", () => {
  it("should split an array into chunks of specified size", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const size = 2;
    const result = chunk(arr, size);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it("should handle empty array", () => {
    const arr: any[] = [];
    const size = 3;
    const result = chunk(arr, size);
    expect(result).toEqual([]);
  });

  it("should handle size greater than array length", () => {
    const arr = [1, 2, 3];
    const size = 5;
    const result = chunk(arr, size);
    expect(result).toEqual([[1, 2, 3]]);
  });

  it("should handle size equal to array length", () => {
    const arr = ["a", "b", "c"];
    const size = 3;
    const result = chunk(arr, size);
    expect(result).toEqual([["a", "b", "c"]]);
  });

  it("should throw an error when size is less than or equal to zero", () => {
    const arr = [1, 2, 3, 4, 5];
    const sizes = [0, -2];
    for (let i = 0; i < sizes.length; i++) {
      expect(() => {
        chunk(arr, sizes[i]);
      }).toThrowError("size must be greater than zero");
    }
  });
});

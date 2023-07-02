import { flatten } from "../src/index";

describe("flatten", () => {
  // Test case 1: Flattening a 2D array of numbers
  it("should flatten a 2D array of numbers", () => {
    const numbers: number[][] = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const flattenedNumbers = flatten(numbers);
    expect(flattenedNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // Test case 2: Flattening a 2D array of strings
  it("should flatten a 2D array of strings", () => {
    const strings: string[][] = [["Hello"], ["World"], ["!"]];
    const flattenedStrings = flatten(strings);
    expect(flattenedStrings).toEqual(["Hello", "World", "!"]);
  });

  // Test case 3: Flattening a 2D array with mixed types
  it("should flatten a 2D array with mixed types", () => {
    const mixed: (string | number)[][] = [["Hello"], [42], ["World"]];
    const flattenedMixed = flatten(mixed);
    expect(flattenedMixed).toEqual(["Hello", 42, "World"]);
  });

  // Test case 4: Flattening an empty 2D array
  it("should return an empty array when flattening an empty 2D array", () => {
    const empty: number[][] = [];
    const flattenedEmpty = flatten(empty);
    expect(flattenedEmpty).toEqual([]);
  });

  // Test case 5: Flattening a 2D array with nested empty arrays
  it("should return an empty array when flattening a 2D array with nested empty arrays", () => {
    const nestedEmpty: number[][] = [[], [], []];
    const flattenedNestedEmpty = flatten(nestedEmpty);
    expect(flattenedNestedEmpty).toEqual([]);
  });

  // Test case 6: Flattening a 2D array with arrays of different lengths
  it("should flatten a 2D array with arrays of different lengths", () => {
    const uneven: number[][] = [[1, 2, 3], [4, 5], [6]];
    const flattenedUneven = flatten(uneven);
    expect(flattenedUneven).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

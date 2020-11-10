import Matrix from '../src/sudoku.js';

describe('Matrix', () => {

  test('it should create a blank row with 9 elements', () => {
    const newMatrix = new Matrix();
    expect(newMatrix.createRows()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
  });
});








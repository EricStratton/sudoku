import Matrix from '../src/sudoku.js';

describe('Matrix', () => {

  // test('it should create a blank row with 9 elements', () => {
  //   const newMatrix = new Matrix();
  //   expect(newMatrix.createRows()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
  // });

  // test('it should create a complete 9x9 matrix', () => {
  //   const newMatrix = new Matrix();
  //   newMatrix.createRows();
  //   expect(newMatrix.createMatrix()).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0]])
  // });


    test('it should sort and compare numbers within first array', () => {
      const newMatrix = new Matrix();
      expect(newMatrix.checkRow()).toEqual(true);

    })

    test('it will sort numbers in each array', () => {
      const newMatrix = new Matrix();
      newMatrix.sortCheckingArray();
      expect(this.sortedMatrix[4]).toEqual([1,2,3,4,5,6,7,8,9]);

    });
    // test
    // const newMatrix = new Matrix();
    // newMatrix.checkRow();
    // expect(newMatrix[i].)
});





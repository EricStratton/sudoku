import Matrix from '../src/sudoku.js';

describe('Matrix', () => {

  test('it should create a blank row with 9 elements', () => {
    const newMatrix = new Matrix();
    expect(newMatrix.createRows()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0])
  });
});



  // test('it should create rows and columns', () => {
  //   //const rows = new Rows();
  //   let sudoku = new Sudoku();
  //   expect(sudoku.rows).toEqual([]);
  //   expect(sudoku.columns).toEqual([ [], [], [], [], [], [], [], [], [] ]);
  // });






// export default function Sudoku  () {
//   this.rows = [];
//   this.columns = [ [], [], [], [], [], [], [], [], [] ];
// };



// export default function Matrix() {
//   this.rows = [];
//   this.completeMatrix = [];
// }

// Matrix.prototype.createRows = function () {
//   for (let i = 0; i < 9; i++) {
//     this.rows.push(0);
//   }
//   return this.rows;
// }

// Matrix.prototype.createMatrix = function () {
//   for (let j = 0; j < 9; j++) {
//     this.completeMatrix.push(this.rows);
//   }
//   return this.completeMatrix;
// };

export default function Matrix() {
  this.completeMatrix = [[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]];
}


Matrix.prototype.checkRow = function () {
  let array = this.completeMatrix[0];
  array.sort();
  for (let i = 0; i < 7; i++) {
    if (array[i] < array[i + 1]) {
      return true;
    } else {
      return false;
    }
  }

}
// method
// sample=sort(this.completeMatrix[0][8])
// method
// Each row contains all numbers from 1 to 9 with no repeats.
// for j
// let sample=sort(this.completeMatrix[0])
//         0,1,2,3,4,5,6,7,8 
// sample=[1,2,3,4,5,6,7,8,9],[]

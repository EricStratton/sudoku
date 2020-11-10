// export default function Sudoku  () {
//   this.rows = [];
//   this.columns = [ [], [], [], [], [], [], [], [], [] ];
// };



export default function Matrix() {
  this.rows = [];
  this.completeMatrix = [];
}

Matrix.prototype.createRows = function () {
  for (let i = 0; i < 9; i++) {
    this.rows.push(0);
  }
  return this.rows;
}

Matrix.prototype.createMatrix = function () {
  for (let j = 0; j < 9; j++) {
    this.completeMatrix.push(this.rows);
  }
  return this.completeMatrix;
};

// const newMatrix = new Matrix();
// newMatrix.createRows();
// newMatrix.createMatrix();


// Matrix.prototype.makeRows = function () {

// }
// for (let i=0;i<9;i++){
//  for(let j=0;j<9; j++){
 //   this.completeMatrix[i][j].push(rows);
 //i=0 completeMatrix[0]
 // }
//}
//   column.forEach(function(j){
//     this.completeMatrix.push(0);
//
//   })
// })
// sudoku= math.matrix([[0, 0, 0, 0, 0, 0, 0, 0, 0], 
//   [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//   [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0]]);
//   if sudoku[0][0]===0;
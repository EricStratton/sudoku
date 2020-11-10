// export default function Sudoku  () {
//   this.rows = [];
//   this.columns = [ [], [], [], [], [], [], [], [], [] ];
// };



export default function Matrix () {
  this.rows = [];
}

Matrix.prototype.createRows = function () {
  for (let i = 0; i < 9; i ++) {
    this.rows.push(0);
  }
  return this.rows;
};






// matrix=new Matrix(9,9);
// Matrix.prototype.makeRows = function () {
  
// }
// row.forEach(function(i){ i=1 j=0
//   column.forEach(function(j){
//     matrix[i][j]=0;
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
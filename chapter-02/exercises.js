
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) {
  //declare and initialize level variable
  let level = '#';
  //while loop to iterate and increment level
  while (level.length <= number){
    console.log(level);
    level += '#';
  }


}



////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // YOUR CODE GOES BELOW HERE //
  //for loop to iterate thru 1-100 and print
  for (let i = start; i <= end; i++) {
      //if statement if divisable by 3 & 5 prints fizzbuzz
      if (i % 5 === 0 && i % 3 === 0){
          console.log('fizzbuzz');
          //else if statement that prints fizz if number is divisable by 3 only
      } else if (i % 3 === 0){
          console.log('fizz');
          //else if statement that prints buzz if number is divisable by 5 only
      }   else if ( i % 5 === 0){
              console.log('buzz');
              //default prints number if previous checks pass thru
      }   else {
              //if not divisable by 3 or 5, logs number
              console.log(i);
      }
  }
           
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  //variable to hold string
  let chessBoard = '';
  //create row loop to increment starting at 0
  for(let j = 0; j < x; j++){
    //create column loop to iterate thru row starting from 0
    for(let i = 0; i < x; i++){
      //if conditon to combine both row and column into integer
      //and test if even
      if((i + j) % 2 === 0){
        //if row + column is even increment string with space (white tile)
        chessBoard += ' ';
      } else {
        //if odd increment string with # (black tile)
        chessBoard += '#';
      }
    }
    //after etnire row loop finishes, add a new line
    chessBoard += '\n';
  }

  console.log(chessBoard);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
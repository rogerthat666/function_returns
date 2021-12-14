// const biggerthanhundred = function (number){
//     if (number >= 100) {
//         return ("true"); }

//     else if (number < 100){
//         return ("false");
           
//     }
// };

// const result = biggerthanhundred(100);
// console.log(result);

// --------------------------------------------------------

// const brendaBouncer = function (age, current){
//     if (age >= 18) {        
//     }

//     if (age < 18) {
//         return ("this is a club for adults");
//     }

//     if (current > 100) {
        
//         return ("it's too busy now, come back later"); 
//     }
    
//     else if (current <= 100) {
//         return ("come in");
//     }
    
// };

// const result = brendaBouncer(19, 60);

// console.log(result);

// --------------------------------------------------------

const avg = function(gemiddeld) {
    const sum = gemiddeld.reduce((a, b) => a + b);
    const average = sum/gemiddeld.length;
    return average;
  }
  
  console.log(Math.round(avg([1, 2, 3, 7, 8])));
  console.log(Math.round(avg([6, 37, 4, 25, 8])));

  // thsi function produces something
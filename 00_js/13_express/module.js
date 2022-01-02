export function abs(number) {
    if (0 < number) {
      return number;
    } else {
      return -number;
    }
  };
export function circleArea(radius) {
    return radius * radius * Math.PI;
  };
  
  


// let abs = function (number) {
//   if (0 < number) {
//     return number;
//   } else {
//     return -number;
//   }
// };

// let circleArea = function (radius) {
//   return radius * radius * Math.PI;
// };


// export { circleArea, abs} ;
// 한꺼번에 export 할수도 있고 
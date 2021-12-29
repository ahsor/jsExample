"use strict";

let name = "kim";
{
  // block scope
  let msg = "Hello javascript!!";
  console.log(msg);
  msg = 10;
  console.log(msg);
  console.log(name);
}
console.log("block scope ex =", msg);
console.log(name);

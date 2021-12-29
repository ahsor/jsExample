"use strict";

var x; // undefined
console.log(`x = ${x}, type = ${typeof x}`);
var x = undefined;
console.log(`x = ${x}, type = ${typeof x}`);
var y = null;
console.log(`y = ${y}, type = ${typeof y}`);

let text = "hello";
console.log(`text = ${text}, type : ${typeof text}`);
text = 10; // 형변환
console.log(`text = ${text}, type : ${typeof text}`);
text = "17" + 5;
console.log(`text = ${text}, type : ${typeof text}`);
text = "17" + "5";
console.log(`text = ${text}, type : ${typeof text}`);

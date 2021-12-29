"use strict";

const symbol1 = Symbol("kim");
const symbol2 = Symbol("kim");
console.log(symbol1 === symbol2); // 다른 데이터임을 확인할 수 있다.

console.log(symbol1); // 심볼은 직접 출력하면 오류가 난다.
console.log(
  `symbol1 = ${symbol1.description}, type : ${typeof symbol1.description}`
); // 심볼 출력은 항상 description이 필요

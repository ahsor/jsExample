"use strict";

var name = "홍길동";
var age = 30;
var card = {
  name, // name : name
  age, // age = age
  tel: "010-5475-0763",
  fax: "02-789-8878",
  email: "honggilgdong@gmail.com",
};

console.log(card);

card.gender = "male";
card.hairColor = "brown";
console.log(card);

delete card.hairColor;
console.log(card);

console.log(card.name);
console.log(card["name"]);
console.log(card.birthDay); // 존재하지 않은 속성 접근 undefined 출력
console.log("birthDay" in card); // card에 birthDay 존재하지 않음을 확인하고  결과는 false
console.log("age" in card); // true

// 객체를 리턴하는 함수
/*
function mObject(name, age) {
  return {
    name: name, // 변수명이 동일함
    age: age,
    hobby: "read book",
  };
}
*/

function mObject(name, age) {
  return {
    name, // 변수명이 동일하므로 생략할 수 있음
    age,
    hobby: "read book",
  };
}

const kim = mObject("kim", 30);
console.log(kim);


// 객체를 이용한 미성년자 구분
function isAdult(person) {
  if ("age" in person || person.age < 20) {
    // if (!("age" in person || person.age < 20)) { // 성년인지 구분
    return false;
  }
  return true;
}

const kim = {
  name: "kim",
  age: 30,
};

const park = {
  name: "park",
};

console.log(isAdult(kim));
console.log(isAdult(park));

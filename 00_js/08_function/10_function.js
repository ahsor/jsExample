// 객체를 이용한 미성년자 구분
const kim = {
  name: "kim",
  age: 30,
};

const park = {
  name: "park",
};

for (key in kim) {
  console.log(key);
  // key 값은 x, y등 변수명으로 대체하면 됨
}

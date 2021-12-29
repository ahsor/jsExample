var person = {name:'kim', age:30};

var People = function(name, age){
    this.name = name;
    this.age = age; 
}

// 붕어빵틀
function Person(name, age){
    this.name = name;
    this.age = age; 
}

// 붕어빵
Person.prototype.speed = function( speed ){
    /* function으로 만든 객체 즉 클래스만 prototype을 추가할 수 있음  */
    //this.speed = ++speed;
    console.log(' speed = ', ++speed )
}

console.log( person );
console.log( new Person('hong', 40) );
console.log( new People('park', 50) );

let hong = new Person('hong', 40);

console.log( hong.speed(55) )
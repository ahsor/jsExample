// 이미 정의 되어 있는 exit 이벤트 사용하기 

process.on('userDefineEvent', function(){
    console.log('userDefineEvent 발생');
   
})


// trigger 와 같이 동작 

process.on('click', function(){
    console.log('click');
})
var count = 0; 
process.emit('click');
// 여러번 발생할 이벤트는 이쪽에 선언하는 것이 옳은 것 같음
var timer = setInterval(function(){ 
    console.log('click 실행', count);

    // process.emit('userDefineEvent');
    // 
    if( ++count >= 3){
        clearInterval( timer );
    }
}, 3000);

console.log('이벤트 발생전');


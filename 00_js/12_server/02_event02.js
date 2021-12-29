// 이미 정의 되어 있는 exit 이벤트 사용하기 

process.on('userDefineEvent', function(){
    console.log('userDefineEvent 발생');
   
})


process.on('exit', function(){
    console.log('exit');
})

setTimeout(function(){ 
    console.log('user define event 실행');

    process.emit('userDefineEvent');
}, 3000);

console.log('이벤트 발생전');


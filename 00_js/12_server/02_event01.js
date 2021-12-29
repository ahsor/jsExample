// 이미 정의 되어 있는 exit 이벤트 사용하기 
// process는 console과 같은 전역 객체 

process.on('click', function(){
    console.log('clicked');
    // 브라우저 실행이 아니므로 클릭을 전달할 수 있는 방법이 없음
    /**
     * var btn = document.createElement('<button></button>');
        btn.appendChild('click');
        // 브라우저에 띄우기?
        nodejs에서는 html페이지가 아니므로 즉 브라우저가 아니므로 document 자체를 확인할 수 없음
     */
})


process.on('exit', function(){
    console.log('exit');
})

setTimeout(function(){ 
    console.log('timer 실행완료')
}, 3000);

console.log('timer 실행전');


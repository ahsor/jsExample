const http = require('http');
const server = http.createServer();
const port = 3000;
server.listen( port, 'localhost', 5000,  function(){
    console.log('웹서버 실행 , ', port);
});

server.on('connection', function(socket){
    let addr = socket.address();
    //console.log(`addr.address, addr.port ${socket.address(), socket.address().port}`);
    console.log(`클라이언트 접속 addr.address, addr.port `,addr.address, addr.port);
})

server.on('request', function(req, res){
    console.log('클라이언트 요청 , ')
    //console.dir(req);
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write('<h1>서버 동작 확인</h1>')
})

server.on('close', function(){
    // 출력하려면?
    console.log(`서버 종료`);
})


/*
$node 03_02_server.js
터미널 창에서 서버 실행 후 

브라우저 주소창에 
localhost:3000

git bash에서 
curl localhost:3000 
git은 ctrl+c 하면 결과 출력

터미널 창에서 서버가 요청 받는 것을 확인 할 수 있다. 

*/

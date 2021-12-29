const http = require('http');
const server = http.createServer();
const port = 3000;
server.listen( port,  function(){
    console.log('웹서버 실행');
});

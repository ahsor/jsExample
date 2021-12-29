// 파일명은 크게 상관 없지만 app를 관례상 사용

const express = require('express');
const http = require('http');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(function(req, res, next){
    console.log('미들웨어 호출됨');
    // 2. 서버쪽에서 클라이언트가 보내온 데이터 확인 하기 
    // url을 이용한 get방식의 데이터 전송 후 출력 확인
    // 모바일단말, PC단말이냐의 처리에 따라 달리 처리함 
    
})

const server = http.createServer(app);
server.listen( app.get('port'), function(){
    console.log('서버 실행');
    //터미널에서 node app03.js를 실행 후 
    // 1. 서버실행
})


/*
다음과 같이 실행시 에러는 express모듈이 없다는 것이므로 express설치하면 됨
% node app.js
internal/modules/cjs/loader.js:883
  throw err;
  ^
Error: Cannot find module 'express'
Require stack:
- D:\2021_work\javascript\00_js\13_express\app.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (D:\2021_work\javascript\00_js\13_express\app.js:3:17)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'D:\\2021_work\\javascript\\00_js\\13_express\\app.js' ]
}
*/
/*
npm install express --save
express를 설치하되 --save를 이용하여  package.json에 등록 하라는 뜻
*/

/*
미들웨어는 중간에 요청을 수시로 받을 수 있다. 
요청 path에 따라 다른 함수를 실행하고자 하면 라우터를 사용함
*/
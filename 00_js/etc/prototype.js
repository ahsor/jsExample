Array.prototype.kims = function(){
    console.log('test');
}

var k = new Array();
k.kims();

console.log( __filename );
console.log( __dirname );
console.log( 'argv' , process.argv );
console.dir( process.argv );

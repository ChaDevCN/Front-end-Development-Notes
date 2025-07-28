console.log('start')

function foo(){
    console.log('boo');
}
function bar(){
    console.log('bar');
    foo()
}
console.log('end');

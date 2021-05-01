/*Function
1.Function Declartion
 - one function === one thing
 - function name(param1,param2){실행부....  retunr;}
 - function is object in JS - 프로토타임
 */
test(); // 이와이같이 분리된 상태에서도 hoisting이 가능하다
//브라우저가 런타임에 먼저 선언부로 자리를 이동시켜주는거 - hoisting
function test() {
    console.log('hello wolrd');
}
//test();

/*
2. Parameters
- primitive parameters : pass by value
- object parameters : passed by refrence
*/

function changeName(obj) {
    obj.name = 'apple';
}

const tomato  = {name : 'tomato'};
changeName(tomato);
console.log(tomato);

//3. Default parameters(added in ES6)
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
function showMessage_2(message, from) {
    if(from == undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
function showMessage_3(message, from ='unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('hi');
showMessage_2('hi');
showMessage_3('hi');

//4 . Reset parameters(added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

printAll('Have','a','good','time');

//5. anonymous function
const print = function(){
    console.log('print');
}
print();
const printAgain =print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));
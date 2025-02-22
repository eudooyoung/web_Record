/* 01_immediately-invoked-function-expression(즉시 실행 함수) 
함수 정의와 동시에 즉시 호출되는 함수로 단 한 번만 호출 되며 다시 호출할 수 없다. 

//() 그룹연산자로 감싸야한다. 
*/

// 익명함수. 즉시, 한 번만 실행돼서 이름을 부여하지 않음
(
    function(){
        console.log('익명 즉시 실행 함수는 함수 정의와 동시에 호출');
    }
)();

( // 함수 이름을 작성할 수도 있지만 다시 호출은 불가능
    function hello(name){
        console.log('익명 즉시 실행 함수는 함수 정의와 동시에 호출');
        console.log(`${name} 님 안녕하세요`);
    }
)('두영');

// hello('두영'); 정의되지 않음
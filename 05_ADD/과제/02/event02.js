window.addEventListener("load", function () { // 화면 출력되면 바로 실행
    let moneyBefore = document.getElementById("money-before"); // 원금 출력 창 객체 생성
    let moneyAfter = document.getElementById("money-after"); // 만기 지금 금액 출력 창 객체 생성

    // 이름(name)이 calculator인 form 태그를 특정하여, 글자가 기입(input)되면 실행 되는 함수 설정
    document.querySelector("form[name='calculator']").addEventListener("input", function () {
        moneyBefore.textContent = getMoneyBefore(); // 원금 반환 함수 호출
        moneyAfter.textContent = getMoneyAfter(getMoneyBefore(), getAdptdItrst()); // 만기 지급 금액 반환 함수 호출

    })

    let getMoneyBefore = function () { // 원금 계산 함수
        // 이름(name)이 money인 input 태그 특정하여, 그 value를 가져와서 money에 저장
        let money = document.querySelector("input[name='money']").value;
        return money; // money 출력
    }

    let getAdptdItrst = function () { // 기간에 따른 이자 적용 함수  
        let months = document.querySelector("select[name='months']"); // 이름이 months 인 select 태그 지정
        let monthsValue = months.value; // month select태그의 각 option value 값을 가져옴(배열 형식으로 저장) 
        let interest = document.querySelector("input[name='interest']"); // 연 이자율 값이 적혀있는 위치 지정
        let interestValue = interest.value;  // 이자율 호출
        let adptdIntrst = (monthsValue / 12) * interestValue * 0.01;
        // monthsValue: 단위 기간을 12개월로 나누고, 그 값을 원 이자율에 곱한 뒤 퍼센트로 변환
        return adptdIntrst; // 최종 이자율 반환
    }

    let getMoneyAfter = function (moneyBefore, adptdIntrst) { // 만기 지급 금액 호출 함수, 원금과 최종 이자율을 매개 변수로 갖는다.
        let resultFloat = moneyBefore * (1 + adptdIntrst); // 초기 결과. 실수 값임.
        let result = Math.round(resultFloat); // 반올림하여 정수로 바꿔줌
        console.log(resultFloat); // 초기 결과를 참고용으로 콘솔에 출력
        return result; // 최종 결과 반환
    }

})  
function add() {
    alert('더하기 기능 처리후 결과창')
}
function go() {
    alert('go함수를 누르셨군요.!')
}
function move() {
    alert('move함수를 누르셨군요.!')
}
function 여행하다() {
    alert('여행갈래')
}
function 쉬다() {
    alert('쉴래')
}
function one() {
    for (let i = 0; i < 3; i++) {
        document.write('@@@<br>')
    }
}
function two() {
    let site = prompt('당신이 주로 가는 포털사이트는')
    if (site == 'naver') {
        location.href = 'http://www.naver.com'
    } else if (site == 'daum') {
        location.href = "http://www.daum.net"
    } else {
        location.href = "http://www.google.com"
    }
}
function three() {
    let answer = confirm('여행을 좋아하시나요?')
    if (answer) {
        여행하다()
    } else {
        쉬다()
    }
}
function four() {
    let answer = confirm("당신은 자바 프로그래머인가요?")
    if (answer) {
        alert('훌륭한 웹프로그래머시군요')
    } else {
        alert('다른 언어를 사용하시는군요!')
    }

}

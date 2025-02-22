window.addEventListener("load", function () {

    let add = document.getElementById("add");  // add버튼 객체 생성
    let remove = document.getElementById("remove"); // remove 버튼 객체 생성
    let area1 = document.getElementById("area1");  // area1 div 객체 생성

    area1.style.display = "flex"; // area1 플렉스 적용 
    area1.style.flexWrap = "wrap"; // area1 래핑 적용

    let addDiv = function (color) { // 색깔 div를 추가해주는 함수. 색깔을 매개변수로 받는다.
        let div = document.createElement("div"); // div 생성
        div.style.width = "100px"; // 폭 설정 
        div.style.height = "100px"; // 높이 설정
        div.style.borderStyle = "solid"; // 테두리 스타일 설정
        div.style.borderWidth = "1px";  // 테두리 두께 설정
        div.style.background = color; // 배경색 설정: 매개 변수로 받아온 값 대입.

        area1.appendChild(div); // area1 div밑에 자식 노드로 붙이기.

    }

    let hasChild = function () { // area1에 자식 노드 엘리먼트가 있는지 확인하는 함수
        return area1.childElementCount; // area1의 자식 노드의 갯수를 반환
    }

    add.onclick = function () { // add버튼을 클릭할 때 실행되는 함수
        if (hasChild()) { // 자식 노드가 있을 경우
            // 마지막 자식 노드의 배경 색을 확인하여 빨강이면 노랑, 노랑이면 빨강 div를 추가
            (area1.lastElementChild.style.background) == "red" ? addDiv("yellow") : addDiv("red");
        } else { // 자식 노드가 없을 경우: 처음 추가되는 div는 빨강으로.
            addDiv("red");
        }
    }

    remove.onclick = function () {
        if (hasChild()) { // 자식 노드가 있을 경우에만 마지막 자식 노드 엘리먼트를 삭제.
            area1.removeChild(area1.lastElementChild);
        }
    }

})
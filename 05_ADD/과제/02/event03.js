window.addEventListener("load", function () {
    const focusOn = function () { // 생성된 div 안에 포커스를 맞추기 위한 함수
        document.querySelector(".edit").focus();
    }

    const createArea = function () {
        let edit = document.createElement("textarea"); // 여기서 edit은 "textarea" 태그를 생성해주는 객체
        edit.className = "edit"; // 클래스 이름을 "edit"으로 지정
        view.replaceWith(edit); // 기존 div를 edit과 교체
        focusOn();
        restoreView();
    }

    const restoreView = function () {
        let edit = document.querySelector(".edit");
        let view = document.createElement("div");
        view.className = "view";
        view.id = "view";
        view.value = edit.innerHTML;
        edit.addEventListener ("keypress", function(event) {
            if(event.key === "Enter"){
                edit.replaceWith(view);
            }
        })
        console.log(edit.innerHTML);
    }

    view.addEventListener("click", function () {
        createArea();
        
    })


})
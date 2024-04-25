// 전체 레이아웃 잡고 코딩 하기

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM 완성");

    const btDiv = document.getElementById("btDiv");
    const bt1 = document.createElement("button");
    const bt1Txt = document.createTextNode("버튼11");
    const bt2 = document.createElement("button");
    const bt2Txt = document.createTextNode("버튼21");

    bt1.setAttribute('id', 'bt11');
    bt1.appendChild(bt1Txt);
    btDiv.append(bt1);

    bt2.setAttribute('id', 'bt21'); 
    bt2.appendChild(bt2Txt);
    btDiv.append(bt2);

    let isGreetingDisplayed = false; 
    // 안녕하세요가 표시되는지 여부를 추적하는 변수
    //greetingd = "안녕하세요" 변수 

    bt1.addEventListener('click', () => {
        if (!isGreetingDisplayed) { 
            document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';
            isGreetingDisplayed = true;
        }
    });

    bt2.addEventListener('click', () => {
        if (isGreetingDisplayed) { 
            const greeting = document.querySelector('#msg h1');
            if (greeting) {
                greeting.remove();
                isGreetingDisplayed = false;
            }
        }
    });
});

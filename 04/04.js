document.addEventListener('DOMContentLoaded', function() {
    // 필요한 DOM 노드들을 가져옵니다.
    var diceImage1 = document.getElementById('diceImage1');
    var diceImage2 = document.getElementById('diceImage2');
    var resultDiv = document.getElementById('result');
    var buttons = document.querySelectorAll('#btDiv4 button');

    //const computerNumber1 = parserInt(bt.textContent.slice(0,1));
    //const userNumber = parserInt(bt.textContent.slice(0,1));

    // 버튼에 클릭 이벤트를 추가합니다.
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // 사용자가 선택한 숫자를 가져옵니다.
            var userNumber = parseInt(this.textContent);
            
            // 사용자 이미지 변경
            diceImage2.src = `../04/img/${userNumber}.png`;

            // 컴퓨터가 랜덤하게 숫자를 선택합니다.
            var computerNumber1 = Math.floor(Math.random() * 6) + 1;
            var computerNumber2 = Math.floor(Math.random() * 6) + 1;

            // 컴퓨터 이미지 변경
            diceImage1.src = `../04/img/${computerNumber1}.png`;

            // 결과 계산
            var resultText;
            if (userNumber === computerNumber1 && userNumber === computerNumber2) {
                resultText = "맞음";
            } else {
                resultText = "틀림";
            }

            // 결과를 화면에 출력합니다.
            resultDiv.textContent = resultText;

        });
    });
});
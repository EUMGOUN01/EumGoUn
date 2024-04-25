
// 참고 코드 https://angielee.tistory.com/38 
// 랜덤한 숫자에 해당하는 주사위 이미지를 표시

// 난수 사용 https://hianna.tistory.com/454


//함수 선언
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1부터 6까지의 랜덤 숫자 생성
    const diceImage = document.querySelector('#btDiv img');

    diceImage.src = `../03/img/${randomNumber}.png`;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("주사위 게임 시작");

    const button = document.querySelector('#btDiv button'); //버튼을 클릭하면 rollDice 실행.
    button.addEventListener('click', () => {
        rollDice();
    });
});
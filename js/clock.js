const clock = document.querySelector("h2#clock");

// interval이란 매 초마다 같이 실행할것

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  // num이라 그냥은 사용 불가
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

//눌러보면 알겠지만 천번째 인자는 실행하려는 함수,
//두번째 인자는 함수 간격을 몇 ms로 할지

//5000ms마다 되므로 5초마다 되는 것

getClock();
// setTimeout(getTime, 1000);
setInterval(getClock, 1000);
//한번만 대기 시간을 거친 후
//padStart(2, "0") -> padEnd 와 다른점은 s는 앞에 e는 뒤에 문자 추가

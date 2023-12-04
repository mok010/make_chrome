const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greaating = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 관습같은 건데 string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
  event.preventDefault();
  // 브라우저의 기본동작을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greaating.innerText = `Hello ${username}!`;
  greaating.classList.remove(HIDDEN_CLASSNAME);
}
// onLoginSubmit()와의 차이는 ()를 넣으면 바로 실행되고 위의 경우 submit이라는 이벤크가 발생한 경우 브라우저가 해당 함술를  실행을 시켜준다는 점

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

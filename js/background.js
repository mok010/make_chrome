const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//여러 html 태그를 만드는 함수.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//appendChild는 body에 html을 추가하는 것
//append는 뒤에, prepend는 앞에

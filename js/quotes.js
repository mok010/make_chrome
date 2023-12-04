const quotes = [
  {
    quote:
      "가장 만족스러웠던 날들을 생각해보라. 그날은 아무것도 하지 않고 편히 쉬가만 한 날이 아니라, 할 일이 태산이었는데도 결국은 그것을 모두 해낸 날이다.",
    author: "Margaret Thatcher",
  },
  {
    quote: "오늘보다 젊은 나는 앞으로 절대 없다",
    author: "violet",
  },
  {
    quote: "의욕보다 행동이 먼저다",
    author: "feeling good",
  },
  {
    quote:
      "후회하지 않는 인생을 살기 위해서 내가 자꾸 되뇌는 것은 이것이다. 나의 시간과 에너지는 한정되어 있으니 가치 없는 곳에 쓰지 말 것, 오늘의 나를 행복하게 하는 데 최선을 다할 것.",
    author: "죽음에 대하여",
  },
  {
    quote:
      "하고싶은 것에 잡아먹히지 않는 사람이 되자, 무서워하지 않는다면 뭐든 배울 수 있다.",
    author: "violet",
  },
  {
    quote:
      "문밖에 나설 떄마다 턱을 당기고, 고개를 들고, 숨을 크게 들이마셔라. 햇살을 만끽하고, 미소로 친구들을 환대하고, 매번 진심릏 담아 악수하라. 오해받는 것을 두려워하지 말고, 적에 대해 생각하느라 시간을 낭비하지 마라. 항상 자기가 하고 싶은 일에 대해 생각하라, 그리고 망설이지 말고 목표를 향해 전진하라.",
    author: "인간관계론",
  },
  {
    quote:
      "뒤에서 수군대는 이들을 걱정하지말자. 그들이 뒤'에서 말하는 건 에 '뒤'에 있을 수밖에 없는 거니까",
    author: "미상",
  },
  {
    quote: "난 내 가치를 알아",
    author: "violet",
  },
  {
    quote: "내가 최고다",
    author: "violet",
  },
  {
    quote: "매끄러운 바다는 노련한 뱃사람을 탄생시킬 수 없다",
    author: "프랭클린 루즈멜트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// math.round () 반올림
// masth.ceil() 그냥 소수 올리기
//math.floor() 그냥 소수 내리기

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

# 학습 정리
### 📔 innerText vs textContent
- 참고링크 목록
    1. [innerText와 textContent 차이 알아보기](https://webisfree.com/2020-03-07/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-textcontent-%EA%B7%B8%EB%A6%AC%EA%B3%A0-innertext-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
    2. [[Javascript] innerHTML, innerText, textContent 차이점](https://hianna.tistory.com/483)
   
- 요약
  - innerText 는 사용자에게 보여지는 그대로를 복사
  - textContent는 HTML 상에 입력되어진 그대로를 출력
    - 여러개의 공백을 그대로 표시하고 숨겨진 텍스트 또한 출력
  
### 📔 [CSS] nth-child
- `:nth-child` 만으로도 자식중에서 선택가능
  - 만약 `li:nth-child` 와 같은 식으로 쓴다면 조건을 만족하는 자식들중 `li` 인 요소면 출력하게 됨


### 📔 [JS] Array vs NodeList
- 참고링크 목록 
    1. [Difference between a NodeList and an Array in JavaScript](https://attacomsian.com/blog/javascript-nodelist-vs-array)

### 📔 namespace
- 참고링크 목록 
    1. [XML 네임스페이스](http://www.tcpschool.com/xml/xml_basic_namespace)

- 요약
XML문서에서 쓰는 태그의 사전
  <br>-> XML 문서는 여러가지 종류가 있을 수 있고 각 데이터의 성격에 따라 같은 태그더라도 다른 의미로 쓰일 수 있기 때문에 한가지 종류에 대해 namespace를 마련해 놓은 것

### 📔 javascript Event
- 참고링크 목록 
    1. [JavaScript - 이벤트(Event), 이벤트의 종류, 이벤트 연결](https://jenny-daru.tistory.com/17)
    2. [onclick vs addEventListener](https://cbw1030.tistory.com/302)

### 📔 Event 버블링과 캡쳐링, 둘을 막는 방법
- 참고링크 목록 
    1. [JavaScript - 이벤트 버블링과 캡처링, 둘의 방지법](https://cbw1030.tistory.com/301?category=1142019)
    2. [버블링과 캡처링](https://ko.javascript.info/bubbling-and-capturing)

### 📔 개발자 도구의 No throttling
- 참고링크 목록 
    1. [개발자 도구 > Network > 'No throttling'의 의미?](https://unit-15.tistory.com/85)

### 📔 ClassList toggle multiple Class
- 참고링크 목록 
    1. [Vanilla JavaScript: Is there a way to toggle multiple CSS-classes in one statement?](https://stackoverflow.com/questions/36544762/vanilla-javascript-is-there-a-way-to-toggle-multiple-css-classes-in-one-stateme)

- 요약
  - 여러 방법이 있지만 `map()` 을 쓰자!

### 📔 `<form>`
- 참고링크 목록 
    1. [HTML form 의 이해](https://www.nextree.co.kr/p8428/)

### 📔 Event 객체
- 참고링크 목록 
    1. [Event Object(이벤트 객체)](https://cheonmro.github.io/2018/09/04/event-object/)
- submitEventObject 예시 
![submitEventObject](./image/memo/submitEventObject.png)

### 📔 display:none 과 transition
- 참고링크 목록 
    1. [display none이 transition이 안먹히는 이유](https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0)
    2. [css display none 애니메이션  오류 수정하기](https://songsong.dev/entry/css-display-none-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0)
- 요약
  1. transition은 before 와 after 가 수치적인 값으로 되어 있어야 하는데 display:none 은 아예 수치가 없기 때문에 transition을 할 수가 없음.
  2. display 이외에 수치적용을 할 수 있는 값을 주어서 display는 바꾸되 동시에 opacitiy와 같은 수치도 바뀌는 모습을 보여주는 방식으로 해결할 수 있다.
  3. transition이 비교할 초기값이 없어 애니메이션이 불가능 한 반면에 키프레임 애니메이션은 초기값을 유저가 직접 할당하고 실행시키기 때문에 동작이 가능하다. (1번링크)
    

### 📔 display:none 과 transition
- 참고링크 목록 
    1. [display: none에 애니메이션 추가하기](https://uxdev.org/entry/display-none%EC%97%90-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)
    2. [CSS Animation 속성](https://brunch.co.kr/@99-life/3)
   
### 📔 API
- 참고링크 목록 
    1. [API란 무엇인가요?](https://aws.amazon.com/ko/what-is/api/)

### 📔 localStorage API
- 참고링크 목록 
    1. [`Window.localStorage`](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
    2. [localStorage와 sessionStorage](https://ko.javascript.info/localstorage)
    3. [로컬스토리지의 데이터 영속성](https://codepathfinder.com/entry/javascript-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80localStorage-sessionStorage-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95)
    4. [cookie vs localStorage](https://blog.shahednasser.com/localstorage-vs-cookies-whats-the-difference/)

### 📔 web에서 로컬파일 읽기
- 참고링크 목록 
    1. [How to read a local text file in the browser?](https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser)

### 📔 `XMLHttpRequest()` 사용법
- 참고링크 목록 
    1. [Javascript - XMLHttpRequest 사용하기](https://7942yongdae.tistory.com/67)

- 서버와 데이터를 주고받기 위해 사용하는 Web API

### 📔 `map()` 사용법
- 참고링크 목록 
    1. [[Javascript] map함수](https://velog.io/@daybreak/Javascript-map%ED%95%A8%EC%88%98)

### 📔 Javascript 모듈링
- 참고링크 목록 
    1. [[JavaScript] Web, Node.js다른 JS파일에서 요소 가져오기 / 모듈화하기 및 원리](https://velog.io/@grinding_hannah/JavaScript-Import-Export%EB%A1%9C-%EB%AA%A8%EB%93%88%ED%99%94%ED%95%98%EA%B8%B0)

### 📔 [Javascript] 등록된 이벤트 리스너 확인
- 참고링크 목록 
    1. [EventListner 확인](https://coffeeandcakeandnewjeong.tistory.com/84)

- 요약
`getEventListeners()` 로 확인
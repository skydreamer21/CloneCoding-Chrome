## 🔖 #4.2 [Events]
### ✔️ `submit` Event를 감지할 수 있다.
### ✔️ eventHandler 함수를 실행시킬 때 브라우저에서는 이벤트 실행시 이벤트 객체를 생성해서 핸들러 함수의 파라미터로 전달해준다.
### ✔️ `event.preventDefault()` 함수는 이벤트 실행시 기본적으로 등록되어 실행되는 동작을 막아준다.
- ex. `submit` 시 브라우저가 새로고침 되는 동작
---
## 🔖 #4.3 [Events part Two]
### ✔️ `alert` 는 실행되는 모든 것을 멈춘다.
- `<a>` 태그의 경우 링크로 가는 것을 멈추고 `alert`를 발생시킨 후 확인 버튼을 누르면 기본 동작인 해당 링크로 이동한다.
### ✔️ `click` 이벤트로 전달되는 이벤트 객체는 `MouseEvent`
---
## 🔖 #4.4 [Getting Username]
### **🎯 username 을 받아와서 form 칸을 없애고 username과 함께 인사를 출력한다.**
---
## 🔖 #4.5 [Saving Username]
### **🎯 username 을 저장해서 다음에 왔을 때도 또 입력을 받지 않도록 한다. -> Remember!
---
## 🔖 #5.1 [Timeouts and Dates]
### **🎯 `Interval`  `setTimeout` 과 `Date` 를 활용해 시계 표시
---
## 🔖 #5.2 [PadStart]
### **🎯 `padStart` 를 통해 시계 항상 2자리로 표시
---
## 🔖 #6.0 [Quotes] - Today's Quote
### **🎯 quote와 author가 있는 Object의 배열을 가지고 `Math.random()`을 이용해 랜덤한 명언 보여주기
---
## 🔖 #6.1 [Background]
### **🎯 랜덤한 배경화면 설정
- Javascript 에서 이미지를 만들고 html에 추가하기
---
## 🔖 #7.0-7.1 todoList 기초 틀 만들기
### **🎯 `<form>` 에 입력했을 때 todoList가 하나씩 늘어나는 기능
- 앞서 했던 내용을 토대로 만듬 
---
## 🔖 #7.2 [Deletimg ToDos]
### **🎯 버튼을 눌렀을 때 todoList 제거하는 기능 
---
## 🔖 #7.4 [Loading ToDos part One]
### **🎯 `localStorage`에서 todos 불러오기
- 불러온 각각의 아이템들에 대해서 함수 실행 구조 만들기
- localStorage가 비어있다면..?
---
## 🔖 #7.5 [Loading ToDos part Two]
### **🎯 `localStorage`에서 todos 불러오기
- `localStorage`에 이미 저장된 todoList를 화면에 표시
- 기능을 구현하고 제대로 동작하는지 확인 (삭제 과정 제외)

### 내가 추가한 기능
- 로그인이 되어있지 않을 시 todoList 표시하지 않음
---
## 🔖 #7.6 [Deleteing ToDos part One]
### **🎯 `localStorage`에 todo를 저장할 때, 고유 id를 추가해서 저장하기
---
## 🔖 #7.7 [Deleteing ToDos part Two]
### **🎯 `filter` 함수를 사용해서 todo 배열에서 원하는 요소 지우기
---
## 🔖 #7.8 [Deleteing ToDos part Three]
### **🎯 7.6, 7.7 을 활용해서 Delete 기능 완성

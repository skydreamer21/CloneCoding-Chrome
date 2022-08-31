# Explain in My Language what I understand in the lecture

## 🔖 [Why JS]
- history
    - 1995.12 -> JS 10일만에 완성
    - Netscape -> 그 전 브라우저 (Only html and css) 

- https://threejs.org/
    - 자바스크립트 코드에 3D 적으로 도움을 주는 사이트

- React Native 
    - JS로 안드로이드, ios 앱을 앱을 만들 수 있는 프레임워크
    - (추가 설명 필요)

- electron
    - JS로 데스크톱 앱을 만들 수 있는 프레임워크
    - VScode, FaceBook Messenger, twitch, slack, figma 등이 electron으로 만들어졌다.

- `socket.io`
    - JS로 실시간 무언가를 만들고 싶을 때!

- `ml5.js`
    - JS 머신러닝

---

## 🔖 [Variables]
  - 파이썬은 변수 이름 붙이는 convention이 스네이크 케이스
  - JS는 카멜케이스
  
---

## 🔖 [Searching For Elements]
-  `getElementById` `getElementByClass` `getElementByTag` 
        -> 해당 조건에 맞는 요소들을 배열로 반환
    
- `querySelector` 
        -> css 형식으로 검색 가능 & 첫번째 것만 반환
    
- `querySelectorAll`
        -> css 형식으로 검색해서 조건에 맞는 모든 것을 NodeList로 반환
    
### 💡 **결론**
    `querySelector` 또는 `querySeletorAll` 만 쓴다

--- 

## 🔖 [Events]
### `document` 의 존재 이유
-> **HTML** 에서 JS파일을 load 했기 때문
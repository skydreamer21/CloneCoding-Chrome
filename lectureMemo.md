# Explain in My Language what I understand in the lecture

## ๐ [Why JS]
- history
    - 1995.12 -> JS 10์ผ๋ง์ ์์ฑ
    - Netscape -> ๊ทธ ์  ๋ธ๋ผ์ฐ์  (Only html and css) 

- https://threejs.org/
    - ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋์ 3D ์ ์ผ๋ก ๋์์ ์ฃผ๋ ์ฌ์ดํธ

- React Native 
    - JS๋ก ์๋๋ก์ด๋, ios ์ฑ์ ์ฑ์ ๋ง๋ค ์ ์๋ ํ๋ ์์ํฌ
    - (์ถ๊ฐ ์ค๋ช ํ์)

- electron
    - JS๋ก ๋ฐ์คํฌํฑ ์ฑ์ ๋ง๋ค ์ ์๋ ํ๋ ์์ํฌ
    - VScode, FaceBook Messenger, twitch, slack, figma ๋ฑ์ด electron์ผ๋ก ๋ง๋ค์ด์ก๋ค.

- `socket.io`
    - JS๋ก ์ค์๊ฐ ๋ฌด์ธ๊ฐ๋ฅผ ๋ง๋ค๊ณ  ์ถ์ ๋!

- `ml5.js`
    - JS ๋จธ์ ๋ฌ๋

---

## ๐ [Variables]
  - ํ์ด์ฌ์ ๋ณ์ ์ด๋ฆ ๋ถ์ด๋ convention์ด ์ค๋ค์ดํฌ ์ผ์ด์ค
  - JS๋ ์นด๋ฉ์ผ์ด์ค
  
---

## ๐ [Searching For Elements]
-  `getElementById` `getElementByClass` `getElementByTag` 
        -> ํด๋น ์กฐ๊ฑด์ ๋ง๋ ์์๋ค์ ๋ฐฐ์ด๋ก ๋ฐํ
    
- `querySelector` 
        -> css ํ์์ผ๋ก ๊ฒ์ ๊ฐ๋ฅ & ์ฒซ๋ฒ์งธ ๊ฒ๋ง ๋ฐํ
    
- `querySelectorAll`
        -> css ํ์์ผ๋ก ๊ฒ์ํด์ ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ๊ฒ์ NodeList๋ก ๋ฐํ
    
### ๐ก **๊ฒฐ๋ก **
    `querySelector` ๋๋ `querySeletorAll` ๋ง ์ด๋ค

--- 

## ๐ [Events]
### โ๏ธ  `document` ์ ์กด์ฌ ์ด์ 
-> **HTML** ์์ JSํ์ผ์ load ํ๊ธฐ ๋๋ฌธ
<br><br>


### โ๏ธ `addEventListener` ์ ์ธ ์ ์๋ event
-> `console.dir` ์์ ์์ `on` ์ด ๋ถ์ ํ๋กํผํฐ๊ฐ ์ด๋ฒคํธ์์
-> `addEventListener` ์ ์ธ๋๋ `on`์ ๋นผ๊ณ  ์ฐ๋ฉด ๋๋ค.

### โ๏ธ `document` ๋ก ์ ๊ทผํ  ์ ์๋ ์์
- `doucument.head`
- `document.body`
- `document.title`
โ `document.meta` ๋ ์ ๊ทผ๋ถ๊ฐ.. ?
<br><br>
---
<br>

## ๐ [CSS in Javascript part Two]
### โ๏ธ JS์์ CSS์์๋ฅผ ๊ฑด๋๋ฆฌ๋ ์ผ์? 
- [๋ฐฉ๋ฒ1] ์ํ๋ CSS๊ฐ ์๋ ํด๋์ค๋ฅผ ์ ๋ฌํ๊ธฐ!
<br><br>
---
<br>
  
## ๐ #4.0 [Input Values]
### โ๏ธ querySelector๋ฅผ ํตํ ๊ฒ์
- document ๋๋ ํ๋์ element๋ฅผ ํตํด์ ๊ฒ์ ๊ฐ๋ฅ
```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySeletor("input");
```

### โ๏ธ [HTML] input ์ด ํ  ์ ์๋ ์ผ
- HTML์ `<input>`์์ ํ  ์ ์๋ ์ผ์ ๊ต์ฅํ ๋ง๋ค.
  - `required` `maxlength` ๋ฑ๋ฑ
  <br>=> ์ ๋ฆฌ๊ฐ ํ์ํ๋ค!!

### โ๏ธ [HTML] form
- `<form>` ์์ ์๋ `<input>` ํ๊ทธ ์ฌ์ผ ์ ํจ์ฑ ๊ฒ์ฌ๋ฅผ ํ  ์์๋ค.
- `<input>` ์์ ์๋ `<button>`์ด๋ `<input>` type์ด `submit` ์ธ ๋ฒํผ์ ๋๋ฅด๋ฉด ์์ฑํ `form` ์ด submit๋๋ค.
<br><br>
---
<br>

## ๐ #4.2 [Events]
### โ๏ธ `addEventListener`
- event๊ฐ ๋ฐ์ํ  ๋ ๋ฑ๋ก๋ handler ํจ์๋ฅผ ํธ์ถํ๋๋ฐ **ํ๋ผ๋ฏธํฐ๋ก ์ ๋ณด๋ฅผ ์ ๋ฌํ ์ํ**๋ก ํธ์ถํ๋ค!
  - ๊ทธ ์ ๋ณด๋ ์ผ์ด๋ Event์ ๋ํ ์ค์ํ ์ ๋ณด๋ค์ ๋ด๊ณ  ์๋ค. 

### โ๏ธ `EventInstance.preventDefault()`
- ์ด๋ฒคํธ๊ฐ ์ผ์ด๋ฌ์ ๋, Default๋ก ์คํ๋๋ ๋์์ ๋ง์์ค๋ค.

## ๐ #4.5 [Saving Username]
### โ๏ธ `localStorage`
- ๋์ค์ ๊ฐ์ ธ๋ค ์ธ ์ ์๋๋ก ๋ธ๋ผ์ฐ์ ์ ์ ์ฅํ  ์ ์๊ฒ ํด์ค๋ค.
- ๊ฒฝ๋ก application -> Local Storage
    ![goToLocalStorage](./image/memo/application_LocalStorage.png)
---
## ๐ #6.0 [Background]
### โ๏ธ `createElement()`
- html ์์๋ฅผ ๋ง๋ค ์ ์๋ ํจ์
---
## ๐ #8.0 [Geolocation]
### โ๏ธ `getCurrentPosition()`
- success ์ฝ๋ฐฑ ํจ์ : GeolocationPosition ๊ฐ์ฒด๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์
- error ์ฝ๋ฐฑ ํจ์ : GeolocationPositionError ๊ฐ์ฒด๋ฅผ ํ๋ผ๋ฏธํฐ๋ก ๋ฐ์
- ๋ธ๋ผ์ฐ์  ์ค์  ์ค ์์น ์ค์ ์ ๋ง์๋ค๋ฉด error ํจ์ ์คํ (์ฌ์ฉ์๊ฐ ์ฐจ๋จ ๋ฒํผ ๋๋ฌ๋ error ํจ์ ์คํ)
    -> ํ๋ฒ ์ฐจ๋จํ๋ค๋ฉด ๊ทธ ์ ๋ณด๊ฐ ์ ์ฅ๋์ด์ ํฌ๋กฌ์ค์ ์์ ๋ฐ๊พธ์ง ์๋ ํ ๋ค์ ํ์ฉํ ๊บผ๋๊ณ  ๋ฌผ์ด๋ณด์ง ์์
---
## ๐ #8.1 [Weather API]
### โ๏ธ API๋ฅผ ํ์ฉํด ๋ ์จ ์ ๋ณด๋ฅผ ๋ฐ์์์ ํ๋ฉด์ ํ์
- API๋ฅผ ๋ฐ์์ค๋ ๊ณผ์ ์์ `fetch()` ์ด์ฉ
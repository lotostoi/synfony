const c="/build/assets/javascript-8dac5379.svg";function r(e){let t=0;const o=a=>{t=a,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${c}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;r(document.querySelector("#counter"));

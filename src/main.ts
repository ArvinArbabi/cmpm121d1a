const app = document.getElementById("app")!;
app.innerHTML = `
  <h1>CMPM 121 – D1</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
  <p style="opacity:.7">Edit <code>src/main.ts</code> and save to see hot reload.</p>
`;

let counter = 0;
const counterEl = document.getElementById("counter")!;
document.getElementById("increment")!.addEventListener("click", () => {
  counter += 1;
  counterEl.textContent = String(counter);
  console.log("Counter is now", counter);
});

// import * as wasm from "wasm-game";
// wasm.greet("psj");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0)

// Promise.resolve("promise").then(console.log)

// import { Universe } from 'wasm-game';
// import S from 'hello-wasm-pack';
// console.log(S);
import { Universe } from '../pkg/wasm_game';
console.dir(Universe.new);

const pre = document.getElementById("game-of-life-canvas")
const universe = Universe.new();

function renderLoop() {
    pre.textContent = universe.render();
    universe.tick();
    window.requestAnimationFrame(renderLoop)
}

window.requestAnimationFrame(renderLoop)

"use strict";
// console.log('hi there!!!!')
// console.log('changed')
// console.log('watch!!!')
// console.log('auto update in js?')
// console.log('browswe sync updating?')
// console.log("live server?")
const btn = document.getElementById('btn');
const input = document.getElementById("todo");
// above we need to cast it using the 'as' keyword
// console.log(btn)
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert(input.value);
    input.value = "";
});

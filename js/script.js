console.log("Hello World");

let supriseText = document.querySelector(".js-supriseText");

let suprise = document.querySelector(".js-suprise");

suprise.addEventListener("click", () => {
    supriseText.innerText = supriseText.innerText === ":) :) :)"
        ? "Zapraszamy na Maltę!"
        : ":) :) :)";
});

let button = document.querySelector(".js-button")

button.addEventListener("click", () => {
    if (button.innerText === "Spodobała Ci się Malta?") {
        button.innerText = "Zarezerwuj lot już teraz!";
    } else {
        button.innerText = "Spodobała Ci się Malta?";
    }
})

let changeStyle = document.querySelector(".js-changeStyle")
let box = document.querySelector(".js-wrapper");
let themeName = document.querySelector(".js-themeName")

changeStyle.addEventListener("click", () => {
    box.classList.toggle("navigation__changeStyle--dark");

    if (box.classList.contains("navigation__changeStyle--dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }

})
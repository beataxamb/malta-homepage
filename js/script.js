{
    const welcome = () => {
        console.log("Hello World!!!");
    }

    const toggleBackground = () => {
        const box = document.querySelector(".js-wrapper");
        const themeName = document.querySelector(".js-themeName");

        box.classList.toggle("navigation__changeStyle--dark");
        if (box.classList.contains("navigation__changeStyle--dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    };

    const toggleText = () => {
        const supriseText = document.querySelector(".js-supriseText");

        supriseText.innerText = supriseText.innerText === ":) :) :)"
            ? "Zapraszamy na Maltę!"
            : ":) :) :)";
    };

    const buttonToggleText = () => {
        const button = document.querySelector(".js-button");

        if (button.innerText === "Spodobała Ci się Malta?") {
            button.innerText = "Zarezerwuj lot już teraz!";
        } else {
            button.innerText = "Spodobała Ci się Malta?";
        }
    };

    const init = () => {
        const changeStyle = document.querySelector(".js-changeStyle");
        const suprise = document.querySelector(".js-suprise");
        const button = document.querySelector(".js-button");

        changeStyle.addEventListener("click", toggleBackground);
        suprise.addEventListener("click", toggleText);
        button.addEventListener("click", buttonToggleText);
        
        welcome();
    };

    init();
}
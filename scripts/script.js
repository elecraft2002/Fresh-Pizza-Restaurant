class Buttons {
    constructor() {
        this.button = document.getElementsByClassName("button");
    }
    asign() {
        for (let i = 0; i < this.button.length; i++) {
            const element = this.button[i];
            element.addEventListener("click", this.open)
        }
    }
    open() {
        document.querySelector("#glfButton0").click()
    }
}
let buttons = new Buttons;
buttons.asign()
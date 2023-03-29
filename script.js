const backgroundBox = document.querySelector(".background-box");
const colorInput = document.querySelector(".color input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateColor = (isRandom) => {
    if(isRandom) {
        colorInput.value = getRandomColor();
    }
    const color = `${colorInput.value}`;
    backgroundBox.style.background = colorInput.value;
    textarea.value = `background: ${color};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
}

colorInput.addEventListener("input", () => generateColor(false));
refreshBtn.addEventListener("click", () => generateColor(true));
copyBtn.addEventListener("click", copyCode);
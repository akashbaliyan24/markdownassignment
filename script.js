const inputField = document.getElementById("markdown-input");
const previewArea = document.getElementById("preview");
const clearBtn = document.getElementById("clear-btn");

inputField.addEventListener("input",()=>{
    previewArea.innerHTML = markdown.toHTML(inputField.value);
});

clearBtn.addEventListener("click",()=>{
    inputField.value = "";
    previewArea.innerHTML = "";
});


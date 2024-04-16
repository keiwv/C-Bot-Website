let isConnected = false;

function concatenarYCambiar() {
    let src = "https://webchat.botframework.com/embed/C-Bot-Testing-bot?s=";
    const iframe = document.getElementById("iframe-input");
    const valorTextarea = document.getElementById("user-key").value;
    if (valorTextarea != "") {
        let textConcatenado = src + valorTextarea;
        iframe.src = textConcatenado;
        enableIframe();
        disableInsertText();
        isConnected = true;
        desactivateClearBackground();
    }
}

function desconectarBot() {
    if (isConnected) {
        let src = "https://webchat.botframework.com/embed/C-Bot-Testing-bot?s=";
        const valorTextarea = document.getElementById("user-key").value;
        const iframe = document.getElementById("iframe-input");
        iframe.src = "";
        document.getElementById("user-key").value = "";
        isConnected = false;
        desactivarIframe();
        enableInsertText();
        activateClearBackground();
    }
}

function desactivarIframe() {
    const iframe = document.getElementById("iframe-input");
    iframe.classList.add("disabled");
}

function enableIframe() {
    const iframe = document.getElementById("iframe-input");
    iframe.classList.remove("disabled");
}

function enableInsertText() {
    const text = document.getElementById("insert-key-text");

    text.classList.add("enabled");
    text.classList.remove("disabled");
}

function disableInsertText() {
    const text = document.getElementById("insert-key-text");
    text.classList.add("disabled");
    text.classList.remove("enabled");
}

function activateClearBackground() {
    const mainBody = document.getElementById("main-body");

    mainBody.classList.remove("main-body-activated");
}

function desactivateClearBackground() {
    const mainBody = document.getElementById("main-body");
    mainBody.classList.add("main-body-activated");
}

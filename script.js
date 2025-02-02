document.addEventListener("DOMContentLoaded", () => {
    const editor = document.querySelector("py-editor");
    const output = document.querySelector("py-repl");
    const runButton = document.querySelector("button");

    runButton.addEventListener("click", () => {
        let code = editor.getCode();  // Editördeki kodu al
        output.innerHTML = "";  // Önceki çıktıyı temizle

        let scriptTag = document.createElement("py-script");
        scriptTag.textContent = code;
        document.body.appendChild(scriptTag);
    });
});

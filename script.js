document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach(codeBlock => {
    const pre = codeBlock.parentElement;

    // Create the copy button
    const button = document.createElement("button");
    button.className = "copy-block-btn";
    button.innerHTML = "📋";

    // Append button to the <pre>
    pre.appendChild(button);

    // Copy full code block text
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        button.innerHTML = "✅";
        setTimeout(() => {
          button.innerHTML = "📋";
        }, 1500);
      });
    });
  });
});

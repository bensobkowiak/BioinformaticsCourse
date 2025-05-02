document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach(codeBlock => {
    const pre = codeBlock.parentElement;

    // Create the copy button
    const button = document.createElement("button");
    button.className = "copy-block-btn";
    button.innerHTML = "📋"; // or use an SVG

    // Insert the button into the <pre>
    pre.appendChild(button);

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerHTML = "✅";
        setTimeout(() => {
          button.innerHTML = "📋";
        }, 1500);
      });
    });
  });
});

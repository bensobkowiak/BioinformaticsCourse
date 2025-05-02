document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach(codeBlock => {
    const pre = codeBlock.parentElement;

    // Create and style the copy button
    const button = document.createElement("button");
    button.className = "copy-block-btn";
    button.innerHTML = "📋"; // GitHub-style clipboard icon

    pre.insertBefore(button, codeBlock);

    button.addEventListener("click", () => {
      const text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = "✅";
        setTimeout(() => button.innerHTML = "📋", 1500);
      });
    });
  });
});

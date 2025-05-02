document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach(codeBlock => {
    const pre = codeBlock.parentElement;

    // Prevent duplicate buttons
    if (pre.querySelector(".copy-block-btn")) return;

    // Create the copy button
    const button = document.createElement("button");
    button.className = "copy-block-btn";
    button.innerHTML = "📋";

    // Insert the button into the <pre> (before <code>)
    pre.insertBefore(button, codeBlock);

    // Set up click handler
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

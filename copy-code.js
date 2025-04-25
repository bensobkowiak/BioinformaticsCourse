document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const lines = codeBlock.innerText.split('\n');
    codeBlock.innerHTML = ''; // Clear original code

    lines.forEach((lineText, idx) => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'code-line';

      const codeSpan = document.createElement('span');
      codeSpan.textContent = lineText;

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-line-btn';
      copyBtn.textContent = '📋'; // small clipboard icon
      copyBtn.title = 'Copy this line';

      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(lineText).then(() => {
          copyBtn.textContent = '✅';
          setTimeout(() => copyBtn.textContent = '📋', 1000);
        });
      });

      lineDiv.appendChild(codeSpan);
      lineDiv.appendChild(copyBtn);
      codeBlock.appendChild(lineDiv);
    });
  });
});

const p = document.getElementById('hello-world');
const button = document.getElementById('button');

// chrome.action.disable();
button.addEventListener('click', () => {
  p.style.color = 'red';
  chrome.runtime.sendMessage({ message: "hello from action popup" });
});

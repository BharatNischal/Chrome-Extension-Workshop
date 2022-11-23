const p = document.getElementById('hello-world');
const button = document.getElementById('button');

// chrome.action.disable();
button.addEventListener('click', () => {
  p.style.color = 'red';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "hello from action popup" });
  });
});

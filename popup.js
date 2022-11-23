const p = document.getElementById('hello-world');
const button = document.getElementById('button');
const countEl = document.getElementById('count');
let count = 0;

chrome.storage.sync.get(['count'], function(res) {
  count = res.count || 0;
  countEl.textContent = count;
});


// chrome.action.disable();
button.addEventListener('click', () => {
  count++;
  chrome.storage.sync.set({ count }, function() {
    countEl.textContent = count;
  });
});

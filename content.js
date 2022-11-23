const h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
  h1.style.color = 'red';
});

// Cross communication
chrome.runtime.sendMessage({ message: "hello" }, function(response) {
  console.log(response);
});

// Listen for messages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(
      sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension"
    );
    console.log(request);
    // We can send response
    sendResponse({ message: "Hi back" });
  }
);


const contextMenuItem = {
  id: "sampleContextMenu",
  title: "Sample Context Menu",
  contexts: ["selection"]
}


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener((clickData)=>{
  if(clickData.menuItemId === contextMenuItem.id){
    console.log(clickData.selectionText);
  }
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

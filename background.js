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

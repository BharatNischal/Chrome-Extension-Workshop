const contextMenuItem = {
  id: "sampleContextMenu",
  title: "Add to database",
  contexts: ["selection"]
}


chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(contextMenuItem);
});


chrome.contextMenus.onClicked.addListener((clickData, tab) => {
  if(clickData.menuItemId == contextMenuItem.id && clickData.selectionText){
    const data = {
      title: tab.title,
      url: tab.url,
      selection: clickData.selectionText
    };
    // Change your API endpoint according to your backend
    fetch('http://localhost:8080/api/bookmark', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message))
  }
})

# Chrome Extension Workshop

Chrome extensions enhance the browsing experience by adding features and functionality to the Chrome browser. Most web developer think that creating extensions are difficult task but you only need to know about HTML, CSS and Javascript to create a extension

 
## Code Distribution

The code in this repo is multiple branches and can be consumed in following sequence.

 1. [**Step-1-manifest**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-1-manifest): This branch create for the manifest file which is the heart of any chrome extension. An extension [manifest](https://developer.chrome.com/docs/extensions/mv3/manifest/) gives the browser information about the extension, such as the most important files and the capabilities the extension might use. The extension platform features change when there's a new [manifest version](https://developer.chrome.com/docs/extensions/mv3/manifest/manifest_version/).
 2. [**Step-2-action-api**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-2-action-api): You can use the chrome.action API to control the toolbar button for your extension in Chrome's UI. In order to use the chrome.action API, you need to include the action key in your [manifest file](https://developer.chrome.com/docs/extensions/mv3/manifest/).
 3. [**Step-3-service-worker**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-3-service-worker): Extensions are event-based programs used to modify or enhance the Chrome browsing experience. Events are browser triggers, such as navigating to a new page, removing a bookmark, or closing a tab. Extensions monitor these events using script in their background. This script is known as service worker script.
 4. [**Step-4-content-scripts**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-4-content-scripts): Content scripts allow extensions to inject logic into a page in order to read and modify its contents. A content script contains JavaScript that executes in the context of a page that has been loaded into the browser.
 
 5. [**Step-5-messaging**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-5-messaging): Communication between extensions and their content scripts works by using message passing. Either side can listen for messages sent from the other end, and respond on the same channel.
 6. [**Step-6-storage**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-6-storage): This API has been optimized to meet the specific storage needs of extensions. It provides the same storage capabilities as the [localStorage API](https://developer.mozilla.org/docs/Web/API/Window/localStorage) with minor differences.
 7. [**Step-7-bookmark-extension**](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-7-bookmark-extension): This branch contain code for the extension part of Bookmark extension shown in the demo. The frontend and backend code for the extension can be referenced from [here](https://github.com/BharatNischal/Bookmark-Store). Please note that the extension given in this (repository whose link is provided) repository is created using manifest version 2 which is deprecated so some of the apis won't work. For extension related code refer to [Step-7-bookmark-extension](https://github.com/BharatNischal/Chrome-Extension-Workshop/tree/Step-7-bookmark-extension) branch only.

## Resources

 - [Slides](https://www.canva.com/design/DAFRdB4Ypbs/NKlLlpQRBjqGiI1tgVPbhQ/view?utm_content=DAFRdB4Ypbs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
 - [Chrome Developers](https://developer.chrome.com/docs/extensions/)

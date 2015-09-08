// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Yahoo Dictionary for Selected Text";
    var id = chrome.contextMenus.create({
        "title": title, "contexts": [context],
        "id": "context" + context
    });
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);
// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var value = encodeURI(sText);
    window.open("http://tw.dictionary.search.yahoo.com/search?p=" + value + "&fr2=dict");
};

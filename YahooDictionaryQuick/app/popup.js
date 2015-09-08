
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(processSelection, 100);
});

function processSelection() {
    chrome.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function (tab) {
        chrome.tabs.sendMessage(tab[0].id, { method: "getSelection" },
        function (response) {
            //var text = document.getElementById('KimMsg');
            //text.innerHTML = response.data;
            var value = encodeURI(response.data);
            window.open("http://tw.dictionary.search.yahoo.com/search?p=" + value + "&fr2=dict");
        });
    });
}
var hideScoresCheckbox = document.getElementById("hideScoresCheckbox");

let toggleScores = (element) => {
    chrome.storage.sync.get("hltv-hide-score-ishidden", (value) => {
        let isHidden = value['hltv-hide-score-ishidden'];
        if(isHidden) {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        file: "showScores.js"
                    }
                )
            });
            chrome.storage.sync.set({"hltv-hide-score-ishidden": false});
        } else {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        file: "hideScores.js"
                    }
                )
            });
            chrome.storage.sync.set({"hltv-hide-score-ishidden": true});
        }
    });
}

hideScoresCheckbox.onclick = toggleScores;
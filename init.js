var hideScoresCheckbox = document.getElementById("hideScoresCheckbox");

let init = () => {
    chrome.storage.sync.get("hltv-hide-score-ishidden", (value) => {
        let isHidden = value["hltv-hide-score-ishidden"];
        if(isHidden) {
            hideScoresCheckbox.checked = true;
        } else {
            hideScoresCheckbox.checked = false;
        }
    });
}

init();
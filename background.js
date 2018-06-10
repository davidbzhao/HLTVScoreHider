chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({"hltv-hide-score-ishidden": true});

    // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    //     chrome.declarativeContent.onPageChanged.addRules([
    //         {
    //             conditions: [
    //                 new chrome.declarativeContent.PageStateMatcher({
    //                     pageUrl: {hostEquals: 'www.hltv.org'}
    //                 })
    //             ],
    //             actions: [
    //                 new chrome.declarativeContent.ShowPageAction()
    //             ]
    //         }
    //     ]);
    // });
});
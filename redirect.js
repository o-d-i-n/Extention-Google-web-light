chrome.tabs.query({'active': true, 'currentWindow': true}, function (result) {
	    var nurl = result[0].url;
	    chrome.tabs.create({url: "http:googleweblight.com/?lite_url=" + nurl});
});

// chrome.extension.onRequest.addListener(function(request, sender) {
// 	chrome.tabs.query({'active': true, 'currentWindow': true}, function (result) {
// 	    var nurl = result[0].url;
// 	    console.log(nurl);
// 	    nurl = "www.gogle.com";
// 	    console.log(nurl);
// 	    chrome.tabs.create({url: nurl});
// 	});
        
// });

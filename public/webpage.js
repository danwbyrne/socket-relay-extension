console.log('k we going');
console.log('4 sure');

chrome.debugger.attach({tabId:tab.id}, "1.1", function() {
  chrome.debugger.sendCommand({tabId:tabId}, "Network.enable");
  chrome.debugger.onEvent.addListener(onEvent);
});

function onEvent(debuggeeId, message, params) {
  if (tabId != debuggeeId.tabId)
    return;

  if (message == "Network.webSocketFrameSent") {
    console.log('111111111111111');
  } else if (message == "Network.webSocketFrameReceived") {
    console.log('222222222222222');
  }
}

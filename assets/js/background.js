chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    apiurl = 'https://api.github.com/user/' + message.uid
    if(message.alt.includes('@')){
      identurl = 'https://github.com/identicons/' + message.alt.substring(1) + '.png'
      senderResponse({data: identurl, index: message.index});
    }
    else {
      fetch(apiurl)
          .then(response => response.text())
          .then(data => {
            var dataObj = JSON.parse(data);
            identurl = 'https://github.com/identicons/' + dataObj.login + '.png';
            senderResponse({data: identurl, index: message.index});
          })
          .catch(error => console.log("error", error))
        }
      return true;  // Will respond asynchronously.
  }
});

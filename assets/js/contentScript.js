var images = document.getElementsByTagName('img');
for(var i = 0; i < images.length; i++){
  if(images[i].src.startsWith('https://avatars.githubusercontent'))
  {
    src = images[i].src;
    uid = src.substring(src.indexOf('/u/') + 3, src.indexOf('?'));
    chrome.runtime.sendMessage({msg: 'image', index: i, uid: uid, alt: images[i].alt}, function({data, index})
    {
      images[index].src = data;
    });
  }
}

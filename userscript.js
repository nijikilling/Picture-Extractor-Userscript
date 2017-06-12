// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match http://*/*
// @grant      GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand('Download pics!', function() {
    console.log('Clicked!');
    alert('clicked!');
    var images = document.getElementsByTagName('img');
    var srcList = [];
    for (var i = 0; i < images.length; i++) {
           srcList.append(images[i].src);
    }
    var myOverlay = document.createElement('div');
    alert(myOverlay.toString());
    myOverlay.id = 'imagesOverlay';
    document.body.appendChild(myOverlay);
    myOverlay.style.width = '100%';
    myOverlay.style.height = '100%';
    myOverlay.className = 'pic-ui-overlay';
    myOverlay.style.position = 'fixed';
    myOverlay.style.zIndex = '0';
    myOverlay.style.left = '0';
    myOverlay.style.top = '0';
    myOverlay.style.backgroundColor = "black";
    myOverlay.style.opacity = '0.5';
    myOverlay.style.overflowX = 'hidden';
}, '');


(function() {

    // Your code here...
})();

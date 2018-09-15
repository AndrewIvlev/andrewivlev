var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/theme.png') {
      myImage.setAttribute ('src','images/Lpab.gif');
    } else {
      myImage.setAttribute ('src','images/theme.png');
    }
}
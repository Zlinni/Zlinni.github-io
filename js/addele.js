var iscenterBox = document.getElementsByClassName('is-center')[4];
iscenterBox.classList.add('centerBox');
var newheadBox = document.createElement('div');
newheadBox.classList.add('newheadBox');
iscenterBox.insertBefore(newheadBox, iscenterBox.childNodes[0]);
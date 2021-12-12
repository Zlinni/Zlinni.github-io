var iscenterBox = document.getElementsByClassName('is-center');
console.log(window.location);
iscenterBox[4].classList.add('centerBox');
iscenterBox[10].classList.add('centerBox');
var newheadBox = document.createElement('div');
newheadBox.classList.add('newheadBox');
iscenterBox[4].insertBefore(newheadBox, iscenterBox[4].childNodes[0]);
iscenterBox[10].insertBefore(newheadBox, iscenterBox[10].childNodes[0]);

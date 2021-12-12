var iscenterBox = document.getElementsByClassName('is-center');
console.log(window.location);
var newheadBox = document.createElement('div');
newheadBox.classList.add('newheadBox');
if (window.location.pathname.match('post')) {
    console.log('wenzhangye');
    iscenterBox[10].classList.add('centerBox');
    iscenterBox[10].insertBefore(newheadBox, iscenterBox[10].childNodes[0]);
} else {
    iscenterBox[4].classList.add('centerBox');
    console.log('qiteye');
    iscenterBox[4].insertBefore(newheadBox, iscenterBox[4].childNodes[0]);
}
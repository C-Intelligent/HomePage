// alert('hello');
var btn_last = document.querySelector('.last_img');
var btn_next = document.querySelector('.next_img');
var img = document.querySelector('.main_box .photo img');

/* var fs = require('fs');
var files = fs.readdirSync('/assets/photos/'); */

files = ["1.jpg", "4.jpg", "5.png", "6.jpg", "7.jpg", "8.jpg"];
var count = 0, max = files.length;
// alert(max);

btn_last.onclick = lastImg;
btn_next.onclick = nextImg;

function lastImg() {
    // img.src = "../images/6.jpg";
    img.src = "../img/" + files[count];
    count = (count + max - 1) % max;
}
function nextImg() {
    // img.src = "../images/6.jpg";
    img.src = "../img/" + files[count];
    count = (count + 1) % max;
}
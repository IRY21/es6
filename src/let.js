var btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.innerText = i;
    btn.onclick = function () {
        console.log(i);
    }
}
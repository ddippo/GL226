var num;
function loadDoc() {
    let ajaxCall = new XMLHttpRequest();
    ajaxCall.onload = function () {
        console.log('sucess...');
        let x = JSON.parse(this.responseText);
        num = x.length;
        document.getElementById("view").innerHTML =`${num} Photos`;
        x.forEach((obj) => {document.getElementById(
            "photo"
            ).innerHTML += `<div id=${obj.id} class="gallery" onclick="fade(${obj.id})">
                <img src=${obj.url} width="400" height="300"/><div class="de">${obj.title}</div></div>`;
        });
    };
    ajaxCall.open("GET", "https://jsonplaceholder.typicode.com/albums/2/photos", true);
    ajaxCall.send();
}

function fade(id) {
    let element = document.getElementById(id);
    let fade = setInterval(function () {
        clearInterval(fade); element.remove();
        num--;
        document.getElementById("view").innerHTML = `<div>${num} Photos</div>`;
       },);
}
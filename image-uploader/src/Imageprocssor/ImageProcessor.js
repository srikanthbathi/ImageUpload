const width = 1600;
function getCanvas() {
    let canvas = document.createElement("canvas");
    return canvas.getContext("2d");
}

function drawImage(image, width, height) {

    let canvas = getCanvas();
    canvas.drawImage(image, width, height);
    let blobres;
    console.log(canvas.canvas);
    canvas.canvas.toBlob((blob) => {
        blobres = blob;
        var saveImg = document.createElement('a');       // New link we use to save it with
        let reader = new FileReader();
        reader.readAsDataURL(blob)
        reader.onload = () => {
            saveImg.href = reader.result;                    // Assign image src to our link target
            saveImg.download = "imagename.png";
            saveImg.click();
        }

    }, "image/png", 1)
    return blobres;

}
function processImageToStore(image) {
    let naturalWidth = image.naturalWidth;
    let naturalHeight = image.naturalHeight;
    let naturalAspect = Number.parseInt(naturalWidth / naturalHeight);
    let height = width / naturalAspect;
    console.log(drawImage(image, width, height))

}
export default function processImage(objUrl) {
    let src = objUrl;
    let img = new Image();
    img.src = src;
    console.log(objUrl)
    img.onload = () => {
        processImageToStore(img);
    }
}
const width = 1600;
function getCanvas(){
   let canvas = document.createElement("canvas");
   return canvas.getContext("2d");
}

function drawImage(image,width,height){

    let canvas = getCanvas();
    canvas.drawImage(image,width,height);
    let blobres;
    canvas.toBlob((blob)=>{
        blobres = blob;
    },"image/png",1)
    return blobres;

}
function processImageToStore(image){
    let naturalWidth = image.naturalWidth;
    let naturalHeight = image.naturalHeight;
    let naturalAspect = Number.parseInt(naturalWidth/naturalHeight);
    let height = width/naturalAspect;
    console.log(drawImage(image,width,height))
    
}
export default function processImage(file){
    let src = URL.createObjectURL(file);
    let img = new Image();
    img.src = src;
    img.onload = ()=>{
        processImageToStore(img);
    }
}
const windowSize = {
    LARGE:"lg",
    MEDIUM:"md",
    SMALL:"sm"
}

export function getWindowSize(){
    if(window.outerWidth < 1024){
        return windowSize.LARGE
    }
    else if(window.outerWidth<768){
        return windowSize.MEDIUM
    }
    else{
        return windowSize.SMALL
    }
}

export function getAspectRatio(width,height){
    return width/height;
}

export function getImageContainerResolution(){
    let width = Number.parseInt(window.outerWidth * 0.7);
    let height = Number.parseInt(window.outerHeight * 0.7)
    console.log(width,height)
    return {
        width:width,
        height:height
    }

}

async function getLoadImage(src){
    let image = new Image();
    image.src = src;
    let imgPromise = new Promise((resolve,reject)=>{
        image.onload = () => {
            resolve("Done");
        }
    })
    let response = await imgPromise;
    console.log(response);
    return image;
}

export async function getImageSize(src){
    let loadedImg = await getLoadImage(src);
    let imgActWidth = loadedImg.naturalWidth;
    let imgActHeight = loadedImg.naturalHeight;

    let imgActAR = getAspectRatio(imgActWidth,imgActHeight);

    let imgContainer = getImageContainerResolution();
    let imgWidth,imgHeight;
    debugger
    if(imgActAR < 1){
        // width will be less  portrait
        imgHeight = Number.parseInt(imgContainer.height * 0.8);
        imgWidth = Number.parseInt(imgHeight * imgActAR);
        
    }
    // Landscape Height will be less or equla
    else{
        imgWidth = Number.parseInt(imgContainer.width * 0.8);
        imgHeight = Number.parseInt(imgWidth/imgActAR);
    }
    console.log(imgWidth,imgHeight)
    return {
        width:imgWidth+"px",
        height: imgHeight+"px"
    }
}
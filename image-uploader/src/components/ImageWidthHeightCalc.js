const aspectRatio = 0.8;

export  function imgWidthHeightCalc(width){
       const dim = {width:"",height:""};
           var w = Number.parseInt(width/4-10);
           var h =Number.parseInt(w * (1/aspectRatio));
           dim.width = w +"px";
           dim.height = (h)+ "px";
           console.log(h)
       return dim;
}
function getImageResolution(width,height){
return width/height;
}

export function isEditable(file){
    let src = URL.createObjectURL(file);
    let width,height, img = new Image();

    img.src = src;
   let imageLoaded = false;
     img.onload = (e)=>{
        console.log(e)
       width = img.naturalWidth;
       height = img.naturalHeight;
       console.log(width+ " "+height);
       console.log(imageLoaded)
    }
   let aspectRatio = getImageResolution(width,height);
   if(aspectRatio>0.75 && aspectRatio<0.85){
       return false;
   }
   return true;
}
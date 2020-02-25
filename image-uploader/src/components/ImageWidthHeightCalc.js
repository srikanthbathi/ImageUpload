const aspectRatio = 0.8;

export default  function imgWidthHeightCalc(width){
       const dim = {width:"",height:""};
           var w = Number.parseInt(width/4-10);
           var h =Number.parseInt(w * (1/aspectRatio));
           dim.width = w +"px";
           dim.height = h+ "px";
           console.log(h)
       return dim;
}
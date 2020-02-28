const initialState = {
    imgSources:[],
    processedImages:{}
}

const rootReducer = (state=initialState,action)=>{
let newstate = {...state};
if(action.type==="ADD_SOURCE"){
   
    newstate.imgSources = [...newstate.imgSources,action.value]
}
else if(action.type==="DELETE_SOURCE"){
     newstate.imgSources.splice(newstate.imgSources.lastIndexOf(action.value),1);
     newstate.imgSources = [...newstate.imgSources]
}
console.log(newstate)
return newstate;
}

export default rootReducer;
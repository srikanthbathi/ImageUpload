const initialState = {
    imgSources:[],
    processedImages:{}
}

const rootReducer = (state=initialState,action)=>{
let newstate = {...state}
if(action.type==="ADD_SOURCE"){
    
    newstate.imgSources = [...newstate.imgSources,action.value]
}
console.log(newstate)
return newstate;
}

export default rootReducer;
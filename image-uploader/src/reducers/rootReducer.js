const initialState = {
    imgSources: [],
    processedImages: {},
    preview: "",
}

const rootReducer = (state = initialState, action) => {
    let newstate = { ...state };
    if (action.type === "ADD_SOURCE") {

        newstate.imgSources = [...newstate.imgSources, action.value]
    }
    else if (action.type === "DELETE_SOURCE") {
        newstate.imgSources.splice(newstate.imgSources.lastIndexOf(action.value), 1);
        newstate.imgSources = [...newstate.imgSources]
        URL.revokeObjectURL(action.value)
    }

    else if (action.type === "OPEN_PREVIEW") {
        console.log("Preview")
        newstate.preview = action.value
    }
    console.log(newstate)
    return newstate;
}

export default rootReducer;
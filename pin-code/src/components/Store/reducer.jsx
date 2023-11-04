let initialState = {
    pinData : null,
    loader:false
}

function ManageReducer(state=initialState,action){
    if(action.type==="LOADER"){
        return {
            ...state,
            loader : action.payload
        }
    }
    if(action.type==="LOADDATA"){
        return {
            ...state,
            pinData : action.payload,
        }
    }
    if(action.type==="STOPLOADER"){
        return {
            ...state,
            loader:action.payload
        }
    }
}

export default ManageReducer
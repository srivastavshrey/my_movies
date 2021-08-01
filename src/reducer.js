


const favouritesReducer = (state=[],action) =>{
    if(action.type==="ADD_TO_FAVOURITE"){
        return state.concat(action.payload);
    }
    return state;
}

export default favouritesReducer;
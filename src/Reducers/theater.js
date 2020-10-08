const intialState = {
    listTheater:[],
}

const ListTheater = (state=intialState,action) =>{
    switch(action.type){
    case "LIST_THEATER": {
        state.listTheater = action.payload;
        return { ...state };
    }
    default:
        return state;
    }
}

export default ListTheater;
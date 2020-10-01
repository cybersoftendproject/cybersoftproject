const intialState = {
    listMovieData:[]
}

const ListMovie = (state=intialState,action) =>{
    switch(action.type){
    case "LIST_MOVIE": {
        state.listMovieData = action.payload;
        return { ...state };
    }
    default:
        return state;
    }
}

export default ListMovie;
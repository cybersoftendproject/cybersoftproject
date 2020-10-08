const intialState = {
    listMovieData:[],
    listMovieByPage:[],
    listMovieByDate: []
}

const ListMovie = (state=intialState,action) =>{
    switch(action.type){
    case "LIST_MOVIE": {
        state.listMovieData = action.payload;
        return { ...state };
    }
    case "LIST_MOVIE_BY_PAGE": {
        state.listMovieByPage = action.payload;
        return {...state};   
    }
    case "LIST_MOVIE_BY_DAY": {
        state.listMovieByDay = action.payload;
        return {...state};   
    }
    default:
        return state;
    }
}

export default ListMovie;
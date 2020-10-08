const intialState = {
    listUser:[],
    listUserByPage:[],
    searchUser:[],
    searchUserByPage:[],
}

const ListUser = (state=intialState,action) =>{
    switch(action.type){
    case "LIST_USER": {
        state.listUser = action.payload;
        return { ...state };
    }
    case "LIST_USER_BY_PAGE": {
        state.listUserByPage = action.payload;
        return { ...state };
    }
    case "SEARCH_USER": {
        state.searchUser = action.payload;
        return { ...state };
    }
    case "SEARCH_USER_BY_PAGE": {
        state.searchUserByPage = action.payload;
        return { ...state };
    }
    default:
        return state;
    }
}

export default ListUser;
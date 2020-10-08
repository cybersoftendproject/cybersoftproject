import {combineReducers} from 'redux'
import ListMovie from './movie'
import ListUser from './user'
import ListTheater from './theater'
const rootReducer = combineReducers({
    ListMovie: ListMovie,
    ListUser: ListUser,
    ListTheater: ListTheater,
});
export default rootReducer;
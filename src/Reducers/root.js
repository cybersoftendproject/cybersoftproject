import {combineReducers} from 'redux'
import ListMovie from './movie'

const rootReducer = combineReducers({
    ListMovie: ListMovie,
});
export default rootReducer;
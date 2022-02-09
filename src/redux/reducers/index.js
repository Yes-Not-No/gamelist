import { combineReducers } from "redux";
import downloadReducer from "./downloadsReducer";
import gameListReducer from "./gameListReducer";
import setChoosenGameReducer from "./setChoosenGameReducer";

const rootReducer = combineReducers({
    gameListReducer: gameListReducer,
    setChoosenGameReducer: setChoosenGameReducer,
    downloadReducer: downloadReducer,
})

export default rootReducer
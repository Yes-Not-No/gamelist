import { initialState } from "../initialState";

export default function gameListReducer(state = initialState, action) {
    switch (action.type) {
        case 'setGameList':
            return {
                ...state,
                gamelist: action.payload,
            };
        default:
            return state;
    }
}


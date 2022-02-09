export default function setChoosenGameReducer(state = {}, action) {
    switch (action.type) {
        case 'setChoosenGame':
            return action.payload;
        default:
            return state;
    }
}
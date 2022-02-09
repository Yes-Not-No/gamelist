export default function downloadReducer(state = [], action) {
    switch (action.type) {
        case 'addToDownload':
            state.push(action.payload);
            return [
                ...state
            ];
        default:
            return state;
    }
}
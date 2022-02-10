export default function downloadReducer(state = [], action) {
    switch (action.type) {
        case 'addToDownload':
            state.push(action.payload);
            return [
                ...state
            ];
        case 'removeFromDownload':
            const index = state.findIndex((element) => {
                return element.name === action.payload.name
            })
            state.splice(index, 1);
            return [
                ...state
            ];
        default:
            return state;
    }
}
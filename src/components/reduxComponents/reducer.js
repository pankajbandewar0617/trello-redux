const initialSate = {
    list: [],
}

const reducer = (state = initialSate, action) => {

    switch (action.type) {

        case 'DATA_RECEIVED':
            return {
                ...state,
                list: action.json
            }

        default:
            return state;
    }
};
export default reducer;
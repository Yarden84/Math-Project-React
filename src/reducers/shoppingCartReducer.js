const shoppingCartReducer = (state = {
    subjects: [
        { name: 'inequation', status: false, price: 10, num: 0 },
        { name: 'wordProblems', status: false, price: 10, num: 0 },
        { name: 'induction', status: false, price: 10, num: 0 },
        { name: 'calculus', status: false, price: 15, num: 0 },
        { name: 'trig', status: false, price: 15, num: 0 }
    ],
    itemsSum: 0,
    priceSum: 0
}, action) => {
    switch (action.type) {
        case "ITEM_STATUS":
            state = {
                ...state,
                subjects: state.subjects.map(
                    (subject) => subject.name === action.id ? { ...subject, status: action.payload } : subject
                )
            };
            break;
        case "ITEM_NUM":
            state = {
                ...state,
                subjects: state.subjects.map(
                    (subject) => subject.name === action.id ? { ...subject, num: action.payload } : subject
                )
            };
            break;
        case "ITEMS_SUM":
            state = {
                ...state,
                itemsSum: action.payload
            };
            break;
        case "PRICE_SUM":
            state = {
                ...state,
                priceSum: action.payload
            };
            break;
    }
    return state;
}

export default shoppingCartReducer;
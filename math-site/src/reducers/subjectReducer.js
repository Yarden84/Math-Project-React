const subjectReducer = (state = {
    slide1: true,
    slide2: true,
    slide3: true,
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    spin: "",
    move: "",
    imgBtnClicked: false
}, action) => {
    switch (action.type) {
        case "SLIDE1":
            state = {
                ...state,
                slide1: action.payload
            };
            break;
        case "SLIDE2":
            state = {
                ...state,
                slide2: action.payload
            };
            break;
        case "SLIDE3":
            state = {
                ...state,
                slide3: action.payload
            };
            break;
        case "ANSWER1":
            state = {
                ...state,
                answer1: action.payload
            };
            break;
        case "ANSWER2":
            state = {
                ...state,
                answer2: action.payload
            };
            break;
        case "ANSWER3":
            state = {
                ...state,
                answer3: action.payload
            };
            break;
        case "ANSWER4":
            state = {
                ...state,
                answer4: action.payload
            };
            break;
        case "SPIN":
            state = {
                ...state,
                spin: action.payload
            };
            break;
        case "MOVE":
            state = {
                ...state,
                move: action.payload
            };
            break;
        case "IMGBTN":
            state = {
                ...state,
                imgBtnClicked: action.payload
            };
            break;
    }
    return state;
}

export default subjectReducer;
import { combineReducers } from "redux";

function songList(state = [], action) {
    switch (action.type) {
        case "ALL_SONGS":
            return action.value
        default:
            return state
    }
}
function cartItem(state = [], action) {
    switch (action.type) {
        // case "ALL_SONGS":
        //     return action.value
        default:
            return state
    }
}
function buyBtnText(state = "", action) {
    switch (action.type) {
        // case "ALL_SONGS":
        //     return action.value
        default:
            return state
    }
}

export default combineReducers({
    songList,
    cartItem,
    buyBtnText
});
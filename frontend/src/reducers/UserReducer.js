const INITIAL_STATE = {
    token: "a",

    user: {
        pseudo: "",
        email: ""
    }
}

function UserReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOGIN":
            return state
        default:
            return state
    }
}

export default UserReducer;
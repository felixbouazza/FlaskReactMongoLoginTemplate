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
            return {
                token: action.payload.token,
                user: action.payload.user
            }
        default:
            return state
    }
}

export default UserReducer;
import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
    switch (action.type){
        case types.concat([
            {name: action.name, id: action.id}
        ])

        case types.USERS_LIST:
            return action.user
    }
    default:
    return state;
}
}
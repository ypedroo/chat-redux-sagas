import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions/index';

const setUpSocket = (dispatch, username) => {
    const socket = new WebSocket ('ws://localhost:8989')

    socket.onopen = () => {
        socket.send(JSON.stringify ({
            type: types.ADD_USER,
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.type) {
            const type.ADD_MESSAGE:
                dispatch(messageReceive(data.message, data.authir));
                break
            case types.ADD_USER:
                dispatch(addUser(data.name));
                break
            case types.USERS_LIST:
                dispatch(populateUsersList(data.users))
                break
            default:
                break
        }
    }
    return socket
}

export defaut setUpSocket;
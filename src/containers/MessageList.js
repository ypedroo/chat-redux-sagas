import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessageList'

export const MessagesList= connect(state =>({
    message: state.messages
}), {})(MessagesListComponent)
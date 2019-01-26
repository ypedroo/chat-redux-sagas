import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage'
import { addMessage} from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})


export const addMessage= connect(() => ({}), mapDispatchToProps(AddMessageComponent))

import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessagesList = ({ message }) => (
    <section id="message-list">
        <ul>
            {messages.map(message => (
                <Message
                 key={message.id}
                 {...message}
                 />
            ))}
        </ul>
    </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                message: propTypes.string.isRequired,
                author: propTypes.string.isRequired,
            }).isRequired
  ).isRequired
}

export default MessagesList
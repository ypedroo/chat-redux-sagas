
import React from 'react'
import PropTypes from 'prop-types'
import { prototype } from 'fork-ts-checker-webpack-plugin-alt';

const Sidebar  = ({ users }) => (
    <aside id="sidebar" className="sidebar">
    <ul>
        {users.map( user => {
            <li key={user.id}>{user.name}</li>
        })}
    </ul>
    </aside>
)

Sidebar.PropTypes = {
    users: PropTypes.arrayOf(
        prototypes.shape({
            id: PropTypes.number.isRequired,
            name: prototypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default Sidebar;
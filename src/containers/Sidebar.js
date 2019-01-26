import { connect } from 'react-redux';
import SidebarListComponent from '../components/AddMessage'

export const Sidebar= connect(state =>({
    users: state.users
}), {})(SidebarListComponent)
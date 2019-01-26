import React, { Component } from "react"
import "./App.css"
import  Sidebar  from "./components/Sidebar"
import Message from "./components/Message"
import  AddMessage  from "./components/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar/>
        <section id="main">
          <Message/>
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App
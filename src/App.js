import React, { Component } from "react"
import "./App.css"
// import { Sidebar } from "./containers/Sidebar"
import  AddMessage  from "./containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">

        <section id="main">

          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App
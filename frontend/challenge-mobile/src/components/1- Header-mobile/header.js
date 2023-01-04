import React, { Component } from 'react'

import logo from '../../assets/Logo Unycos top.png'
import person from '../../assets/person-outline.svg'

class Headermobile extends Component {
  render(){
    return (
      <>
        <header>
          <input type="image" src={logo} />
          <nav className="nav">
            <input type="image" src={person} />
          </nav>
        </header>
      </>
    )
  }
}

export default Headermobile
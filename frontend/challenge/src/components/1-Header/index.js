import React, { Component } from 'react'

import logo from '../../assets/Logo Unycos.png'

class Header extends Component {
    render(){
        return(
            <>
              <header>
                <img src={logo} />
                <nav className="nav">
                    <ul>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>  
            </>
        )
    }
}

export default Header
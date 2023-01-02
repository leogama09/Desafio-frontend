import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
            <>
            <footer>
                <div className="links">
                 <ul>
                   <li><a href="#">Terminos y condiciones</a></li>
                   <li><a href="#">Política de privacidad</a></li>
                   <li><a href="#">Aviso legal</a></li>
                 </ul>
                </div>
            </footer>
            </>
        )
    }
}

export default Footer
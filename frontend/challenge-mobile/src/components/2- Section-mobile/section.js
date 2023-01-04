import React, { Component } from 'react'

import heromobile from '../../assets/Hero mobile.png'
import solicitar from '../../assets/solicitar.png'
import iconos from '../../assets/iconos.png'

class Sectionmobile extends Component {
    render() {
        return(
            <>
            <section>
                <div className="mireia">
                    <img src={heromobile} alt="" className="hero" />
                 </div>

                <div className="information">
                <input type="image" src={solicitar} alt="submit" />
                <img src={iconos} alt="" />
                </div>

                <div className="exclusive">
                  <h3>APRENDE natación con una campeona olímpica</h3>
                </div>
            </section>
            </>
        )
    }
}

export default Sectionmobile
import React, { Component } from 'react'

import heromobile from '../../assets/Hero mobile.png'
import solicitar from '../../assets/solicitar.png'
import iconos from '../../assets/iconos.png'
import questions from '../../assets/Disabled.png'

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
                  <input type="image" src={questions} alt="submit" />
                </div>

                <div className="slider">
                    <h3>Entrenar para el éxito</h3>
                    <p>Fusce sapien lectus, tincidunt scelerisque leo vitae, maximus venenatis felis. Suspendisse potenti. 
                    Aenean tincidunt mauris et euismod tincidunt. Aliquam erat volutpat. Cras eu feugiat diam. Suspendisse potenti. 
                    Nunc faucibus vulputate neque, sit amet pulvinar mi. Ut lacus neque, imperdiet vitae viverra id, vestibulum.</p>
                </div>
            </section>
            </>
        )
    }
}

export default Sectionmobile
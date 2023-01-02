import React, { Component } from 'react'

import hero from '../../assets/Hero.png'
import heromobile from '../../assets/Hero mobile.png'
import icono1 from '../../assets/icono 1.png'
import icono2 from '../../assets/icono 2.png'
import infos from '../../assets/buttons/mas infos.svg'
import group9 from "../../assets/Group 9.png"

class Section extends Component {
    render() {
        return(
            <>
            <section>
                <div className="mireia">
                    <img src={hero} alt="" className="hero" />
                    {/* <img src={heromobile} alt="" class="heromobile" /> */}
                 </div>

                <div className="information">
                    <ul>
                        <li><img src={icono1} alt="" /></li>
                        <li><img src={icono2} alt="" /></li>
                        <li>
                        <input type="image" src={infos} alt="submit"/>
                        </li>
                    </ul>
                </div>

                <div className="exclusive">
                  <h3>CONTENIDO EXCLUSIVOS</h3>
                  <ul>
                    <li><img src={group9} alt="" /></li>
                    <li>
                      <input type="image" src={infos} alt="submit" />
                    </li>
                  </ul>
                </div>
            </section>
            </>
        )
    }
}

export default Section
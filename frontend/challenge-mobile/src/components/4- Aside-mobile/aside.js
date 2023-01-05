import React, { Component } from 'react'

import courses from '../../assets/Cursos Destacados.png'
import courses2 from '../../assets/Cursos Destacados2.png'
import article1 from '../../assets/articulo relacionado1.png'
import article2 from '../../assets/articulo relacionado2.png'
import article3 from '../../assets/articulo relacionado3.png'
import article4 from '../../assets/articulo relacionado4.png'
import readmore from '../../assets/ler mas.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter-outline.png'
import youtube from '../../assets/youtube.png'
import phone from '../../assets/phone.png'
import logosmall from '../../assets/Logo Unycos.png'

class Asidemobile extends Component {
    render() {
        return(
            <>
                <aside>
                  <div className="commentary">
                    <h3>Comentários de Usuários</h3>
                  </div>

                  <div className="courses">
                    <h3>Más cursos</h3>
                    <ul>
                        {/* Images were downloaded with "markers" = white dot beside them (I cant delete) */}
                        <li><input type="image" src={courses} /></li>
                        <li><input type="image" src={courses2} /></li>
                    </ul>
                  </div>

                  <div className="articles">
                    <h3>Artículos relacionados</h3>
                    <ul>
                        <li><input type="image" src={article1} /></li>
                        <li><input type="image" src={article2} /></li>
                        <li><input type="image" src={article3} /></li>
                        <li><input type="image" src={article4} /></li>
                        <li><input type="image" src={readmore} /></li>
                    </ul>
                  </div>

                  <div className="contact">
                    <h3>únete a la comunidad</h3>
                    <ul>  

                        {/* these inputs below are identified as inputs by chrome navigator 
                        but its not working as input buttons for some reason. 
                        (I repeated the same code everywhere and worked everytime,
                        but its not working here.) */}
                        <li><input type="image" src={facebook} /></li> 
                        <li><input type="image" src={instagram} /></li>
                        <li><input type="image" src={twitter} /></li>
                        <li><input type="image" src={youtube} /></li>
                    </ul>
                    <h4>¿Dudas? Contáctanos por whatsapp</h4>
                    <input type="image" className="phone" src={phone} />
                    <img src={logosmall} alt="" />
                    <ul className="currency">
                       <li><a href="#">USD($)</a></li>
                       <li><a href="#">EUR(€)</a></li>
                    </ul>
                  </div>
                </aside>
            </>
        )
    }
}

export default Asidemobile
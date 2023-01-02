import React, { Component } from 'react'

import group13 from '../../assets/Group 13.png'
import disabled1 from '../../assets/Disabled1.png'
import articulos from '../../assets/Artículos Relacionados.png'
import disabled3 from '../../assets/Disabled3.png'
import aprende from '../../assets/Aprende.png'
import default2 from '../../assets/Default2.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter-outline.png'
import youtube from '../../assets/youtube.png'


class Aside extends Component {
    render() {
        return(
            <>
                <aside>
                  <div className="commentary">
                    <img src={group13} alt="" />
                    <input type="image" src={disabled1} />
                  </div>

                  <div className="articles">
                    <h3>ARTÍCULOS RELACIONADOS</h3>
                    <img src={articulos} alt="" />
                    <input type="image" src={disabled3} />
                  </div>

                  <div className="blog">
                    <img src={aprende} alt="" />
                    <input type="image" src={default2} />
                  </div>

                  <div className="contact">
                    <ul>
                      <li><input type="image" src={facebook} alt="submit" /></li>
                      <li><input type="image" src={instagram} alt="submit" /></li>
                      <li><input type="image" src={twitter} alt="submit" /></li>
                      <li><input type="image" src={youtube} alt="submit" /></li>
                    </ul>
                  </div>
                </aside>
            </>
        )
    }
}

export default Aside
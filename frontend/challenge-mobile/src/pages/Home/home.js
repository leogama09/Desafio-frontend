import React, { Component } from 'react'

// CSS
import './styles.css'

import Headermobile from '../../components/1- Header-mobile/header'
import Sectionmobile from '../../components/2- Section-mobile/section'
import Slider from '../../components/6- Slider/slider'
import Articlemobile from '../../components/3- Article-mobile/article'
import Asidemobile from '../../components/4- Aside-mobile/aside'
import CommentarySlider from '../../components/7- commentary_slider/slider2'
import Footermobile from '../../components/5- Footer-mobile/footer'



class Home extends Component {
    render() {
        return (
            <>
                    <Headermobile />
                <div className="home">
                    <Sectionmobile />
                    <Slider />
                    <Articlemobile />
                    <Asidemobile />
                    <CommentarySlider />
                    <Footermobile />
                </div>
            </>
        )
    }
}

export default Home
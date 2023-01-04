import React, { Component } from 'react'

// CSS
import './styles.css'

import Headermobile from '../../components/1- Header-mobile/header'
import Sectionmobile from '../../components/2- Section-mobile/section'
import Slider from '../../components/6- Slider/slider'
import Articlemobile from '../../components/3- Article-mobile/article'



class Home extends Component {
    render() {
        return (
            <>
                    <Headermobile />
                <div className="home">
                    <Sectionmobile />
                    <Slider />
                    <Articlemobile />
                </div>
            </>
        )
    }
}

export default Home
import React, { Component } from 'react'

// CSS
import './styles.css'

import Headermobile from '../../components/1- Header-mobile/header'
import Sectionmobile from '../../components/2- Section-mobile/section'
import Slider from '../../components/6- Slider/slider'


class Home extends Component {
    render() {
        return (
            <>
                    <Headermobile />
                <div className="home">
                    <Sectionmobile />
                    <Slider />
                </div>
            </>
        )
    }
}

export default Home
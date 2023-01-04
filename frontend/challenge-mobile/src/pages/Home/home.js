import React, { Component } from 'react'

// CSS
import './styles.css'

import Headermobile from '../../components/1- Header-mobile/header'
import Sectionmobile from '../../components/2- Section-mobile/section'


class Home extends Component {
    render() {
        return (
            <>
                    <Headermobile />
                <div className="home">
                    <Sectionmobile />
                </div>
            </>
        )
    }
}

export default Home
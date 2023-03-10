import React, { Component } from 'react'

// CSS
import './styles.css'

import Header from '../../components/1-Header'
import Section from '../../components/2-Section'
import Article from '../../components/3-Article'
import Aside from '../../components/4-Aside'
import Footer from '../../components/5-Footer'
import Slider from '../../components/6-Slider/Slider'

class Home extends Component {
    render() {
        return (
            <>
                    <Header />
                <div className="home">
                    <Section />
                    <Slider />
                    <Article />
                    <Aside />
                    <Footer />
                </div>
            </>
        )
    }
}

export default Home
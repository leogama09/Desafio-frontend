import React, { Component } from 'react'

import './styles.css'

import Header from '../../components/1-Header'
import Section from '../../components/2-Section'
import Article from '../../components/3-Article'
import Aside from '../../components/4-Aside'
import Footer from '../../components/5-Footer'

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Section />
                <Article />
                <Aside />
                <Footer />
            </>
        )
    }
}

export default Home
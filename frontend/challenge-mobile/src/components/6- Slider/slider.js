import React, { Component, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import image1 from '../../assets/Fotoslider1.png'
import image2 from '../../assets/Fotoslider2.png'
import image3 from '../../assets/Fotoslider3.png'

const images = [image1, image2, image3]

function Slider() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

  return (
    <div className="App-slider">
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
            <motion.div 
                className="inner" 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x:0 }}
                transition={{ duration: 0.8 }}
                >

                {images.map(image => (
                    <motion.div className="item" key={image}>
                        <img src={image} alt="" />
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    </div>
  )
}

export default Slider
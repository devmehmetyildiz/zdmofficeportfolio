import React, { useEffect, useState } from 'react'
import Title from './Title'
import Aboutus from './Aboutus'
import Services from './Services'
import Map from './Map'
import { motion } from 'framer-motion'
import ThreeDotsWave from '../Common/ThreeDotsWave'

export default function Index(props) {
    const { bodyfunc } = props
    const [PageOpened, setPageOpened] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setTimeout(() => {
            setPageOpened(true)
            bodyfunc(true)
        }, 2000);
    }, [])

    return (
        <React.Fragment>
            {PageOpened ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <Title />
                    <Aboutus />
                    <Services />
                    <Map />
                </motion.div>
                : <ThreeDotsWave />
            }
        </React.Fragment >
    )
}

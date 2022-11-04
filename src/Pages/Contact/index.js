import React, { useEffect, useState } from 'react'
import Map from "./Map"
import Googlemap from "./Googlemap"
import Title from './Title'
import ThreeDotsWave from '../Common/ThreeDotsWave'
import { motion } from 'framer-motion'

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
                    <Googlemap />
                    <Map />
                </motion.div>
                : <ThreeDotsWave />
            }
        </React.Fragment >
    )
}

import React, { useEffect, useState } from 'react'
import Home from "./Home"
import About from "./About"
import Client from "./Clients"
import History from "./History"
import Project from "./Projects"
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
                    <Home />
                    <About />
                    <Project />
                    <History />
                    <Client />
                </motion.div>
                : <ThreeDotsWave />}
        </React.Fragment>
    )
}

import React, { useEffect } from 'react'
import Home from "./Home"
import About from "./About"
import Client from "./Clients"
import History from "./History"
import Project from "./Projects"

export default function Index() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>
            <Home/>
            <About/>
            <Project/>
            <History/>
            <Client/>
        </React.Fragment>
    )
}

import React from 'react'
import Map from "./Map"
import Googlemap from "./Googlemap"
import Title from './Title'

export default function index() {
    return (
        <React.Fragment>
            <Title />
            <Map />
            <Googlemap />
        </React.Fragment>
    )
}

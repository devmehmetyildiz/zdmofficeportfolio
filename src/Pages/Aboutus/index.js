import React, { useEffect } from 'react'
import Title from './Title'
import Aboutus from './Aboutus'
import Services from './Services'
import Map from './Map'

export default function Index() {

     /* useEffect(() => {
        window.scrollTo(0, 0)
      }, []) */
 
    return (
        <React.Fragment>
            <Title />
            <Aboutus />
            <Services />
            <Map />
        </React.Fragment>
    )
}

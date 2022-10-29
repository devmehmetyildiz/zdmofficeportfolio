import React, { useEffect } from 'react'
import Detail from './Detail'
import Title from './Title'

export default function Index() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>
            <Title />
            <Detail />
        </React.Fragment>
    )
}

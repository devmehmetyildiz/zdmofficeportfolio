import React, { useEffect, useState } from 'react'
import ThreeDotsWave from '../Common/ThreeDotsWave'
import Title from '../Common/Title'
import Project from "./Projects"
import { motion } from 'framer-motion'
import img from '../../assets/img'

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
          <Title bg={img.projects} title={"Projelerimiz"} isImg={true} />
          <Project />
        </motion.div>
        : <ThreeDotsWave />
      }
    </React.Fragment >
  )
}

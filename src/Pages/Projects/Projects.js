import React from 'react'
import { faArrowLeft, faArrowRight, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from '../../assets/img';
import { withRouter } from 'react-router-dom';
export function Projects({ history }) {

  const slideritems = [
    {
      Id: 1,
      img: img.project1,
      title: "A Projesi"
    },
    {
      Id: 2,
      img: img.project2,
      title: "B Projesi"
    },
    {
      Id: 3,
      img: img.project3,
      title: "C Projesi"
    },
    {
      Id: 4,
      img: img.project4,
      title: "D Projesi"
    },
    {
      Id: 5,
      img: img.project5,
      title: "E Projesi"
    },
    {
      Id: 6,
      img: img.project6,
      title: "F Projesi"
    },
    {
      Id: 7,
      img: img.project7,
      title: "G Projesi"
    },
    {
      Id: 8,
      img: img.project8,
      title:"H Projesi"
    },

  ]

  return (
    <div className='mt-12 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0'>
      {slideritems.map(item => {
        return <div className='relative group'>
          <h2 className='top-20 group-hover:top-40 opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 absolute left-8 w-1/2  font-Common md:text-[0.9em] lg:text-[1.2em] leading-[1.75] tracking-[0.17em] text-[#fff]'>{item.title}</h2>
          <div className='overflow-hidden inline-block'>
            <img className="group-hover:scale-125 transition-all ease-in-out duration-[2000ms]" src={item.img} alt={item.title} />
          </div>
          <p className='-rotate-90 absolute bottom-0 left-0 mb-40 -ml-24 text-[10px]  font-bold whitespace-nowrap uppercase tracking-[1em] lg:tracking-[2vmin] opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 text-[#fff] '>ZDM OFFICE</p>
          <div className='absolute bottom-[41%] left-[50%] transition-all ease-in-out duration-1000 -translate-y-1/2 -translate-x-1/2 p-4 group-hover:p-8 cursor-pointer group-hover:opacity-50 rounded-full hover:bg-[#3b535a] bg-[#34586e] opacity-0'
            onClick={() => {
              //console.log("geldim")
             // history.push("/Projects/" + item.Id)
            }}
          >
            <FontAwesomeIcon className='text-[2.4vmin] text-[#fff] group-hover:opacity-1' icon={faMagnifyingGlassPlus} />
          </div>
        </div>
      })}
    </div>
  )
}
export default withRouter(Projects)

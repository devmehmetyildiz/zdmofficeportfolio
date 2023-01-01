import React from 'react'
import { withRouter } from 'react-router-dom'
import img from '../../assets/img'

export function Detail({ match, history }) {

    const ID = match.params.ID

    if (!ID || ID > 9 || ID < 1) {
        history.push("/Projects")
    }

    //CLIENT: MODERNIZE LTD. SCALE: 3500 KM2

    const items = [
        {
            Id: 1,
            img: img.project1,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 2,
            img: img.project2,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 3,
            img: img.project3,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 4,
            img: img.project4,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 5,
            img: img.project5,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 6,
            img: img.project6,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 7,
            img: img.project7,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
        {
            Id: 8,
            img: img.project8,
            title: " Project description",
            client: "MODERNIZE LTD.",
            Scale: '3500 km2',
            text: 'It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office’s files, machines and decorations. The operating system is the boss. With this image in mind, think of an office you’ve visited that was slow and inefficient.'
        },
    ]

    const Renderitem = items.find(item => item.Id == ID)
    return (
        <div className='w-full mt-12 px-[10%] relative'>
            <div className='absolute z-100 left-[20vmin] top-[40%]'>
                <div className='w-[50%]  bg-[#34586e] flex flex-col justify-center items-start p-4 lg:p-20'>
                    <h2 className='font-bold font-Common text-[3.5vmin]  leading-[1.5] uppercase text-[#fff]'>{Renderitem.title}#{ID}</h2>
                    <div className=' flex flex-col lg:flex-row justify-center lg:justify-between w-full items-start lg:items-center'>
                        <h2 className='font-bold font-Common text-[3.5vmin] leading-[1.5] uppercase text-[#fff] lg:my-4'>Client : {Renderitem.client}</h2>
                        <h2 className='font-bold font-Common text-[3.5vmin]  leading-[1.5] uppercase text-[#fff] lg:my-4'>Scale : {Renderitem.Scale}</h2>
                    </div>
                    <p className='text-[2.7vmin]  text-[#fff] leading-[1.62]'>
                        {Renderitem.text}
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-end'>
                <img className='' src={Renderitem.img} alt="" />
            </div>
        </div>
    )
}
export default withRouter(Detail)
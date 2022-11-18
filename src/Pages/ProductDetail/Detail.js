import React, { useEffect, useLayoutEffect, useState } from 'react'
import Magnifier from "react-magnifier";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory } from "../../Redux/actions/ApiAction"
import { ImExit } from 'react-icons/im';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ROUTES } from '../../Utils/Constants'
export const Detail = (props) => {


    const { selected_record, categorieslist, subcategorieslist, companieslist, productgrouplist } = props.Datas
    const [selectedProduct, setselectedProduct] = useState(0)
    const [getBigger, setgetBigger] = useState(false)

    const { match, history } = props
    const ID = match.params.ID
    if (!ID || ID > 9 || ID < 1) {
        history.push("/Products")
    }
    useEffect(() => {
        props.GetSelectedProductgroups(ID)

    }, [])

    useLayoutEffect(() => {
        return () => {
            props.ClearSelectedProductgroups();
        };
    }, []);


    const product = selected_record.products.length > 0 ? selected_record.products[selectedProduct] : null

    const SetcategoryAndPush = () => {
        props.Setcategory(selected_record.category)
        history.push("/Products")
    }

    const SetAndPush = () => {
        props.Setcategory(selected_record.category)
        props.Setsubcategory(selected_record.subcategory)
        history.push("/Products")
    }

    const Prevclick = () => {
        selectedProduct === 0 ? setselectedProduct(selected_record.products.length - 1) : setselectedProduct(selectedProduct - 1)
    }
    const Nextclick = () => {
        selectedProduct === (selected_record.products.length - 1) ? setselectedProduct(0) : setselectedProduct(selectedProduct + 1)
    }
    return (
        <div className='mt-12 flex flex-col w-full px-[5%] lg:px-[15%] mx-auto justify-center items-center'>
            <div className='w-full flex flex-col lg:flex-row lg:flex-nowrap justify-start items-start font-bold font-Common text-[#3d3d3d] text-[100%] lg:text-[2vmax]'>
                <span onClick={() => { history.push("/Products") }} className='mx-2 cursor-pointer whitespace-nowrap'> {'ÜRÜNLER >'}  </span>
                <span onClick={() => { SetcategoryAndPush() }} className='cursor-pointer mx-2 whitespace-nowrap'> {selected_record.category ? selected_record.category.name : ""}<span className='mx-2'>  {' > '}  </span></span>
                <span onClick={() => { SetAndPush() }} className='cursor-pointer mx-2 whitespace-nowrap'>  {selected_record.subcategory ? selected_record.subcategory.name : ""} <span className='mx-2'>  {' > '}  </span></span>
                <span className='mx-2'> {selected_record ? selected_record.name : ""}</span>
            </div>
            <div className='mt-4 w-full flex  justify-center items-center'>
                <div className='w-[36px]  flex justify-center items-center   overflow-hidden'>
                    <div className='moveit flex flex-col justify-center items-center '>
                        <div className='mb-1 h-[12px] w-[2px] bg-[#3d3d3d]' />
                        <div className='mb-2 h-[8px] w-[2px] bg-[#3d3d3d]' />
                        <div className='h-[12px] w-[2px] bg-[#3d3d3d]' />
                    </div>
                </div>
            </div>
            <div className=' mt-12 flex flex-row w-full justify-center items-center '>
                <div className='  lg:w-1/4 lg:mr-20 flex flex-row justify-center items-center'>
                    <MdNavigateBefore className='text-[#3d3d3d] text-[5vmin] m-2 cursor-pointer' onClick={() => { Prevclick() }} />
                    <Popup
                        nested
                        modal
                        trigger={<Magnifier className='shadow-lg' zoomFactor={1.2} mgWidth={150} mgHeight={150} src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} />} position="bottom">
                        {close => (
                            <div className="bg-transparent shadow-4xl   flex flex-col justify-center items-center rounded-lg">
                                <div className='w-full flex flex-row justify-center items-center relative'>
                                    <h1 className='absolute left-0 top-0 text-xl font-bold text-black'>{selectedProduct + 1}<span> / </span>{selected_record.products.length}</h1>
                                    <div className='p-4 text-3xl font-bold text-black'>{selected_record.name}</div>
                                    <button className="absolute right-0 top-0 outline-none border-none" onClick={close}>
                                        <ImExit className='text-[#3d3d3d] text-4xl' />
                                    </button>
                                </div>
                                <div className='flex flex-row justify-center items-center mb-12'>
                                    <MdNavigateBefore className='text-[#3d3d3d] text-[5vmin] m-2 cursor-pointer' onClick={() => { Prevclick() }} />
                                    <img className='max-h-[75vh] bg-red-100 shadow-gray-400 shadow-xl  ' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} />
                                    <MdNavigateNext className='text-[#3d3d3d] text-[5vmin] m-2 cursor-pointer' onClick={() => { Nextclick() }} />
                                </div>
                            </div>
                        )}
                    </Popup>
                    <MdNavigateNext className='text-[#3d3d3d] text-[5vmin] m-2 cursor-pointer' onClick={() => { Nextclick() }} />
                    {/*   <img className=' group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-75 group-hover:scale-100' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} /> */}
                </div>
                <div className='text-[3vmin] lg:ml-20 font-semibold text-[#3d3d3d] font-Common flex flex-col justify-center    items-center '>
                    <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center shadow-xl rounded-full shadow-gray-300 px-4 '>
                        <h1 className='whitespace-nowrap'>Ürün Adı :</h1>
                        <h1 className='font-normal'> {product ? selected_record.name : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center shadow-xl rounded-full shadow-gray-300 px-4 '>
                    <h1 className='whitespace-nowrap'>Ürün Kodu :</h1>
                        <h1 className='font-normal'> {product ? product.productcode : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center shadow-xl rounded-full shadow-gray-300 px-4 '>
                    <h1 className='whitespace-nowrap'>Ürün Ebat :</h1>
                        <h1 className='font-normal'> {product ? product.dimension : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center shadow-xl rounded-full shadow-gray-300 px-4 '>
                        <h1>Ürün Fiyatı :</h1>
                        <h1 className='font-normal'> {product ? product.price + " TL" : ' TL'}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-4  w-full flex justify-center items-center '>
                <div className='flex flex-row justify-center items-center flex-wrap  border-2 border-gray-300 rounded-lg'>
                    {selected_record.products.map((item, index) => {
                        return <div className='scale-75 lg:scale-100 lg:m-2 ' onMouseEnter={() => { setselectedProduct(index) }}>
                            {index === selectedProduct
                                ? <img key={item.uuid} className=' cursor-pointer shadow-lg shadow-gray-500 w-[80px] h-[127px] lg:m-2 group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-25 group-hover:scale-30' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                                : <img key={item.uuid} className=' cursor-pointer w-[80px] h-[127px] lg:m-2 group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-25 group-hover:scale-30' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                            }
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Datas: state.Datas
})

const mapDispatchToProps = { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Magnifier from "react-magnifier";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory } from "../../Redux/actions/ApiAction"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ROUTES } from '../../Utils/Constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Detail = (props) => {


    const { selected_record, categorieslist, subcategorieslist, companieslist, productgrouplist } = props.Datas
    const [selectedProduct, setselectedProduct] = useState(0)
    const [getBigger, setgetBigger] = useState(false)
    const [isdataFetched, setisdataFetched] = useState(false)
    const { match, history } = props
    const ID = match.params.ID
    if (!ID || ID > 9 || ID < 1) {
        history.push("/Products")
    }

    const sliderRef = useRef(null)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setselectedProduct(newIndex)
        }
    }


    useEffect(() => {
        props.GetSelectedProductgroups(ID)

    }, [])

    useEffect(() => {
        if (selected_record.id !== 0 && !isdataFetched) {
            let isOk = false
            selected_record.products.forEach((element, index) => {
                if (!isOk && (element.subcategoryuuid === props.Datas.selected_subcategory.uuid)) {
                    setselectedProduct(index)
                    isOk = true
                }
            });
            setisdataFetched(true)
        }
    })

    useLayoutEffect(() => {
        return () => {
            props.ClearSelectedProductgroups();
        };
    }, []);


    const product = selected_record.products.length > 0 ? selected_record.products[selectedProduct] : null
    console.log('product: ', product);

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
        sliderRef.current.slickPrev()
    }
    const Nextclick = () => {
        selectedProduct === (selected_record.products.length - 1) ? setselectedProduct(0) : setselectedProduct(selectedProduct + 1)
        sliderRef.current.slickNext()
    }
    console.log('selected_record.products: ', selected_record.products);
    console.log('selectedProduct: ', selectedProduct);
    return (
        <div className='select-none  mt-12 flex flex-col w-full  mx-auto justify-center items-center'>
            <div className='w-full px-[5%] lg:px-[15%] flex flex-row flex-wrap justify-start items-start font-bold font-Common text-[#3d3d3d] text-[100%] lg:text-[1.5vmax]'>
                <span onClick={() => { history.push("/Products") }} className='mx-2 cursor-pointer whitespace-nowrap'> {'ÜRÜNLER >'}  </span>
                <span onClick={() => { SetcategoryAndPush() }} className='cursor-pointer mx-2 whitespace-nowrap'> {selected_record.category ? selected_record.category.name : ""}<span className='mx-2'>  {' > '}  </span></span>
                <span className='mx-2'> {selected_record ? selected_record.name : ""}</span>
            </div>
            <div className=' mt-12 flex flex-col lg:flex-row w-full justify-center items-start'>
                <div className=' relative  flex flex-row justify-center items-center w-full'>
                    <MdNavigateBefore className='text-[#3d3d3d] hover:text-[#c5a47e] text-[5vmin] m-2 cursor-pointer absolute left-0 top-[%45] z-50' onClick={() => { Prevclick() }} />
                    <Popup
                        modal
                        size={"large"}
                        trigger={<img className='shadow-md shadow-[#c5a47e] max-h-[90vh]' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} />} position="bottom">
                        {close => (
                            <div className="bg-transparent shadow-4xl   flex flex-col justify-center items-center rounded-lg ">
                                <div className='w-full flex flex-row justify-center items-center relative'>
                                    <h1 className='absolute left-0 top-0 text-xl font-bold text-black'>{selectedProduct + 1}<span> / </span>{selected_record.products.length}</h1>
                                    <button className="absolute right-0 top-0 outline-none border-none" onClick={close}>
                                        <AiOutlineCloseCircle className='text-[#3d3d3d] text-4xl' />
                                    </button>
                                </div>
                                <div className='flex flex-row justify-center items-center '>
                                    <img className='max-h-[90vh] bg-red-100 shadow-gray-400 shadow-xl  ' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} />
                                </div>
                                <MdNavigateBefore className='text-[#3d3d3d] hover:text-[#c5a47e] text-[5vmin] m-2 cursor-pointer absolute left-0 top-[%45]' onClick={() => { Prevclick() }} />
                                <MdNavigateNext className='text-[#3d3d3d] hover:text-[#c5a47e] text-[5vmin] m-2 cursor-pointer absolute right-0 top-[%45]' onClick={() => { Nextclick() }} />
                            </div>
                        )}
                    </Popup>
                    <MdNavigateNext className='text-[#3d3d3d] hover:text-[#c5a47e] text-[5vmin] m-2 cursor-pointer absolute right-0 top-[%45] z-50' onClick={() => { Nextclick() }} />
                    {/*   <img className=' group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-75 group-hover:scale-100' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} /> */}
                </div>
                <div className='w-full lg:w-1/2 px-8 mx-auto font-semibold text-[#3d3d3d] font-Common flex flex-col justify-center   text-center items-center '>
                    <div className='text-[#757575] text-[200%] font-Common font-bold w-full flex justify-start items-start'>
                        {selected_record.products.length > 0 ? selected_record.products[selectedProduct].subcategory.name : null}
                    </div>
                    <div className='text-[#3d3d3d] text-[150%] font-Common font-bold w-full flex justify-between items-center my-2 text-left'>
                        <h1> {product ? selected_record.name : ''}</h1>
                        <h1 className='mr-8'> {product ? product.price + " ₺" : ' ₺'}</h1>
                    </div>
                    <div className='text-[#3d3d3d] text-[100%] font-Common font-normal  w-full flex whitespace-normal  justify-start flex-wrap items-center my-2 '>
                        <h1 className='text-left'> {product ? product.info : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center font-bold text-[#3d3d3d]'>
                        <h1 className='whitespace-nowrap'>Ürün Kodu </h1>
                        <h1 className=' select-text mr-8'> {product ? product.productcode : ''}</h1>
                    </div>
                    {product ? product.dimension !== '' && product.dimension ?
                        <div className='mt-4 flex  w-full flex-col lg:flex-row justify-between items-center font-bold text-[#3d3d3d]'>
                            <h1 className='whitespace-nowrap'>Ürün Ölçüleri </h1>
                            <h1 className=' select-text mr-8'> {product ? product.dimension : ''}</h1>
                        </div> : null : null}
                    <div className='mt-8  w-full flex justify-center items-center '>
                        {selected_record.products.length > 4 ?
                            <Slider ref={sliderRef}  {...settings} className="w-full flex items-center justify-center">
                                {selected_record.products.map((item, index) => {
                                    return <div className='w-full flex justify-center items-center' onMouseEnter={() => { setselectedProduct(index) }}>
                                        {index === selectedProduct
                                            ? <img key={item.uuid} className='mx-auto cursor-pointer shadow-lg shadow-[#c5a47e] w-auto h-[20vh]    transition-all ease-in-out duration-300' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                                            : <img key={item.uuid} className='mx-auto cursor-pointer w-auto h-[20vh]  transition-all ease-in-out duration-300' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                                        }
                                    </div>
                                })}
                            </Slider> : <React.Fragment>
                                {selected_record.products.map((item, index) => {
                                    return <div className='flex flex-row justify-center items-center flex-wrap  border-2 border-[#c5a47e] rounded-lg'>
                                        <div onMouseEnter={() => { setselectedProduct(index) }}>
                                            {index === selectedProduct
                                                ? <img key={item.uuid} className='mx-auto cursor-pointer shadow-lg shadow-[#c5a47e] w-auto h-[20vh]    transition-all ease-in-out duration-300  ' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                                                : <img key={item.uuid} className='mx-auto cursor-pointer w-auto h-[20vh]  transition-all ease-in-out duration-300 ' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                                            }
                                        </div>
                                    </div>
                                })}
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='bg-white/40  p-4 rounded-3xl flex flex-row flex-nowrap justify-center items-center hover:text-[#c5a47e] text-[#3d3d3d] transition-all ease-in-out duration-300 cursor-pointer'
            style={{ position: 'absolute', right: '-1%', top: '36%', zIndex: 2 }}
            onClick={onClick}
        >
            <MdNavigateNext className=' text-[200%]  ' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='bg-white/40  p-4 rounded-3xl flex flex-row flex-nowrap justify-center items-center hover:text-[#c5a47e] text-[#3d3d3d] transition-all ease-in-out duration-300 cursor-pointer'
            style={{ position: 'absolute', left: '-1%', top: '36%', zIndex: 2 }}
            onClick={onClick}
        >
            <MdNavigateBefore className=' text-[200%]    ' />
        </div>
    );
}

const mapStateToProps = (state) => ({
    Datas: state.Datas
})

const mapDispatchToProps = { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
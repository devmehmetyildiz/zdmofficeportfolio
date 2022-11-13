import React, { useEffect, useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory } from "../../Redux/actions/ApiAction"
import { ROUTES } from '../../Utils/Constants'
export const Detail = (props) => {
    

    const { selected_record, categorieslist, subcategorieslist, companieslist, productgrouplist } = props.Datas
    const [selectedProduct, setselectedProduct] = useState(0)

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
    return (
        <div className='mt-12 flex flex-col w-full px-[15%] mx-auto justify-center items-center'>
            <div className='w-full flex flex-row flex-nowrap justify-start items-start font-bold font-Common text-[#747474] text-2xl'>
                <span onClick={() => { history.push("/Products") }} className='mx-2 cursor-pointer'> {'ÜRÜNLER >'}  </span>
                <span onClick={() => { SetcategoryAndPush() }} className='cursor-pointer mx-2'> {selected_record.category ? selected_record.category.name : ""}</span>
                <span className='mx-2'>  {' > '}  </span>
                <span onClick={() => { SetAndPush() }} className='cursor-pointer mx-2'>  {selected_record.subcategory ? selected_record.subcategory.name : ""}</span>
                <span className='mx-2'>  {' > '}  </span>
                <span className='mx-2'> {selected_record ? selected_record.name : ""}</span>
            </div>
            <div className=' mt-12 flex flex-row w-full justify-center items-center'>
                <div className='w-1/4 mr-20 flex flex-col justify-center items-center'>
                    <div className='shadow-lg'>
                        <img className=' group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-75 group-hover:scale-100' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${product ? product.uuid : ''}`} />
                    </div>
                </div>
                <div className='text-xl ml-20 font-bold text-[#747474] font-Common flex flex-col justify-center  w-1/4 items-center'>
                    <div className='mt-4 flex  w-full flex-row justify-between items-center'>
                        <h1>Ürün Adı :</h1>
                        <h1 className='font-semibold'> {product ? selected_record.name : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-row justify-between items-center'>
                        <h1>Ürün Kodu :</h1>
                        <h1 className='font-semibold'> {product ? product.productcode : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-row justify-between items-center'>
                        <h1>Ürün Ebat :</h1>
                        <h1 className='font-semibold'> {product ? product.dimension : ''}</h1>
                    </div>
                    <div className='mt-4 flex  w-full flex-row justify-between items-center'>
                        <h1>Ürün Fiyatı :</h1>
                        <h1 className='font-semibold'> {product ? product.price + " TL" : ' TL'}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex  flex-row justify-center items-center w-full'>
                {selected_record.products.map((item, index) => {
                    return <div className='shadow-lg m-2' onMouseEnter={() => { setselectedProduct(index) }}>
                        <img key={item.uuid} className='w-[80px] h-[127px] m-2 group-hover:opacity-70 group-hover:rotate-3 transition-all ease-in-out duration-300 scale-25 group-hover:scale-30' src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${item.uuid}`} />
                    </div>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Datas: state.Datas
})

const mapDispatchToProps = { GetSelectedProductgroups, ClearSelectedProductgroups, Setcategory, Setsubcategory }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
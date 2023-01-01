import React, { useEffect, useState } from 'react'
import { SetLogin } from "../../Redux/actions/LoginAction"
import { GetAllCategories, GetAllCompanies, GetAllProductgroups, GetAllSubcategories, GetSelectedProductgroups, Removecategory, Removesubcategory, Setcategory, Setsubcategory } from "../../Redux/actions/ApiAction"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ROUTES } from '../../Utils/Constants'
import { BiSearchAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"

export const Products = (props) => {

  const [selectedpageindex, setSelectedpageindex] = useState(1)
  const [selectedfilter, setselectedfilter] = useState("")
  const [selectedCategories, setselectedCategories] = useState({})
  const [selectedSubcategories, setselectedSubcategories] = useState({})
  const paginationmaxnumber = 12

  useEffect(() => {
    props.GetAllCategories()
    props.GetAllCompanies()
    props.GetAllSubcategories()
    props.GetAllProductgroups()


    if (Object.keys(props.Datas.selected_category).length > 0) {
      setselectedCategories(props.Datas.selected_category, () => {
        props.Removecategory()
      })
    }

    if (Object.keys(props.Datas.selected_subcategory).length > 0) {
      setselectedSubcategories(props.Datas.selected_subcategory, () => {
        props.Removesubcategory()
      })
    }


  }, [])
  const { history } = props
  const { categorieslist, subcategorieslist, companieslist, productgrouplist } = props.Datas
  let list = productgrouplist
  let templist = []
  Object.keys(selectedCategories).length > 0 ? list = list.filter(u => u.categoryuuid === selectedCategories.uuid) : list = list
  if (Object.keys(selectedSubcategories).length > 0) {
    list.forEach(element => {
      let addit = false
      element.products.forEach(product => {
        if (product.subcategoryuuid === selectedSubcategories.uuid) {
          addit = true
        }
      });
      if (addit) {
        templist.push(element)
      }
    })
    list = templist
  }
  selectedfilter !== '' ? list = list.filter(u => u.name.toUpperCase() === selectedfilter.toUpperCase()) : list = list

  let numbers = []
  for (let index = 1; index < (list.length > 0 ? (list.length / paginationmaxnumber) + 1 : 1); index++) {
    numbers.push(index)
  }

  const Setcategories = (e) => {
    if (selectedCategories.uuid !== e.uuid) {
      setselectedCategories({ ...e })
    } else {
      setselectedCategories({})
      setselectedSubcategories({})
    }
  }

  const Setsubcategories = (e) => {
    if (selectedSubcategories.uuid !== e.uuid) {
      setselectedSubcategories({ ...e })
    } else {
      setselectedSubcategories({})
    }
  }

  return (
    <div className='w-full mt-12 px-[10%] flex flex-col justify-center items-center'>
      <div className='flex my-8 flex-row w-1/5 flex-nowrap justify-center items-center'>
        <span className='opacity-25 border-y-[0.2px] w-full mx-2 border-[#3b535a] bg-[#3b535a]' />
        <span className='text-[#3b535a] font-Common'>ÜRÜNLERİMİZ</span>
        <span className='opacity-25 border-y-[0.2px] w-full mx-2  border-[#3b535a] bg-[#3b535a]' />
      </div>
      <div className='flex flex-row justify-center w-full items-center text-center flex-wrap'>
        <div className='flex flex-row flex-nowrap justify-center items-center border-[1px] border-[#3b535a] rounded-full w-2/3 shadow-xl p-2'>
          <BsSearch />
          <input onChange={(e) => { setselectedfilter(e.target.value) }} value={selectedfilter} className='w-full text-center outline-0' placeholder='lütfen ürün adı giriniz' >
          </input>
        </div>
      </div>
      <div className='mt-4 text-[110%] flex flex-row justify-center items-center text-center flex-wrap  font-Common'>
        {categorieslist.map(item => {
          return <div key={item.uuid}>
            <div className={`${selectedCategories.uuid === item.uuid ? 'bg-[#34586e] text-[#29303e]' : 'text-[#bdbdbd]  bg-[#29303e]'} mx-2 my-2 rounded-full px-4 py-2  cursor-pointer hover:bg-[#34586e] hover:text-[#29303e] transition-all ease-in-out duration-300`}
              onClick={() => { Setcategories(item) }}
            >
              <h1 >{item.name}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='mt-4 text-[100%] flex flex-row justify-center items-center text-center flex-wrap  font-Common'>
        {selectedCategories && Object.keys(selectedCategories).length > 0 ? subcategorieslist.filter(u => u.categoryuui === selectedCategories.uuid).map(item => {
          return <div key={item.uuid}>
            < div className={`${selectedSubcategories.uuid === item.uuid ? 'bg-[#34586e] text-[#29303e]' : 'text-[#bdbdbd]  bg-[#29303e]'} mx-2 my-2 rounded-full px-4 py-2  cursor-pointer hover:bg-[#34586e] hover:text-[#29303e] transition-all ease-in-out duration-300`}
              onClick={() => { Setsubcategories(item) }}
            >
              <h1 >{item.name}</h1>
            </div>
          </div>
        }) : null}
      </div >
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2 lg:gap-4 mx-auto px-[1%] md:px-[2%] lg:px-[5%]'>
        {list.slice((selectedpageindex - 1) * paginationmaxnumber, selectedpageindex * paginationmaxnumber).map(item => {
          return <div
            onClick={() => {
              props.Setcategory(selectedCategories)
              props.Setsubcategory(selectedSubcategories)
              history.push(`/Products/${item.uuid}`)
            }}
            key={item.uuid} className='cursor-pointer overflow-hidden flex flex-col  justify-start items-center  group  shadow-xl relative  h-[500px]' >
            <div className='transition-all ease-in-out duration-700  text-center text-[150%] align-top py-4 text-[#bdbdbd] bg-[#29303e] group-hover:bg-[#34586e] w-full'>
              <p className='transition-all ease-in-out duration-700  group-hover:text-[#29303e] font-bold'> {item.name}</p>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
              <img
                className='  transition-all ease-in-out duration-300 scale-75 w-[80%] h-auto group-hover:scale-100'
                src={`${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTS}/GetImage?guid=${Object.keys(selectedSubcategories).length > 0 ? item.products.filter(u => u.subcategoryuuid === selectedSubcategories.uuid)[0].uuid : item.products[0].uuid}`} />
            </div>
          </div>
        })}
      </div>
      <div className='mt-4 font-bold flex flex-row flex-nowrap justify-start items-start mx-auto text-[150%]'>
        {numbers.map(item => {
          return <div key={item} onClick={() => { setSelectedpageindex(item) }} className={`${item === selectedpageindex ? `bg-[#34586e]` : `bg-[#29303e]`} mx-2 p-4 cursor-pointer`}>
            <span className={`${item === selectedpageindex ? `text-[#29303e]` : `text-[#bdbdbd]`}`}>{item}</span>
          </div>
        })}
      </div>
    </div >
  )
}

const mapStateToProps = (state) => ({
  Datas: state.Datas
})

const mapDispatchToProps = { GetAllCategories, GetAllCompanies, GetAllProductgroups, GetAllSubcategories, GetSelectedProductgroups, SetLogin, Removecategory, Removesubcategory, Setcategory, Setsubcategory }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products))
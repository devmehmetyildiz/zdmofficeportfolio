import axios from "axios"
import { ROUTES } from "../../Utils/Constants";
import { AxiosErrorHandle, GetToken } from "../../Utils/TokenValidChecker";

export const ACTION_TYPES = {
    GET_ALLCATEGORIES_INIT: `GET_ALLCATEGORIES_INIT`,
    GET_ALLCATEGORIES_SUCCESS: `GET_ALLCATEGORIES_SUCCESS`,
    GET_ALLCATEGORIES_ERROR: `GET_ALLCATEGORIES_ERROR`,

    GET_ALLCOMPANIES_INIT: `GET_ALLCOMPANIES_INIT`,
    GET_ALLCOMPANIES_SUCCESS: `GET_ALLCOMPANIES_SUCCESS`,
    GET_ALLCOMPANIES_ERROR: `GET_ALLCOMPANIES_ERROR`,

    GET_ALLPRODUCTGROUPS_INIT: `GET_ALLPRODUCTGROUPS_INIT`,
    GET_ALLPRODUCTGROUPS_SUCCESS: `GET_ALLPRODUCTGROUPS_SUCCESS`,
    GET_ALLPRODUCTGROUPS_ERROR: `GET_ALLPRODUCTGROUPS_ERROR`,

    GET_SELECTEDPRODUCTGROUP_INIT: `GET_SELECTEDPRODUCTGROUP_INIT`,
    GET_SELECTEDPRODUCTGROUP_SUCCESS: `GET_SELECTEDPRODUCTGROUP_SUCCESS`,
    GET_SELECTEDPRODUCTGROUP_ERROR: `GET_SELECTEDPRODUCTGROUP_ERROR`,

    REMOVE_SELECTEDPRODUCTGROUP: `REMOVE_SELECTEDPRODUCTGROUP`,

    GET_ALLSUBCATEGORIES_INIT: `GET_ALLSUBCATEGORIES_INIT`,
    GET_ALLSUBCATEGORIES_SUCCESS: `GET_ALLSUBCATEGORIES_SUCCESS`,
    GET_ALLSUBCATEGORIES_ERROR: `GET_ALLSUBCATEGORIES_ERROR`,

    SET_CATEGORY: `SET_CATEGORY`,
    REMOVE_CATEGORY: `REMOVE_CATEGORY`,
    SET_SUBCATEGORY: `SET_SUBCATEGORY`,
    REMOVE_SUBCATEGORY: `REMOVE_SUBCATEGORY`,
}

export const GetAllCategories = () => async dispatch => {
    dispatch({ type: ACTION_TYPES.GET_ALLCATEGORIES_INIT })
    await axios({
        method: `get`,
        url: process.env.REACT_APP_BACKEND_URL + `/${ROUTES.CATEGORIES}/GetAll`,
        headers: { Authorization: `Bearer ${GetToken()}` }
    })
        .then(response => {
            dispatch({ type: ACTION_TYPES.GET_ALLCATEGORIES_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ACTION_TYPES.GET_ALLCATEGORIES_ERROR, payload: error })
        })
}

export const GetAllCompanies = () => async dispatch => {
    dispatch({ type: ACTION_TYPES.GET_ALLCOMPANIES_INIT })
    await axios({
        method: `get`,
        url: process.env.REACT_APP_BACKEND_URL + `/${ROUTES.COMPANY}/GetAll`,
        headers: { Authorization: `Bearer ${GetToken()}` }
    })
        .then(response => {
            dispatch({ type: ACTION_TYPES.GET_ALLCOMPANIES_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ACTION_TYPES.GET_ALLCOMPANIES_ERROR, payload: error })
        })
}

export const GetAllSubcategories = () => async dispatch => {
    dispatch({ type: ACTION_TYPES.GET_ALLSUBCATEGORIES_INIT })
    await axios({
        method: `get`,
        url: process.env.REACT_APP_BACKEND_URL + `/${ROUTES.SUBCATEGORIES}/GetAll`,
        headers: { Authorization: `Bearer ${GetToken()}` }
    })
        .then(response => {
            dispatch({ type: ACTION_TYPES.GET_ALLSUBCATEGORIES_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ACTION_TYPES.get, payload: error })
        })
}

export const GetAllProductgroups = () => async dispatch => {
    dispatch({ type: ACTION_TYPES.GET_ALLPRODUCTGROUPS_INIT })
    await axios({
        method: `get`,
        url: process.env.REACT_APP_BACKEND_URL + `/${ROUTES.PRODUCTGROUPS}/GetAll`,
        headers: { Authorization: `Bearer ${GetToken()}` }
    })
        .then(response => {
            dispatch({ type: ACTION_TYPES.GET_ALLPRODUCTGROUPS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ACTION_TYPES.GET_ALLPRODUCTGROUPS_ERROR, payload: error })
        })
}

export const ClearSelectedProductgroups = () => dispatch => {
    dispatch({ type: ACTION_TYPES.REMOVE_SELECTEDPRODUCTGROUP })
}

export const GetSelectedProductgroups = (ItemId) => async dispatch => {
    dispatch({ type: ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_INIT })
    await axios({
        method: `get`,
        url: `${process.env.REACT_APP_BACKEND_URL}/${ROUTES.PRODUCTGROUPS}/GetSelected?guid=${ItemId}`,
        headers: { Authorization: `Bearer ${GetToken()}` }
    })
        .then(response => dispatch({ type: ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_SUCCESS, payload: response.data }))
        .catch(error => {
            dispatch({ type: ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_ERROR, payload: error })
        })
};

export const Setcategory = (Item) => dispatch => {
    dispatch({ type: ACTION_TYPES.SET_CATEGORY, payload: Item })
}
export const Setsubcategory = (Item) => dispatch => {
    dispatch({ type: ACTION_TYPES.SET_SUBCATEGORY, payload: Item })
}
export const Removecategory = () => dispatch => {
    dispatch({ type: ACTION_TYPES.REMOVE_CATEGORY })
}
export const Removesubcategory = () => dispatch => {
    dispatch({ type: ACTION_TYPES.REMOVE_SUBCATEGORY })
}
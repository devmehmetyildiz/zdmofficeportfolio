import { ACTION_TYPES } from "../actions/ApiAction"

const INITIAL_STATE = {
    categorieslist: [],
    subcategorieslist: [],
    companieslist: [],
    productgrouplist: [],
    selected_record: {
        id: 0,
        name: "",
        isSet: false,
        price: 0,
        uuid: null,
        createduser: "",
        updateduser: null,
        deleteuser: null,
        createdtime: null,
        updatetime: null,
        deletetime: null,
        isActive: true,
        products: [],
        categoryuuid: "",
        subcategoryuuid: "",
        category: {},
        subcategory: {},
        companyuuid: "",
        company: {}
    },
    errmsg: "",
    selected_category: {},
    selected_subcategory: {},
    isLoading: false,
    isSelected: false,
    isModalOpen: false
}

export const ApiReducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case ACTION_TYPES.GET_ALLCATEGORIES_INIT:
            return { ...state, isLoading: true };
        case ACTION_TYPES.GET_ALLCATEGORIES_SUCCESS:
            return { ...state, categorieslist: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLCATEGORIES_ERROR:
            return { ...state, errmsg: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLCOMPANIES_INIT:
            return { ...state, isLoading: true };
        case ACTION_TYPES.GET_ALLCOMPANIES_SUCCESS:
            return { ...state, companieslist: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLCOMPANIES_ERROR:
            return { ...state, errmsg: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLSUBCATEGORIES_INIT:
            return { ...state, isLoading: true };
        case ACTION_TYPES.GET_ALLSUBCATEGORIES_SUCCESS:
            return { ...state, subcategorieslist: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLSUBCATEGORIES_ERROR:
            return { ...state, errmsg: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLPRODUCTGROUPS_INIT:
            return { ...state, isLoading: true };
        case ACTION_TYPES.GET_ALLPRODUCTGROUPS_SUCCESS:
            return { ...state, productgrouplist: payload, isLoading: false }
        case ACTION_TYPES.GET_ALLPRODUCTGROUPS_ERROR:
            return { ...state, errmsg: payload, isLoading: false }
        case ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_INIT:
            return { ...state, isLoading: true }
        case ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_SUCCESS:
            return { ...state, selected_record: payload, isSelected: true, isLoading: false }
        case ACTION_TYPES.GET_SELECTEDPRODUCTGROUP_ERROR:
            return { ...state, errmsg: payload, isLoading: false }
        case ACTION_TYPES.REMOVE_SELECTEDPRODUCTGROUP:
            return { ...state, selected_record: INITIAL_STATE.selected_record, files: [], isSelected: false }
        case ACTION_TYPES.SET_CATEGORY:
            return { ...state, selected_category: payload }
        case ACTION_TYPES.REMOVE_CATEGORY:
            return { ...state, selected_category: {} }
        case ACTION_TYPES.SET_SUBCATEGORY:
            return { ...state, selected_subcategory: payload }
        case ACTION_TYPES.REMOVE_SUBCATEGORY:
            return { ...state, selected_subcategory: {} }
        default:
            return state;
    }
}
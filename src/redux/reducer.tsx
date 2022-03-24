import { initialState } from "../configs/ServicesRequest"
import { TypeReducer } from "./typeReduce"

export const Reducer = (state = initialState, action: any) => {
    switch (action.type) {

        case TypeReducer.INITIALIZE:
            return {
                ...state,
                popular: action.data
            }
        case TypeReducer.INITIALIZE_ROMANCE:

            return {
                ...state,
                romance: action.data
            }
        case TypeReducer.INITIALIZE_ANIMATION:
            return {
                ...state,
                animation: action.data
            }
        case TypeReducer.INITIALIZE_COMEDY:

            return {
                ...state,
                comedy: action.data
            }

        case TypeReducer.INITIALIZE_DOCUMENTARY:
            return {
                ...state,
                documentary: action.data
            }
        case TypeReducer.INITIALIZE_FAMILY:

            return {
                ...state,
                family: action.data
            }
        case TypeReducer.INITIALIZE_HORROR:
            return {
                ...state,
                horror: action.data
            }
        case TypeReducer.INITIALIZE_SCIENCE_FICTION:

            return {
                ...state,
                science_fic: action.data
            }
        case TypeReducer.INITIALIZE_SERIE:
            return {
                ...state,
                serie: action.data
            }
        case TypeReducer.INITIALIZE_TRILLER:

            return {
                ...state,
                triller: action.data
            }
        default:
            return state
    }
}
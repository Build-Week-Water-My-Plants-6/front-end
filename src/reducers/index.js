// ACTIONS
import {
    FETCH_PLANTS_START,
    FETCH_PLANTS_SUCCESS,
    FETCH_PLANTS_FAILURE,
    POST_PLANT_START,
    POST_PLANT_SUCCESS,
    POST_PLANT_FAILURE,
    DEL_PLANT_START,
    DEL_PLANT_SUCCESS,
    DEL_PLANT_FAILURE,
    PUT_PLANT_START,
    PUT_PLANT_SUCCESS,
    PUT_PLANT_FAILURE
} from '../actions/index';

const initialState = {
    plants: [],
    user: {},
    fetching: false,
    error: ""
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLANTS_START:
            return {
                ...state,
                fetching: true
            };

        case FETCH_PLANTS_SUCCESS:
            return {
                ...state,
                plants: [...action.payload],
                fetching: false
            };

        case FETCH_PLANTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        case POST_PLANT_START:
            return {
                ...state,
                fetching: true
            };

        case POST_PLANT_SUCCESS:
            return {
                ...state,
                plants: [...state.plants, action.payload],
                fetching: false
            };

        case POST_PLANT_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        case PUT_PLANT_START:
            return {
                ...state,
                fetching: true
            };

        case PUT_PLANT_SUCCESS:
            const newArr = state.plants.filter(plant => {
                if (plant.id === action.payload.id) {
                    return false;
                } else  {
                    return true;
                }
            });

            return {
                ...state,
                plants: [...newArr, action.payload],
                fetching: false
            };

        case PUT_PLANT_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false
            }

        default:
            return {
                ...state
            };
    }
};
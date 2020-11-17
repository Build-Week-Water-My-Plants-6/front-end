import axiosAuth from  '../utils/axiosWithAuth';

export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const FETCH_PLANTS_FAILURE = "FETCH_PLANTS_FAILURE";
export const POST_PLANT_START = "POST_PLANT_START";
export const POST_PLANT_SUCCESS = "POST_PLANT_SUCCESS";
export const POST_PLANT_FAILURE = "POST_PLANT_FAILURE";
export const PUT_PLANT_START = "PUT_PLANT_START";
export const PUT_PLANT_SUCCESS = "PUT_PLANT_SUCCESS";
export const PUT_PLANT_FAILURE = "PUT_PLANT_FAILURE";
export const DEL_PLANT_START = "DEL_PLANT_START";
export const DEL_PLANT_SUCCESS = "DEL_PLANT_SUCCESS";
export const DEL_PLANT_FAILURE = "DEL_PLANT_FAILURE";

export const getUserPlants = () => (dispatch) => {
    dispatch({ type: FETCH_PLANTS_START });
    axiosAuth().get('/api/plants')
        .then(res => {
            dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_PLANTS_FAILURE, payload: err.response.data.message });
        });
};

export const postUserPlant = (plant) => (dispatch) => {
    dispatch({ type: POST_PLANT_START });
    axiosAuth().post('/api/plants', { plant_name: plant.name, plant_species: plant.species, water_schedule: plant.waterSchedule })
        .then(res => {
            dispatch({ type: POST_PLANT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: POST_PLANT_FAILURE, payload: err.response.data.message });
        });
};

export const putPlant = (id, plant) => (dispatch) => {
    dispatch({ type: PUT_PLANT_START });
    axiosAuth().put(`/api/plants/${id}`, { plant_name: plant.name, plant_species: plant.species, water_schedule: plant.waterSchedule })
        .then(res => {
            dispatch({ type: PUT_PLANT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: PUT_PLANT_FAILURE, payload: err.response.data.message });
        });
};
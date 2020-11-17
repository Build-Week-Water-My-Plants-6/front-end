import axiosAuth from '../utils/axiosWithAuth';

// Used to quickly fetch a plant object using an id when it is unneccessary to store in the global store.

export default function fetchPlant(id) {
    return axiosAuth().get(`/api/plants/${id}`);
};
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { getUserPlants, delPlant } from '../actions/index';
import fetchPlant from '../api/fetchPlant';

import PlantList from './PlantList';
import PlantForm from './PlantForm';
import PlantDetailedModal from './PlantDetailedModal';

import { Settings } from '@material-ui/icons';

import './Dashboard.css';

function Dashboard(props) {
    const { push } = useHistory();
    const [isShowPlantForm, setIsShowPlantForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [plantToEdit, setPlantToEdit] = useState({});

    // Runs when the user clicks on a plant to see the detailed modal view
    function onPlantClick(id) {
        fetchPlant(id)
            .then(res => {
                setPlantToEdit(res.data);
                setIsModalOpen(true);
            })
            .catch(err => {
                console.log(err.response.data.message);
            });
    };

    function onPlantDelClick(id) {
        props.delPlant(id);
    };

    useEffect(() => {
        props.getUserPlants();
        console.log(props.plants)
    }, []);

    return (
        <div className="box py-5 px-6">
            <div className="box-header mb-5">
                <div className="has-text-centered box-header-center">
                    <h2 className="title is-4">Dashboard</h2>
                </div>
                <div className="has-text-centered is-flex">
                    <Settings className="header-button" onClick={() => push('/settings')}/>
                </div>
            </div>
            <div className="plants-wrapper mb-5">
                <h3 className="title is-5 has-text-centered mb-5">My Plants</h3>
                <PlantList plants={props.plants} onPlantClick={onPlantClick} onPlantDelClick={onPlantDelClick} />
            </div>
            {isShowPlantForm === false &&
                <div className="has-text-centered mt-6">
                    <button className="button" onClick={() => setIsShowPlantForm(true)}>Create a New Plant</button>
                </div>
            }
            {isShowPlantForm ? <PlantForm setIsShowPlantForm={setIsShowPlantForm} /> : <></>}
            {isModalOpen ? <PlantDetailedModal isModalOpen={true} setIsModalOpen={setIsModalOpen} plant={plantToEdit} /> : <></> }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        plants: state.plants
    };
};

export default connect(mapStateToProps, { getUserPlants, delPlant })(Dashboard);
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PlantList from './PlantList';
import PlantForm from './PlantForm';
import PlantDetailedModal from './PlantDetailedModal';

import { Settings } from '@material-ui/icons';

import './Dashboard.css';

function Dashboard() {
    const { push } = useHistory();
    const [isShowPlantForm, setIsShowPlantForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

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
                <PlantList />
            </div>
            {isShowPlantForm === false &&
                <div className="has-text-centered mt-6">
                    <button className="button" onClick={() => setIsShowPlantForm(true)}>Create a New Plant</button>
                </div>
            }
            {isShowPlantForm ? <PlantForm setIsShowPlantForm={setIsShowPlantForm} /> : <></>}
            {isModalOpen ? <PlantDetailedModal isModalOpen={true} setIsModalOpen={setIsModalOpen} /> : <></> }
        </div>
    );
};

export default Dashboard;
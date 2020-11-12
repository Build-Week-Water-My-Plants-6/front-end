import React from 'react';
import { useHistory } from 'react-router-dom';

import { Settings } from '@material-ui/icons';

import PlantList from './PlantList';

import './Dashboard.css';


function Dashboard() {
    const { push } = useHistory();

    return (
        <div className="box py-5 px-6">
            <div className="box-header mb-5">
                <div className="has-text-centered box-header-center">
                    <h2 className="title is-4">Dashboard</h2>
                </div>
                <div className="has-text-centered">
                    <Settings className="settings-button" onClick={() => push('/settings')}/>
                </div>
            </div>
            <div className="plants-wrapper">
                <h3 className="title is-5 has-text-centered mb-5">My Plants</h3>
                <PlantList />
                <div className="has-text-centered mt-6">
                    <button className="button">Create a New Plant</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
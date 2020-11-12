import React from 'react';

import { Clear } from '@material-ui/icons';

import './PlantForm.css';

function PlantForm({ setIsShowPlantForm }) {
    return (
        <div className="plant-form box mt-6">
            <div className="box-header mb-5">
                <div className="has-text-centered box-header-center">
                    <h2 className="title is-4">Add a New Plant</h2>
                </div>
                <div className="has-text-centered">
                    <Clear className="settings-button" onClick={() => setIsShowPlantForm(false)} />
                </div>
            </div>
            <form className="container mx-6">
                <div className="field">
                    <label className="label">Nickname</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Species</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">H2O Frequency</label>
                    <div className="control">
                        <input className="input" type="number" />
                    </div>
                </div>
                <div className="field is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                        <button className="button is-primary">Add Plant</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PlantForm;

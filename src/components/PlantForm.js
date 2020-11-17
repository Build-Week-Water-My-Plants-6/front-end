import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postUserPlant } from '../actions/index';

import { Clear } from '@material-ui/icons';

import './PlantForm.css';

const initialFormValues = {
    name: "",
    species: "",
    waterSchedule: ""
};

function PlantForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues);

    function onSubmit (e) {
        e.preventDefault();
        const newPlant = {
            ...formValues
        };
        props.postUserPlant(newPlant);
        props.setIsShowPlantForm(false);
    };

    function onChange (e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    return (
        <div className="plant-form box mt-6">
            <div className="box-header mb-5">
                <div className="has-text-centered box-header-center">
                    <h2 className="title is-4">Add a New Plant</h2>
                </div>
                <div className="has-text-centered">
                    <Clear className="settings-button" onClick={() => props.setIsShowPlantForm(false)} />
                </div>
            </div>
            <form className="container mx-6" onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Nickname</label>
                    <div className="control">
                        <input name="name" value={formValues.name} onChange={onChange} className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Species</label>
                    <div className="control">
                        <input name="species" value={formValues.species} onChange={onChange} className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">H2O Frequency</label>
                    <div className="control">
                        <input name="waterSchedule" value={formValues.waterSchedule} onChange={onChange} className="input" type="string" />
                    </div>
                    <p class="help">Water in X days. For example, "Water in 3 days"</p>
                </div>
                <div className="field is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                        <button type="submit" className="button is-primary">Add Plant</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default connect(null, { postUserPlant })(PlantForm);
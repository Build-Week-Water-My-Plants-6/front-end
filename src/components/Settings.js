import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    phonenumber: "",
    password: ""
};

function Settings() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const { push } = useHistory();

    function onChange(e) {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="settings box py-5 px-6">
            <div className="box-header has-text-centered mb-5">
                <h2 className="title is-4">Settings</h2>
            </div>
            <form className="mx-6">
                <div className="field">
                    <label className="label">Phone Number</label>
                    <div className="control">
                        <input className="input" type="tel" required />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" required />
                    </div>
                </div>
                <div className="field is-grouped is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                        <button className="button is-primary">Update</button>
                    </div>
                    <div className="control">
                        <button className="button" onClick={() => push('/')}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Settings;

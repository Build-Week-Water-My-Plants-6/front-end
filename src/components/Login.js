import React from 'react';

import './Login.css';

function Login() {
    // Setup component state for the form management

    // Write event handlers (onChange, onSubmit)

    return (
        <div className="login box py-5 px-6">
            <div className="box-header has-text-centered mb-6">
                <h2 className="title is-4">Login</h2>
            </div>
            <form className="mx-6">
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                        <button className="button">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
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
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input class="input" type="text" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="text" />
                    </div>
                </div>
                <div className="control has-text-centered mt-5 mb-1">
                    <button className="button">Login</button>
                </div>
            </form>
        </div>
    )
};

export default Login;
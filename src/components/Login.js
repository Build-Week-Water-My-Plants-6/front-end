import React, { useState, useEffect } from 'react';
import * as yup from "yup"
import axios from "axios"

import './Login.css';

function Login() {
    // Setup component state for the form management

    //initial form state
    const initialFormState = {
        username:"",
        password:"",
    }

    //temp state used to set state
    const [user, setUser] = useState([]);

    //server error
    const [serverError, setServerError] = useState("");

    //managing state from form inputs
    const [formState, setFormState] = useState(initialFormState)

    //control whether or not the form can be submited if there are errors in form validation 
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    //managing state errors, empty unless inline validation (validateInput) updates key/value pair to have error
    const [errors, setErrors] = useState(initialFormState);

    //schema used for all validation to determine whether the input is valid or not

    const formSchema = yup.object().shape({
        username: yup.string().required("Username is required").min(2,"Please input at least 2 characters"),
        password: yup
        .string()
        .required("Please input a password")
        // .min(5)
        .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Password Must Contain at least 5 Characters, One Uppercase, One Lowercase, One Number and one special case Character")

    })

    // inline validation, validation one key/value pair

    const validateChange = event => {
        yup
        //get the value of schema at key "event.value.username" -> "username="
        .reach(formSchema, event.target.name)
        //value in input
        .validate(event.target.value)
        .then(valid => {
            setErrors({...errors, [event.target.name]: ""})
        })
        .catch(error => {
            //if failing validation, set error in state
            console.log("error", error);
            setErrors({...errors, [event.target.name]: error.errors[0]})
        })
    }

    //whenever state updates, validate the entire form, if valid, then change the button to be enabled

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
            setIsButtonDisabled(!valid)
        })
    }, [formState]);

    //onSubmit function
    const formSubmit = event => {
        event.preventDefault();

        //send out POST request with object as second param (formState)

        axios
        .post('https://reqres.in/api/users', formState)
        .then(response => {
            //update temp state with value to display
            setUser(response.data);

            //clear state
            setFormState(initialFormState)

            //clear any server error
            setServerError(null)
        })
        .catch(error => {
            setServerError("Some error occurred")
        })
    }

    //onChange function
    const inputChange = event => {
        event.persist();
        const newUserData = {
            ...formState,
            [event.target.name]: event.target.value
        };
        validateChange(event);
        setFormState(newUserData)
    };



    // Write event handlers (onChange, onSubmit)
    
    return (
        <div className="login box py-5 px-6">
            <div className="box-header has-text-centered mb-6">
                <h2 className="title is-4">Login</h2>
            </div>
            <form className="mx-6" onSubmit={formSubmit}>
            {serverError ? <p className="error">{serverError}
            </p> : null}
                <div class="field">
                    <label class="label" htmlForm="username"></label>
                        Username
                    <div class="control">
                        <input 
                        class="input" 
                        type="text" 
                        id="username"
                        name="username"
                        onChange={inputChange}
                        value={formState.username}
                        />
                        {errors.username.length > 0 ? <p className="error">{errors.username}
                        </p> : null}
                    </div>

                </div>
                <div class="field">
                    <label class="label" htlmForm="password">Password</label>
                    <div class="control">
                        <input 
                        class="input" 
                        type="text" 
                        name="password"
                        id="password"
                        onChange={inputChange}
                        value={formState.password}
                        />
                        {errors.password.length > 0 ? <p className="error">{errors.password}
                        </p> : null}
                    </div>
                </div>
                <div className="control has-text-centered mt-5 mb-1">
                    <button 
                    className="button"
                    id="submit"
                    disabled={isButtonDisabled}
                    type="submit">
                        Login
                        </button>
                </div>
            </form>
        </div>
    )
};

export default Login;
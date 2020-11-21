import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Signup() {
    const { push } = useHistory();
    // Setup component state for the form management

    //initial form state
    const initialFormState = {
        fullname:"",
        username:"",
        password:"",
        phonenumber:"",
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
        fullname: yup
        .string()
        .required()
        .min(2),
        username: yup
        .string()
        .required("Username is required")
        .min(2, "Please input at least 2 characters"),
        password: yup
        .string()
        .required("Please input your password")
        .min(5, "Must contain at least 5 characters"),
        phonenumber: yup
        .string()
        .required()
        .min(10, "Please input a valid phone number")

    })

    // inline validation, validation one key/value pair

    const validateChange = event => {
        yup
        //get the value of schema at key "event.value.name" -> "name="
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
        .post('https://water-my-plant-app.herokuapp.com/api/auth/register', formState)
        .then(response => {
            // set token in local storage
            localStorage.setItem('token', response.data.token);

            //update temp state with value to display
            setUser(response.data);

            //clear state
            setFormState(initialFormState)

            //clear any server error
            setServerError(null)

            // push user to the dashboard route

            push('/dashboard');
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
            [event.target.name]: event.target.name === "phonenumber" ?event.target.value.replace(/\D/,''): event.target.value
        };
        validateChange(event);
        setFormState(newUserData)
    };

    

    return (
        <div className="login box py-5 px-6">
            <div className="box-header has-text-centered mb-6">
                <h2 className="title is-4">Sign Up</h2>
            </div>

            <form className="mx-6" onSubmit={formSubmit}>
            {serverError ? <p className="error">{serverError}
            </p> : null}
            <div className="field">
                    <label className="label" htmlform="fullname">Name</label>
                    <div className="control">
                        <input 
                        className="input"
                        type="text" 
                        id="fullname"
                        name="fullname"
                        onChange={inputChange}
                        value={formState.fullname}
                        />
                        {errors.fullname.length > 0 ? <p className="error">{errors.fullname}
                        </p> : null}
                </div>
                </div>
                <div className="field">
                    <label className="label" htmlform="username">Username</label>
                    <div className="control">
                        <input 
                        className="input"
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

                <div className="field">
                    <label className="label" htmlform="password">Password</label>
                    <div className="control">
                        <input 
                        className="input"
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
                <div className="field">
                    <label className="label" htmlform="phonenumber">Phone Number</label>
                    <div className="control">
                        <input 
                        maxLength="10"
                        className="input"
                        type="text" 
                        id="phonenumber"
                        name="phonenumber"
                        onChange={inputChange}
                        value={formState.phonenumber}
                        onkeypress="return isNumber(event)"
                        />
                        {errors.phonenumber.length > 0 ? <p className="error">{errors.phonenumber}
                        </p> : null}
                </div>
                </div>

                <div className="field is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                            <button
                            className="button"
                            id="submit"
                            disabled={isButtonDisabled}
                            type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                
            </form>
        </div>
    );
};

export default Signup;

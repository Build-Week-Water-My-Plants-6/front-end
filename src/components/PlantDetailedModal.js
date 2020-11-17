import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
import { Clear } from '@material-ui/icons';

import { connect } from 'react-redux';
import { putPlant } from '../actions/index';

const modalStyle = {
    overlay: {
        margin: '0 auto',
        background: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        top: 'none',
        left: 'none',
        right: 'none',
        bottom: 'none',
        position: 'relative',
        margin: '0 auto',
        width: '50vw',
        hieght: '60vh',
        maxWidth: '500px',
        maxHeight: '600px'
    },
    input: {
        border: 'none',
        outline: 'none',
        fontSize: '1.5rem',
        fontWeight: '600',
        textAlign: 'center',
        width: '60%',
        cursor: 'text'
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

const initialFormValues = {
    name: "",
    species: "",
    waterSchedule: ""
};

function PlantDetailedModal(props) {
    const [formValues, setFormValues] = useState(initialFormValues);

    /* FORM EVENT HANDLERS */

    function onChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        const newPlant = {
            ...formValues
        };
        props.putPlant(props.plant.id, newPlant);
        props.setIsModalOpen(false);
    }

    /* MODAL EVENT HANDLERS */
    function closeModal() {
        props.setIsModalOpen(false);
    };

    /* SIDE EFFECTS */
    useEffect(() => {
        setFormValues({ name: props.plant.plant_name, species: props.plant.plant_species, waterSchedule: props.plant.water_schedule });
    }, [props.plant]);

    Modal.setAppElement('#root');
    return (
        <Modal isOpen={props.isModalOpen} style={modalStyle}>
            <div>
                <div className="box-header mb-5">
                    <div className="has-text-centered box-header-center">
                        <div style={modalStyle.inputWrapper}>
                            <input name="name" value={formValues.name} onChange={onChange} style={modalStyle.input} autoFocus className="blinking" />
                        </div>
                    </div>
                    <div className="has-text-centered is-flex">
                        <Clear className="header-button" onClick={closeModal} />
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="container mx-6">
                <div className="field">
                    <label className="label">Species</label>
                    <div className="control">
                        <input name="species" value={formValues.species} onChange={onChange} className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">H2O Frequency</label>
                    <div className="control">
                        <input name="waterSchedule" value={formValues.waterSchedule} onChange={onChange} className="input" type="text" />
                    </div>
                </div>
                <div className="field is-flex is-justify-content-center mt-5 mb-1">
                    <div className="control">
                        <button className="button is-primary">Update Plant</button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default connect(null, { putPlant })(PlantDetailedModal);
import React from 'react';

import Modal from 'react-modal';
import { Clear } from '@material-ui/icons';

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

function PlantDetailedModal({ isModalOpen, setIsModalOpen }) {
    /* MODAL EVENT HANDLERS */
    const closeModal = () => {
        setIsModalOpen(false);
    };

    Modal.setAppElement('#root');
    return (
        <Modal isOpen={isModalOpen} style={modalStyle}>
            <div>
                <div className="box-header mb-5">
                    <div className="has-text-centered box-header-center">
                        <div style={modalStyle.inputWrapper}>
                            <input value="Aloe Vera" style={modalStyle.input} autoFocus className="blinking" />
                        </div>
                    </div>
                    <div className="has-text-centered is-flex">
                        <Clear className="header-button" onClick={closeModal} />
                    </div>
                </div>
            </div>
            <form className="container mx-6">
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
                        <button className="button is-primary">Update Plant</button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default PlantDetailedModal;

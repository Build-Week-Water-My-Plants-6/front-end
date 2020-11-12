import React from 'react'

import './PlantCard.css';

import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paper: {
        width: 140,
        display: 'flex',
        flexDirection: 'column',
    },
    img: {
        flex: 1,
        borderBottom: '1px solid gainsboro',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px'
    }
}));

function PlantCard() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <img className={classes.img} src="https://vibrant-mayer-1ae68b.netlify.app/images/gallery/thumbs/03.jpg" alt="Plants" />
            <div className="box has-text-centered ">
                <span className="title is-6">Aloe Vera</span>
            </div>
        </Paper>
    )
};

export default PlantCard;

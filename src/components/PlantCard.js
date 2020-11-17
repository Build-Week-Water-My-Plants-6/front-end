import React from 'react';

import { makeStyles, Paper } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    paper: {
        width: 170,
        display: 'flex',
        flexDirection: 'column',
    },
    topWrapper: {
        flex: 1,
        borderBottom: '1px solid gainsboro',
        marginBottom: '-5px',
        position: 'relative'
    },
    clear: {
        position: 'absolute',
        right: 0,
        color: 'white',
        cursor: 'pointer'
    },
    img: {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        marginBottom: '-6px'
    },
    bottomWrapper: {
        cursor: 'pointer',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function PlantCard({ plant, onPlantClick }) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <div className={classes.topWrapper}>
                <Clear className={classes.clear} />
                <img className={classes.img} src="https://vibrant-mayer-1ae68b.netlify.app/images/gallery/thumbs/03.jpg" alt={plant.plant_name} />
            </div>
            <div onClick={() => {onPlantClick(plant.id)}} className={classes.bottomWrapper}>
                <span className="title is-6 has-text-centered">{plant.plant_name}</span>
            </div>
        </Paper>
    )
};

export default PlantCard;
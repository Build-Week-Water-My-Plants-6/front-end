import React from 'react';

import { Grid } from '@material-ui/core';

import PlantCard from './PlantCard';

function PlantList({ plants, onPlantClick }) {
    return (
        <Grid container justify="center" spacing={3}>
            {
                plants.map(plant => {
                    return (
                        <Grid key={plant.id} item>
                            <PlantCard plant={plant} onPlantClick={onPlantClick} />
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default PlantList;
import React from 'react';

import { Grid } from '@material-ui/core';

import PlantCard from './PlantCard';

function PlantList() {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
            <Grid item>
                <PlantCard />
            </Grid>
        </Grid>
    );
};

export default PlantList;

import { Grid } from '@material-ui/core'
import React from 'react'
import Card from "./card/card"
import "./cards.css"
function Cards() {
    return (
        <div className="Cards">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card/>
                </Grid>
                <Grid item xs={3}>
                    <Card/>
                </Grid>
                <Grid item xs={3}>
                    <Card/>
                </Grid>
                <Grid item xs={3}>
                    <Card/>
                </Grid>      
            </Grid>
        </div>
    )
}

export default Cards

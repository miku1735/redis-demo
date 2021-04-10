import { Grid } from '@material-ui/core'
import React from 'react'
import "./Tabs.css"
function Tabs({headerState}) {
    return (
        <div className={`Tabs ${headerState?"active":""}`}>
            <Grid container spacing={3} >
                <Grid item xs={3}>
                    <h3>Products</h3>
                </Grid>
                <Grid item xs={3}>
                    <h3>Downloads</h3>
                </Grid>
                <Grid item xs={3}>
                    <h3>Enterprise</h3>
                </Grid>
                <Grid item xs={3}>
                    <h3>Learn</h3>
                </Grid>
            </Grid>
        </div>
    )
}

export default Tabs

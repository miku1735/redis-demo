import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./TopDetails.css"
const useStyles = makeStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //   backgroundColor: "#2375BB",
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      boxShadow: '0px 0px 7px 2px #2375BB',

    },
    label: {
      textTransform: 'capitalize',
      userSelect: "none"
    },
  });


function TopDetails() {
    const classes = useStyles();
    const handleClick = id =>{
        window.scrollTo(0, 400);
};
    return (
        <div className="Top">
            <div className="TopPic"/>
            <div className="TopDetails">
                <Grid container  justify="center" className="TopDetails__mainGrid">
                    <Grid container item alignItems="center" justify="center" xs={12} >
                        <Grid container item display="flex" alignItems="center" justify="center" xs={12} >
                            <h1>LET'S TEST </h1>
                            <h1 className="redis">{"REDIS CACHE"}</h1>
                        </Grid>
                        <Grid container item alignItems="center" justify="center" xs={12} >
                            <h3>IBM internal project to showcase the use of REDIS database for ICET </h3>
                        </Grid>
                    </Grid>
                    <Grid container item alignItems="center" justify="center" xs={12} >
                        <Button classes={{
                            root: classes.root,
                            label: classes.label,}}
                            onClick={handleClick}
                            className="TopDetails__button">
                            Get Started
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}

export default TopDetails

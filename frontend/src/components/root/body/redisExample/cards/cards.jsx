import { Grid } from '@material-ui/core'
import React from 'react'
import Card from "./card/card"
import "./cards.css"

function Cards() {
    let noOfCards = Array(4).fill("").map((_,index)=> index/10)
    console.log(noOfCards)
    return (
        <div className="Cards">
            <Grid container spacing={3}>
                {
                    noOfCards.map(val=>
                        <Grid item xs={3} >
                            <Card val={val}/>
                        </Grid>      
                        ) 
                }
            </Grid>
        </div>
    )
}

export default Cards

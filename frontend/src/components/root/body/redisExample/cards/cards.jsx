import { Grid } from '@material-ui/core'
import React from 'react'
import Card from "./card/card"
import "./cards.css"

function Cards() {
    let noOfCards = Array(4).fill("").map((_,index)=> index/10)

    let data = [{
        "val":0.1,
        "name":"Mayank",
        "description":"Defines all HR training programs, and assigns the authority/responsibility of HR and managers within those training programs",
        "pic":"https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
    },{
        "val":0.2,
        "name":"Rahul",
        "description":"Accomplished and highly-organized Project Manager (PMP certified) with a Ph.D. in physics and over 10 years of professional experience",
        "pic":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },{
        "val":0.3,
        "name":"Sandy",
        "description":"Enthusiastic IT Specialist with 6+ years experience including 3 years with a major healthcare provider. Skilled in security and HIPAA.",
        "pic": "https://static.toiimg.com/photo/msid-75109928/75109928.jpg?163894"
    },{
        "val":0.4,
        "name":"Binod",
        "description":"Forward-thinking graduate from Columbia University with a BS in Computer Science. Eager to join ABC Inc. to develop information systems.",
        "pic":"https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg"
    }]


    console.log(noOfCards)
    return (
        <div className="Cards">
            <Grid container spacing={3}>
                {
                    data.map(des=>
                        <Grid item xs={3} >
                            <Card des={des}/>
                        </Grid>      
                        ) 
                }
            </Grid>
        </div>
    )
}

export default Cards

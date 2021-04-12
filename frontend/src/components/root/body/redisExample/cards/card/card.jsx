import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
import gsap from "gsap";
import "./card.css"
import { Typography } from '@material-ui/core';
function Card({des}) {
    let CardRef = React.useRef(null) 
    useEffect(()=>{
        VanillaTilt.init(CardRef.current, {
            max: 10,
            glare: true,
            speed: 100
        });
    },[])
    useEffect(()=>{
        gsap.from(CardRef.current,{opacity:0,y:25,duration:des.val*6,delay:0.5})
    },[])
    return (
        <div ref={CardRef} className="Card">
            <img
                className="Card__image"
                src={des.pic}
            />
            <Typography className="Card__Typo1" variant="h4">
                {des.name}
            </Typography>
            <Typography className="Card__Typo2" variant="h6">
                {des.description}
            </Typography>
        </div>
    )
}

export default Card

import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
import gsap from "gsap";
import "./card.css"
function Card({val}) {
    let CardRef = React.useRef(null) 
    useEffect(()=>{
        VanillaTilt.init(CardRef.current, {
            max: 10,
            glare: true,
            speed: 100
        });
    },[])
    useEffect(()=>{
        gsap.from(CardRef.current,{opacity:0,y:25,duration:val*5})
    },[])
    return (
        <div ref={CardRef} className="Card">
            hello
        </div>
    )
}

export default Card

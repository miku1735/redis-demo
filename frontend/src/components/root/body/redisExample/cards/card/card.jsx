import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
import "./card.css"
function Card() {
    let CardRef = React.useRef(null) 
    useEffect(()=>{
        VanillaTilt.init(CardRef.current, {
            max: 10,
            glare: true,
            speed: 100
        });
    },[])
    
    return (
        <div ref={CardRef} className="Card">
            hello
        </div>
    )
}

export default Card

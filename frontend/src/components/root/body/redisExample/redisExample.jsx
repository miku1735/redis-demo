import { Button } from '@material-ui/core'
import React from 'react'
import Cards from './cards/cards'
import gsap from "gsap";
import "./RedisExample.css"
function RedisExample() {
    let [renderCards, setRenderCards] = React.useState(false)
    let [renderbutton, setRenderButton] = React.useState(0)
    let loadButton = React.useRef(null)
    React.useEffect(()=>{
        gsap.to(loadButton.current,{opacity:1,x:-40,y:renderbutton,duration:0.5})
    },[renderbutton])
    return (
        <div className="RedisExample">
            <Button 
                ref={loadButton}
                className="RedisExample__load"
                onClick={()=>{setRenderCards(!renderCards);setRenderButton(-240)}}
            >
                {(renderCards && renderbutton ) ? "Refresh":"Load-it"}
            </Button>
            {
                renderCards && <Cards/>
            }
        </div>
    )
}

export default RedisExample

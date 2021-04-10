import React from 'react'
import TopDetails from './topDetails/TopDetails'

function Body() {
    var body = React.createRef();
    return (
        <div  className="Body">
            <TopDetails body={body}/>
            <div className="check" id="check"></div>
        </div>
    )
}

export default Body

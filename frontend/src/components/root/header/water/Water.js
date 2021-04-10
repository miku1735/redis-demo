import React from 'react'
import "./Water.css"
function Water({headerState}) {
    return (
        <div className="Water">
            <div className={`Water__water ${headerState?"active":""}`}>
                <h2>IBM</h2>
                <h2>IBM</h2>
            </div>
        </div>
    )
}

export default Water

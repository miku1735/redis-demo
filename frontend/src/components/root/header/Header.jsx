import React from 'react'
import Water from './water/Water'
import "./Header.css"
import { Grid } from '@material-ui/core'
import Tabs from './tabs/Tabs'
import SearchIcon from '@material-ui/icons/Search';
function Header() {

    let [headerState, setHeaderState] = React.useState(false)

    let handleScroll = e => {
          console.log(window.scrollY)
          if(window.scrollY>10){
            setHeaderState(true)
          }
          else{
            setHeaderState(false)
          }
      }
    window.addEventListener("scroll",handleScroll)
    return (
        <div className={`Header ${headerState?"active":""}`}>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={3} >
                    <Water headerState={headerState} />
                </Grid>
                <Grid item xs={5}>
                    <Tabs headerState={headerState}/>
                </Grid>
                <Grid item xs={3} className={`Header__icon ${headerState?"active":""}`}>
                    <SearchIcon className={`Header__icon ${headerState?"active":""}`}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Header

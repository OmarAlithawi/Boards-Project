import React from 'react'
import { Typography  ,Box } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import firebase from "../firebase";
import Sidebar from "../Bars/Sidebar"
import useStyles from "./StyleHome";
import SixHats from '../../container/SixHats'
import Navbar from '../Navbar/Navbar'





function Home(props) {

	const classes = useStyles();

    if(!firebase.getCurrentUserName()) {
        //user is not loggen in we run this function
       // alert('Please login first.')
        props.history.replace('/login')
        return null 
    }
    
 

    return (
        <div className="home-body">
            <Sidebar />
            <Navbar />
            <main className={classes.main}>
                <div>
                <Typography className = "heading" component="h1" variant="h5" >
                    Hello {firebase.getCurrentUserName()}
                </Typography>
                </div>
                    <SixHats />
		    </main>
        </div>
        )
}

export default withRouter(Home)

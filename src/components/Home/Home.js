import React, {useEffect , useState} from 'react'
import { Typography  ,Box } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import firebase from "../auth/firebase";
import Sidebar from "../bars/Sidebar"
import useStyles from "./StyleHome";
import SixHats from '../hats/SixHats'
import Navbar from '../bars/Navbar'


function Home(props) {

    
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
     const timerID = setInterval( () => tick(), 1000 );
     return function cleanup() {
         clearInterval(timerID);
       };
    } , []);
   
      const tick = () => {
       setDate(new Date());
      }
     
    
     
    


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
            <main className={classes.main}>
                <div>
                <Typography className = "heading" component="h1" variant="h5" >
                     Hello {firebase.getCurrentUserName()}
                     <h1>{date.toLocaleTimeString('en-US')}</h1>
                </Typography>
                </div>
                
		    </main>
        </div>
        )
}

export default withRouter(Home)

/*
Hello {firebase.getCurrentUserName()}
*/
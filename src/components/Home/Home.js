import React, {useEffect , useState} from 'react'
import { Typography  } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import firebase from "../auth/firebase";
import Sidebar from "../bars/Sidebar"
import useStyles from "./StyleHome";




function Home(props) {

    // Clock
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
     // Clock ends
    
     const partOfTheDay = () => {
        if(date.getHours() < 12){
            return 'Good Morning'
        }else if(date.getHours() > 12 && date.getHours() < 18){
            return 'Good Afternoon'
        }else{
            return 'Good Night'
        }
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
                {partOfTheDay()} {firebase.getCurrentUserName()}
                     <h1>{date.toLocaleTimeString()}</h1>
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
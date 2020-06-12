import React from 'react'
import Sidebar from "../components/bars/Sidebar"
import SixHats from '../components/hats/SixHats'
import Navbar from '../components/bars/Navbar'
import {useSelector} from 'react-redux';
import useStyles from "../components/home/StyleHome";
import { Typography  ,Box } from '@material-ui/core'

export default function BoardRender() {
    const boardName = useSelector(state => state.boardNameReducer);
      
	const classes = useStyles();
    return (
        <div>
            
            <Sidebar />
          
            <main className={classes.boards}>
            <Typography className = "heading" component="h1" variant="h5" >
                 {boardName}
            </Typography>
           <SixHats /> 
           </main>
        </div>
    )
}

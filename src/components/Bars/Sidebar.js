import React, {useEffect , useState} from 'react';
import { Drawer, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Appbar from './Appbar';
import useStyles from './StyleBars'
import {db} from '../../components/firebase';
import {currentBoardID , collectionName , boardsIDs} from '../../actions';
import {useDispatch} from 'react-redux';




export default function Sidebar(){

  const dispatch = useDispatch();
  
  const createBoards = async() =>{
  
    const collectionsNames = ['blue-hat' , 'yellow-hat' , 'white-hat' , 'red-hat' , 'black-hat' , 'green-hat'];
    const createBoard = await db.collection('container').add({});
    collectionsNames.forEach( async(collection) => {
    const createCollections = await db.collection('container').doc(createBoard.id).collection(collection).add({});
  })
  dispatch(currentBoardID(createBoard.id));
  dispatch(collectionName(collectionsNames));
  dispatch(boardsIDs(createBoard.id));
  
  }

  const classes = useStyles();
    return (
      <div className={classes.root}>
        <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
          <Appbar />
          <Toolbar className={classes.toolbar} />
          <List>
            {['Dashboard', 'Starred'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <DashboardIcon className={classes.icons} /> : 
                  <GradeRoundedIcon className={classes.icons} />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          
          <IconButton  onClick = {createBoards} className={classes.plusButton} style={{ backgroundColor: 'transparent' }} >
            <AddCircleRoundedIcon className={classes.plusButtonInside} />
          </IconButton>

          {/* Here will be the created project names/lists  by user  */}
          <List>
            {['React Project', 'JavaScript', 'TypeScript As...'].map((text) => (
              <ListItem button key={text}>
                <ListItemIcon> <LabelImportantIcon className={classes.icons} /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
}

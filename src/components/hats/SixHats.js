import React,{useState} from 'react';
import Hat from './Hat';
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box , List ,ListItem ,Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from './StyleHats'
import {useSelector} from 'react-redux';

export default function SixHats() {

    const currentBoardId = useSelector(state => state.currentBoardIDReducer);
    const collectionsName =useSelector(state => state.collectionNameReducer);
    const [isBoard , setIsBoard] = useState(true);
    const [open, setOpen] = useState(true);
// rendering hats



  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

   const renderHatsBoard = () => {
    return collectionsName.map((collection , index) => {
            return(
              <Grid container  >
                  <Grid  container item xs={12} spacing={2}>
                     {<Hat handleClick = {handleClick}  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                 </Grid>
              </Grid>
            )
        })
   }

   const renderHatsList = () =>{
    return collectionsName.map((collection , index) => {
        return(
             <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}> 
                <InputLabel id ="label">{collection}</InputLabel>
                <ListItem button onClick={handleClick} >
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <ListItem >
                    {<Hat isBoard ={isBoard} open ={open}  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                </ListItem>
          </List>
          
          
        )
    })
   }

   const boardOrList = () => {
       setIsBoard(!isBoard);
   }

   const boardOrListBtn = () => {
    if(isBoard){
       return <button onClick = {boardOrList}>List</button>
    }else{
       return <button onClick = {boardOrList}>Board</button>
    }
   }

    return (
        <div>
            
        <div className ="toggleBtn"> {boardOrListBtn()} </div>
         {isBoard ?<div className="board">{renderHatsBoard()}</div> : renderHatsList()}
             
        </div>
    )
}


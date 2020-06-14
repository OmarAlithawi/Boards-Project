import React,{useState} from 'react';
import Hat from './Hat';
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box} from '@material-ui/core'

import {useSelector} from 'react-redux';

export default function SixHats() {

    const currentBoardId = useSelector(state => state.currentBoardIDReducer);
    const collectionsName =useSelector(state => state.collectionNameReducer);
    const [isBoard , setIsBoard] = useState(true);
// rendering hats

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 250,
      marginLeft:"auto",
      marginRight:"auto"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

   const renderHatsBoard = () => {
    return collectionsName.map((collection , index) => {
            return(
              <Grid container >
                  <Grid container item xs={12} spacing={2}>
                 {<Hat  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                 </Grid>
              </Grid>
            )
        })
   }

   const renderHatsList = () =>{
    return collectionsName.map((collection , index) => {
        return(
            <Box component="div" display="block">
            <FormControl className={classes.formControl} display="block">
                <InputLabel id ="label">{collection}</InputLabel>
                <Select className={classes.selectEmpty} labelId = "label" id ="select" value ={20}>
                    {<Hat  key = {index} collectionName = {collection}  boardID = {currentBoardId} />}
                </Select>
          </FormControl>
          </Box>
        )
    })
   }

   const boardOrList = () => {
       if(isBoard){
           setIsBoard(false);
       }else{
           setIsBoard(true);
       }
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
            
         {boardOrListBtn()}
         {isBoard ?<div className="board">{renderHatsBoard()}</div> : renderHatsList()}
             
        </div>
    )
}


import React,{useState, useEffect} from 'react'
import {db} from '../auth/firebase'
import  '../../App.css'
import HatItems from './HatItems'
import {useSelector , useDispatch} from 'react-redux';
import {allItemsIdsAction} from '../../actions'
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box , List ,ListItem , Collapse ,ListItemIcon } from '@material-ui/core'
import useStyles from './StyleHats'
import InboxIcon from '@material-ui/icons/MoveToInbox';


export default function Hat(props) {

  const dispatch = useDispatch();

  const classes = useStyles();
  
  const listItemId = useSelector(state => state.listItemIdReducer);
  const itemsIDs = useSelector(state => state.allItemsIdsReducer);
  const collectionsNames = useSelector(state => state.collectionNameReducer);
  const [hatItemsData , setHatItemsData] = useState([]);
  const currentBoardId = useSelector(state => state.currentBoardIDReducer);
  const [data , setData] = useState([]);
  
  
  const liveUpdateData = async () =>{
   if(props.boardID){ 
    await  db.collection("container").doc(props.boardID).collection(props.collectionName).onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
          const objectNotEmpty = Object.keys(change.doc.data()).length > 0;
          console.log(change)
            if(change.type === "added" && objectNotEmpty){ 
              setHatItemsData(hatItemsData => [...hatItemsData ,change.doc]); 
              dispatch(allItemsIdsAction(change.doc.id));
            }else if (change.type === "modified" && objectNotEmpty){
              setHatItemsData(hatItemsData => [...hatItemsData ,change.doc]); 
            }
        })
      }) 
    }
  }

  
  // this will run once when the program will render and when we change the board
  useEffect(() => {
    liveUpdateData();
    setHatItemsData([]);
  }, [props.boardID ])

  const filteringListItems = (id) => {
    const filteredData = hatItemsData.filter(doc => {
      return doc.id !== id ;
    })
    setHatItemsData(filteredData);
}

  const deleteItem =  (e) =>{
    e.preventDefault()
    e.persist()
    console.log(e.target)
    const collectionName = e.target.parentNode.parentNode.getAttribute("name");
    const documentId = e.target.parentNode.getAttribute("doc-id");
    console.log(documentId)
     db.collection("container").doc(currentBoardId).collection(collectionName).doc(documentId).delete();
     filteringListItems(documentId);
    
  }

  const sendUpdateValue = (e , itemId ,inputValue) => {
    e.preventDefault()
    e.persist()
    db.collection("container").doc(currentBoardId).collection(props.collectionName).doc(itemId).update({ todo: inputValue });
    filteringListItems(itemId);
  }


  const postData = async (e) => {
    e.preventDefault();
    e.persist();
    const inputValue = e.target[0].value;
    const collectionName = e.target[0].name;
    await db.collection('container').doc(props.boardID).collection(props.collectionName).add({
      todo:inputValue,
    });
   e.target.reset();
  }

  const CollapseList = () => {
    return(
      <Collapse in={props.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding >
                        <ListItem button className={classes.nested}>
                          {<HatItems sendUpdateValue ={sendUpdateValue} open ={props.open} deleteItem = {deleteItem}  name ={props.collectionName} data = {hatItemsData}  />}
                        </ListItem> 
                        </List>
                    </Collapse>
    )
  }

  const boardItemsRender = () => {
    return <div><HatItems sendUpdateValue ={sendUpdateValue}  open ={props.open} deleteItem = {deleteItem}  name ={props.collectionName} data = {hatItemsData}  /></div>
  }
  console.log(props.open)
    return (
        <div className = "column" >
          
            <form onSubmit = {(e) => postData(e)} >
                <input type="text"  name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button onKeyDown= {(e) => e.key === 'Enter' && postData(e)}>Add item</button>
            </form>
              {props.isBoard === undefined ? boardItemsRender() : CollapseList() }          
        </div>
    )
}
     

 
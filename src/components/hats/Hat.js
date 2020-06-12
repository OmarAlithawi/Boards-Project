import React,{useState, useEffect} from 'react'
import {db} from '../auth/firebase'
import  '../../App.css'
import HatItems from './HatItems'
import {useSelector , useDispatch} from 'react-redux';
import {allItemsIdsAction} from '../../actions'

export default function Hat(props) {

  const dispatch = useDispatch();

  
  const listItemId = useSelector(state => state.listItemIdReducer);
  const itemsIDs = useSelector(state => state.allItemsIdsReducer);
  const [hatItemsData , setHatItemsData] = useState([]);
  const currentBoardId = useSelector(state => state.currentBoardIDReducer);

  
  
  const liveUpdateData = async () =>{
   if(props.boardID){ 
    await  db.collection("container").doc(props.boardID).collection(props.collectionName).onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
          const objectNotEmpty = Object.keys(change.doc.data()).length > 0;
            if(change.type === "added" && objectNotEmpty){ 
              setHatItemsData(hatItemsData => [...hatItemsData ,change.doc]); 
              dispatch(allItemsIdsAction(change.doc.id));
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

  const filteringListItems = () => {
    const filteredData = hatItemsData.filter(doc => {
      return doc.id !== listItemId;
    })
    setHatItemsData(filteredData);
}

  const deleteItem =  (e) =>{
    e.preventDefault()
    let collectionName = e.target.parentNode.parentNode.getAttribute("name");
     db.collection("container").doc(currentBoardId).collection(collectionName).doc(listItemId).delete();
     filteringListItems();
    
  }

  const postData = async (e) => {
    e.preventDefault();
    e.persist();
    const inputValue = e.target[0].value;
    const collectionName = e.target[0].name;
    await db.collection('container').doc(props.boardID).collection(collectionName).add({
      todo:inputValue,
    });
   e.target.reset();
  }


    return (
        <div className = "column" >
            <form onSubmit = {(e) => postData(e)}>
                <input type="text" name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button>Add item</button>
            </form>
          <div>{<HatItems deleteItem = {deleteItem}  name ={props.collectionName} data = {hatItemsData}  />}</div>
        </div>
    )
}
     
   

 
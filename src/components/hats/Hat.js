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

  const filteringListItems = (id) => {
    const filteredData = hatItemsData.filter(doc => {
      return doc.id !== id ;
    })
    setHatItemsData(filteredData);
}

  const deleteItem =  (e) =>{
    e.preventDefault()
    e.persist()
    let collectionName = e.target.parentNode.parentNode.getAttribute("name");
    let documentId = e.target.parentNode.getAttribute("doc-id");
    console.log(documentId)
     db.collection("container").doc(currentBoardId).collection(collectionName).doc(documentId).delete();
     filteringListItems(documentId);
    
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


    return (
        <div className = "column" >
            <form onSubmit = {(e) => postData(e)} >
                <input type="text"  name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button onKeyDown= {(e) => e.key === 'Enter' && postData(e)}>Add item</button>
            </form>
          <div>{<HatItems deleteItem = {deleteItem}  name ={props.collectionName} data = {hatItemsData}  />}</div>
        </div>
    )
}
     
   

 
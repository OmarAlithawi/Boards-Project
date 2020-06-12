import React,{useState, useEffect} from 'react'
import {db} from '../auth/firebase'
import  '../../App.css'
import HatItems from './HatItems'
import {useSelector , useDispatch} from 'react-redux';
import {itemsIDs ,itemID} from '../../actions'

export default function Hat(props) {

  const dispatch = useDispatch();

  const currentBoardID = useSelector(state => state.currentBoardIDReducer);
  const itemsID = useSelector(state => state.itemsIDsReducer);
  const itemsIDss = useSelector(state => state.itemsIDsReducer);
  const [hatItemsData , setHatItemsData] = useState([])
  
  const liveUpdateData = async () =>{
   if(props.boardID){ 
    await  db.collection("container").doc(props.boardID).collection(props.collectionName).onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change =>{
            if(change.type === "added" && Object.keys(change.doc.data()).length > 0){ 
              setHatItemsData(hatItemsData => [...hatItemsData ,change.doc]);
              dispatch(itemsIDs(change.doc.id))
              dispatch(itemID(change.doc.id))
            }
            
        })
      }) 
    }
  }
  
  useEffect(() => {
    liveUpdateData();
    setHatItemsData([]);
  }, [props.boardID ])


  const postData = async (e) => {
    e.preventDefault();
    e.persist();
    await db.collection('container').doc(props.boardID).collection(e.target[0].name).add({
      todo:e.target[0].value,
    });
    
   e.target.reset();
  }

    


    return (
        <div className = "column" >
            <form onSubmit = {(e) => postData(e)}>
                <input type="text" name = {props.collectionName}  placeholder = {props.collectionName}/>
                <button>Add item</button>
            </form>
          <div>{<HatItems  name ={props.collectionName} data = {hatItemsData}  id = {currentBoardID} />}</div>
        </div>
    )
}
     
   

 
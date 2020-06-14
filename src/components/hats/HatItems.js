import React from 'react'
import {useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'


export default function HatItems(props) {

    const dispatch = useDispatch();
   

    return (
        <ul className = "list"  name ={props.name}>
        { props.data.map(doc =>{
                return( 
                    <div key ={doc.id} board-id ={props.id} doc-id = {doc.id} className = "listItems" >
                    <input type="checkbox"  className ="checkBox"/>
                    <li >{doc.data().todo}</li>
                    <button onClick = {(e) => {
                        dispatch(listItemIdAction(doc.id))
                        props.deleteItem(e)}}>del</button>
                      
                    </div> 
                    )
             })}
        </ul>
    )
}





/**
 * 



 const [isChecked , setIsChecked] = useState(false);

    const toggleIsChecked = () => {
        if(isChecked){
            setIsChecked(false);
        }else{
            setIsChecked(true);
        }
    }
 * 
 */
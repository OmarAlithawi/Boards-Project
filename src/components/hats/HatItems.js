import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {listItemIdAction} from '../../actions'


export default function HatItems(props) {

    const dispatch = useDispatch();
    const [isEditItem, setIsEditItem] = useState(false)
    const [updateItemValue, setUpdateItemValue] = useState("");
   
    const editForm =(id) => {
        return (
            <>
                <input type="text" onChange={e => setUpdateItemValue(e.target.value)}   /> 
                <button onClick={ (e) => {
                    props.sendUpdateValue(e ,id , updateItemValue);
                    setIsEditItem(false)} } style={{ fontSize: 15 }} >done
                </button>
            </>
        )
    }
   
    return (
        <ul className = "list"  name ={props.name}>
            {console.log(props.data)}
        { props.data.map(doc =>{
                return( 
                    <div key ={doc.id} board-id ={props.id} doc-id = {doc.id} className = "listItems" >
                        <input type="checkbox" className ="checkBox"/>
                        <li >{doc.data().todo}</li>
                        <button onClick = {(e) => {
                            dispatch(listItemIdAction(doc.id))
                            props.deleteItem(e)}}>del</button>
                            <button onClick ={() => setIsEditItem(!isEditItem)}>edit</button>
                      {isEditItem && editForm(doc.id) }
                    </div> 
                    )
             })}
        </ul>
    )
}





/**
 * 
import { Grid , InputLabel , Select , MenuItem , makeStyles , FormControl , Box , List ,ListItem , Collapse} from '@material-ui/core'

  <Collapse in={props.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding key ={doc.id} board-id ={props.id} doc-id = {doc.id} className = "listItems">
                        <ListItem button className={classes.nested}>
                            <input type="checkbox" className ="checkBox"/>
                            <li >{doc.data().todo}</li>
                            <button onClick = {(e) => {
                                dispatch(listItemIdAction(doc.id))
                                props.deleteItem(e)}}>del</button>
                        
                        </ListItem> 
                        </List>
                    </Collapse>

const [isChecked , setIsChecked] = useState(false);
 <input type="checkbox" onChange = { (e) => setIsChecked(e.target.checked)}  checked ={isChecked} className ="checkBox"/>
 * 
 */
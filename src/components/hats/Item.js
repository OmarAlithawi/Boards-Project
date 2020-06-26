import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listItemIdAction } from "../../actions";
import { FaRegTrashAlt } from "react-icons/fa";


export default function Item(props) {
  const dispatch = useDispatch();
  const [isEditItem, setIsEditItem] = useState(false);
  const [updateItemValue, setUpdateItemValue] = useState("");

  // to show the form when we want to edit

  const editForm = (id) => {
    return (
      <>
        <input
          type="text"
          defaultValue={props.doc.data().todo}
          onChange={(e) => setUpdateItemValue(e.target.value)}
        />

        <img src={require('./images/accept.png')}
          onClick={(e) => {
            props.updateItem(e, id, updateItemValue);
            setIsEditItem(false);
          }}
          className="editImg" />
          
      </>
    );
  };

  return (
    <div
      key={props.doc.id}
      board-id={props.id}
      doc-id={props.doc.id}
      className="listItems"
    >
      <input
        type="checkbox"
        className="checkBox"
        onClick={(e) => {
          e.persist();
          if (e.target.checked) {
            setTimeout(() => {
              if (e.target.checked) {
                e.target.parentNode.classList.add("fadeOut");
              }
            }, 3000);
            setTimeout(() => {
              if (e.target.checked) {
                props.deleteItem(e);
              }
            }, 3900);
          }
        }}
      />
      {!isEditItem && <li>{props.doc.data().todo}</li>}
      {isEditItem && editForm(props.doc.id)}
      <img src={require('./images/delete.png')}
        onClick={(e) => {
          dispatch(listItemIdAction(props.doc.id));
          props.deleteItem(e);
        }}
       className="trashImg" />

      <img src={require('./images/edit.png')}
        onClick={() => setIsEditItem(!isEditItem)}
      className="editImg" />
      
    </div>
  );
}

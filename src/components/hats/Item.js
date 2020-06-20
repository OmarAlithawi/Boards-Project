import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { listItemIdAction } from "../../actions";


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
          onChange={(e) => setUpdateItemValue(e.target.value)}
        />
        <button
          onClick={(e) => {
            props.updateItem(e, id, updateItemValue);
            setIsEditItem(false);
          }}
          style={{ fontSize: 15 }}
        >
          done
        </button>
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
      <img src="https://image.flaticon.com/icons/svg/3090/3090407.svg" 
        onClick={(e) => {
          dispatch(listItemIdAction(props.doc.id));
          props.deleteItem(e);
        }}
       className="trashImg" />

      <img src="https://image.flaticon.com/icons/png/512/660/660756.png"
        onClick={() => setIsEditItem(!isEditItem)}
      className="editImg" />
      
    </div>
  );
}

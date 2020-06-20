import React, { useState } from "react";
import Item from "./Item";

export default function HatItems(props) {
  return (
    <ul className="list" name={props.name}>
    {props.data.map((doc, index) => {
      return (
        <Item
          key={doc.id}
          id={props.id}
          doc={doc}
          updateItem={props.updateItem}
          deleteItem={props.deleteItem}
        />
      );
    })}
  </ul>
  );
}


import React from "react";

const ListItem = (props) => {
  console.log(props.readAmount);
  const checkClass = () => {
    if (props.readAmount) {
      return props.item.amount;
    } else {
      return;
    }
  };
  return (
    <li
      className="list-item"
      onClick={() => props.event(props.item)}
      key={props.item.id}
      value={props.item.title}
    >
      {props.item.title}
      {checkClass()}
    </li>
  );
};

export default ListItem;

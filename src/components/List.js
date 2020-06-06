import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const GroceryList = props.list.map((item) => {
    return (
      <ListItem readAmount={props.readAmount} event={props.event} item={item} />
    );
  });
  return <ul className="list-container">{GroceryList}</ul>;
};

export default List;

import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = (props) => {
  return (
    <div className="list">
      <h1>Grocery List</h1>
      <InputField parentFunction={props.input} />
      <List
        readAmount={props.readAmount}
        event={props.event}
        list={props.list}
      />
    </div>
  );
};

export default GroceryList;

import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "boter", amount: 1 },
        { id: 2, title: "kaas", amount: 1 },
      ],
      ShoppingListItems: [],
    };
    // Function Binds
  }

  // functions
  HandleItemClick = (addedItem) => {
    this.setState((prevState) => {
      const updatedList = prevState.ShoppingListItems.map((item) => {
        if (item.title === addedItem.title) {
          return (item = { ...item, amount: item.amount + 1 });
        } else {
          return item;
        }
      });
      if (!updatedList.some((item) => item.title === addedItem.title)) {
        updatedList.push(addedItem);
      }
      return { ShoppingListItems: updatedList };
    });
  };

  clearList = () => {
    this.setState(() => {
      const NewState = [];
      return { ShoppingListItems: NewState };
    });
  };

  AddShoppingItem = (value) => {
    const newItem = {
      id: this.state.groceryItems.length + 1,
      title: value,
      amount: 1,
    };

    this.setState(() => {
      if (
        this.state.groceryItems.some((item) => item.title.to === newItem.title)
      ) {
        return;
      }
      const NewState = this.state.groceryItems.map((item) => item);
      NewState.push(newItem);

      return { groceryItems: NewState };
    });
  };

  render() {
    return (
      <div className="container">
        <GroceryList
          input={this.AddShoppingItem}
          event={this.HandleItemClick}
          list={this.state.groceryItems}
          readAmount={false}
        />
        <ShoppingCart
          event={this.HandleItemClick}
          buttonEvent={this.clearList}
          list={this.state.ShoppingListItems}
          readAmount={true}
        />
      </div>
    );
  }
}

export default Container;

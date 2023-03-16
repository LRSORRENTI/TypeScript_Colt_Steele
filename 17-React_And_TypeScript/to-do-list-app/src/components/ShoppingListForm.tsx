import React from "react";

function ShoppingListForm(): JSX.Element {
    function handleSubmit(event: React.FormEvent){
       event.preventDefault();
       console.log("submitted successfully")
    }
  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Product name" />
    <button type="submit">Add item</button>
  </form>
}

export default ShoppingListForm
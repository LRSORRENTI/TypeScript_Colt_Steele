import React, {useRef} from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
       
   
    const inputRef = useRef<HTMLInputElement>(null);
   
    const quantRef = useRef<HTMLInputElement>(null);
   
    function handleSubmit(event: React.FormEvent){
       event.preventDefault();
       const newProduct = inputRef.current!.value;
       const newQuant = parseInt(quantRef.current!.value);
       onAddItem(newProduct, newQuant)
       inputRef.current!.value = ""
       quantRef.current!.value = ""
    }
  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Product name" ref={inputRef} />
    <input type="number" min={0} ref={quantRef} />
    <button type="submit">Add item</button>
  </form>
}

export default ShoppingListForm
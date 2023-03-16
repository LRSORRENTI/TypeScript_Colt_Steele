import React from "react";



// type listItems = {
//     listName: string,

// }

// function RenderListItems({listName}: listItems): JSX.Element{
//     return <form><input type="checkbox" />{listName}</form>
// }


// export default  RenderListItems

// BELOW IS COLT'S SOLUTION, ABOVE IS WHAT I DID BEFORE 
// WATCHING COLT'S SOLUTION

interface Item {
    id: number;
    productName: string;
    quantity: number;
}


interface ShoppingProps {
    items: Item[];
}

export default function ShoppingList(props: ShoppingProps): JSX.Element {
    // const items = [
    //     {id: 1, productName: "Eggs", quantity: 12},
    //     {id: 2, productName: "Milk", quantity: 1},
    //     {id: 3, productName: "Protein Powder", quantity: 1}
    // ]
    return (
    <div>
        <h1>
            Shopping List
        </h1>
        <ul>
        {props.items.map((item) => (
                 <li key={item.id}>
                    {item.productName} 
                    - {item.quantity}
                    </li>
                ))}
        </ul>
    </div>
    );

}
import React from "react";



type listItems = {
    listName: string,

}

function RenderListItems({listName}: listItems): JSX.Element{
    return <form><input type="checkbox" />{listName}</form>
}

export default RenderListItems
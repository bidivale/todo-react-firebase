import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteDoc, doc, db } from '../firebase';
import React from 'react';
import './Todo.css'
// arr is a prop that represents "it", that is each todo from the "todos" arrey
// we will do whatever we need to do with each todo (here it is arr, and use the component at App.js)
  const Todo = ({ arr }) =>{
    return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText 
        // inside the todos arrey, each todo is referred as arr here
        // at todos arrey, we set doc.data from firestore at "item" feild / variable.
        //inside the item (firebase doc.data), there was 2 feilds, "todo" and "createdAt"
        //we are collecting the "todo" field values here
        primary={arr.item.todo}
        secondary={arr.item.todo} 
        />
      </ListItem>

     {/* Delete button goes here */}

      <DeleteForeverIcon fontSize='large'
       onClick={() => {
        //  const docRef = doc(db, 'todos', arr.id)
        //  deleteDoc(docRef)
        deleteDoc(doc(db, 'todos', arr.id))
       }}
    />
    </List>
    )
}
export default Todo
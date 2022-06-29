import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteDoc, doc, db } from '../firebase';
import React from 'react';
import './Todo.css'
//const Todo = ({ todo }) => {
  const Todo = ({ arr }) =>{
    return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText 
        primary={arr.item.todo}
        secondary={arr.item.todo} 
        />
      </ListItem>

     {/* firebase old code
     <DeleteForeverIcon
     onClick={() => {db.collection('todos').doc(arr.id).delete()}}
     />
     */}

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
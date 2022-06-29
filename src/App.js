import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';
// old firebase code 
//import { db } from './firebase';
// New firebase import by Bidisha
import { colRef, getDocs, addDoc, serverTimestamp, query, orderBy, onSnapshot } from './firebase';



function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

// old firebase code 
  // useEffect(() => {
  //   db.collection('todos').onSnapshot(snapshot => {
  //     setTodos(snapshot.docs.map(doc => doc.data()))
  //   })
  
  // }, [input]) 


  // queries Bidisha, we are ordering by 'createdAt' property that we created in addTodo. createdAt displays creating time
  const q = query(colRef, orderBy('createdAt', 'desc'))

  //fetching data(all documents from collection) from firestore with new firebase code Bidisha
  // useEffect(() => {
  //   getDocs(q).then((snapshot) => {
  //     setTodos(snapshot.docs.map(doc =>
  //       ({
  //         id: doc.id,
  //         item: doc.data()
  //       })))
  //   } )
  // }, [input])

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc =>
        ({
          id: doc.id,
          item: doc.data()
        })))
    } )
  }, [input])

  //  firebase old code - adding todo from direct input to the collection
  //  const addTodo = e => {
  //   e.preventDefault()
  //    db.collection('todos').add({
  //     todo: input,
  //     Timestamp: firebase.firestore.FieldValue.serverTimestamp()
  // })
  //   setInput('')
  // }

// Adding todo from direct input to the collection - firebase new code by Bidisha
  const addTodo = e => {
    e.preventDefault()
    addDoc(colRef, {
      todo: input,
      createdAt: serverTimestamp()

    })

   setInput('')
  }
  console.log(todos)
  return (
    <div className="app">
      <h1> Todo React Firebase</h1>
      <from>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
        </FormControl>

        
        <Button type="submit" onClick={addTodo} variant="contained"
        color="primary" disabled={!input} >Add Todo</Button>   
      </from>

    {/* ?? showing the todos, each todo is fetched from todo field of collection snapshot todos */}
      <ul>
        {todos.map(it => <Todo key={it.id} arr={it}
        />)}
      </ul>

    </div>
  );
}

export default App;

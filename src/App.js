
import './App.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => doc.data().todo))
   })
  },[]);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
      <input value={input} onChange={event => setInput(event.target.value)}></input>
      </FormControl>

       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
       </Button>
      
      </form>

      
        {
          todos.map(todo => (
            <Todo todo={todo}></Todo>
          ))
        }
   
     
    </div>
  );
}

export default App;

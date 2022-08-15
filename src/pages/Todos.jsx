import { useEffect, useState } from 'react';
import api from '../services/api';
import './Todos.css'


const Todos = () => {
    const [todos, setTodos] = useState([])

const getTodos = () => {

    api.get("todos")
    .then((response) => setTodos(response.data))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

}

useEffect(() => {

    getTodos()

},[])

    return (  
        <div>
          <h1> Todo</h1>

          {todos.map((todo,index) => {
            return(
                <div key={index} className="todos">

                    <strong>{todo.id}</strong>
                    <h3>{todo.title}</h3>
                    <span>{todo.completed}</span>

                </div>
            )
          })}
        </div>
    );
}
 
export default Todos;

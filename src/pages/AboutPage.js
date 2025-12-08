// src/pages/AboutPage.js
import React, { useState} from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
  // ✅ Use about namespace + fallback to "common"
  const { t } = useTranslation(["about", "common"]);

  // todos list implementation
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if(text) {
      setTodos([...todos, { text, completed: false} ]);
      setText('');
    }   
  };

  const toggleTodo = (index) =>{
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
      <p>{t("more")}</p>

      <h2> Build a To-Do List from About Page </h2>

      <input 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="Enter todo" />
      
      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(index)}>Toggle</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default AboutPage;

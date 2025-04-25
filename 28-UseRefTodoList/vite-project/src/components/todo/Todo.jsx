import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();
    const todoText = inputRef.current.value.trim();
    if (!todoText) {
      alert("Todo boş ola bilməz!");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    const target = todos.find((todo) => todo.id === id);
    if (!target.completed) {
      alert("Tamamlanmamış todo silinə bilməz!");
      return;
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const newText = prompt("Yeni mətn daxil edin:");
    if (newText !== null && newText.trim() !== "") {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const clearAll = () => {
    if (window.confirm("Bütün todolar silinsin?")) {
      setTodos([]);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.todoList}>
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className={styles.form}>
        <input type="text" ref={inputRef} placeholder="Yeni todo yaz..." />
        <button className={styles.addBtn} type="submit">Əlavə et</button>
      </form>
      <button className={styles.clearBtn} onClick={clearAll}>Hamısını sil</button>

      <div className={styles.todoItems}>
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            className={`${styles.todoItem} ${todo.completed ? styles.completed : styles.notCompleted}`}
          >
            <span className={styles.index}>{index + 1}.</span>
            <span className={styles.text} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <div className={styles.buttons}>
              <button onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? "Geri al" : "Tamamla"}
              </button>
              <button onClick={() => editTodo(todo.id)}>Edit</button>
              <button
                onClick={() => deleteTodo(todo.id)}
                disabled={!todo.completed}
                className={styles.deleteBtn}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

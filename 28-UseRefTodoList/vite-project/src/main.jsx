import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './components/todo/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <TodoList/>
)

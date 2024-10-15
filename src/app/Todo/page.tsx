'use client'
import Todoform from '@/components/TodoComponent/Todoform'
import Todolist from '@/components/TodoComponent/Todolist'
import { useState } from 'react'

interface Todo {
  id: number
  text: string
}
const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [nextId, setNextId] = useState(1)
  const addTodo = (todo: string) => {
    setTodos((prev) => [...prev, { id: nextId, text: todo }])
    setNextId(nextId + 1)
  }

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))
  }
  return (
    <div>
      <h1>This is to do list home page</h1>
      <Todoform addTodo={addTodo} />
      <Todolist todos={todos} removeTodo={removeTodo} />
    </div>
  )
}

export default Todo

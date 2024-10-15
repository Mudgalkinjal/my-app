interface TodoListProps {
  todos: { id: number; text: string }[]
  removeTodo: (id: number) => void
}

const Todolist = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo, id) => (
        <li key={id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Todolist

import './App.css'
import { ChangeEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CreateNewTodo from './components/CreateNewTodo';
import TodoList from './components/TodoList';

export type TodoType = { id: string, name: string, isCompleted: boolean }

function App() {

  // const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const saveTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (saveTodoList.length) {
      return saveTodoList
    }
    return []
  });
  const [newTodo, setNewTodo] = useState('');

  const onNewTodoChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }
  console.log(newTodo);

  const onAddNewTodo = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodo,
      isCompleted: false
    }
    setTodoList([newTodoItem, ...todoList]);
    setNewTodo('');
  }

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id == todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo
      })
    });
  };

  useEffect(() => {
    console.log("Hello world!");
    localStorage.setItem('todoList', JSON.stringify(todoList));
    return () => {

    }
  }, [todoList])


  return (
    <>
      <p>This is Todo App</p>
      <CreateNewTodo newTodo={newTodo} onAddNewTodo={onAddNewTodo} onNewTodoChange={onNewTodoChanged}></CreateNewTodo>
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted}></TodoList>
    </>
  )
}

export default App

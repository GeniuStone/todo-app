import { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

//
const App = () => {
  const [Todos, setTodos] = useState([
    {
      id : 1,
      text : "웨이트 트레이닝",
      checked : false
    },
    {
      id : 2,
      text : "리액트 공부",
      checked : false
    },
    {
      id : 3,
      text : "책 한바닥 필사하기",
      checked : false
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((value) => {
    const newTodo = {
      id : nextId.current,
      text : value,
      checked : false
    }

    setTodos(Todos.concat(newTodo));
    nextId.current += 1;
  },[Todos]);

  const onRemove = useCallback((id) => {
    setTodos(Todos.filter(Todo => id !== Todo.id));
  },[Todos]);

  const onToggle = useCallback((id) => {
    setTodos(Todos.map(Todo => Todo.id === id ? {...Todo, checked : !Todo.checked} : Todo))
  },[Todos]);

  return(
    <div className="container">
      <TodoItem></TodoItem> {/* 타이틀 */}
      <TodoInsert onInsert = { onInsert }></TodoInsert> {/* 입력 박스 */}
      <TodoList Todos = { Todos } onRemove = { onRemove } onToggle = { onToggle }></TodoList> {/* 할 일 목록 */}
    </div>
  );
};

export default App;

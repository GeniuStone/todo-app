import './TodoList.scss';
import TodoListItem from './TodoListItem';
// app 컴포넌트에서 state를 props로 받아와서 map 함수로 출력

const TodoList = ({ Todos, onRemove, onToggle }) => {
    return (
        <ul>
            {
                Todos.map(todo => (
                    <TodoListItem Todo = { todo } onRemove = { onRemove } onToggle = { onToggle }></TodoListItem>
                ))
            }            
        </ul>
    );
};

export default TodoList;
import './TodoListItem.scss';
import { MdOutlineCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

const TodoListItem = ({ Todo, onRemove, onToggle }) => {
    return (
        <li className="TodoListItem">
            <div className="checkBox" onClick={ () => onToggle(Todo.id) }>
                { Todo.checked ? <MdOutlineCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>            
            <span className={ Todo.checked ? "checked" : ""}>{ Todo.text }</span>
            <div className="removeBtn" onClick={ () => onRemove(Todo.id) }>
                <MdRemoveCircleOutline />
            </div>            
        </li>
    );
};  

export default TodoListItem;
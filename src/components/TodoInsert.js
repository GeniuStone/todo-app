import "./TodoInsert.scss";
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from "react";

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback((e) => {
        onInsert(value);
        e.preventDefault();
        setValue('');
    },[onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={ onSubmit }>
            <input placeholder="오늘 할 일을 입력해주세요." value={ value } onChange={ onChange }/>
            <button type="submit" className="addBtn">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;

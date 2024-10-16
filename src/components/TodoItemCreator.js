import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from "recoil";
import {todoListState} from "../todoAtoms";

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = ({ target: {value} }) => {
        setInputValue(value);
    }

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ])
        setInputValue('')
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator
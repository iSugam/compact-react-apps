import React, { useState, useEffect } from 'react';
// import { InputTodo } from './InputTodo';
import "./todo.css"

// Get todoItems from local storage
const getLocalData = () => {
    const localList = localStorage.getItem("todoList")

    if(localList) {
        return JSON.parse(localList)
    }
    return []
}

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [todoItems, setTodoItems] = useState(getLocalData());
    const [editItem, setEditItem] = useState("");
    const [toggleBtn, setToggleBtn] = useState(false);

    // Handle input value
    const handleChange = e => {
        const value = e.target.value;
        setInputData(value)
    }

    // Adding todo items to list
    const addItems = () => {
        const newInputData = {
            id: `id-is-${todoItems.length}`,
            value: inputData
        }

        if(!inputData) return
        else if(inputData && toggleBtn) {
            setTodoItems(todoItems.map(curItem => {
                if(curItem.id === editItem) {
                    return {...curItem, value: inputData}
                } else return curItem
            }))
            setInputData("");
            setEditItem(null);
            setToggleBtn(false);
        }
        
        else {setTodoItems(prevValue => [...prevValue, newInputData])
        setInputData("")}
    } 

    // Adding todoItems to local storage with useEffect
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoItems));
    }, [todoItems])

    // Function for editing item
    const onEditItems = (id) => {
        const toEdit = todoItems.find(item => {
            return item.id === id;
        })
        setInputData(toEdit.value);
        setEditItem(id);
        setToggleBtn(true);
    }

    // Deleting todoItems from list
    const deleteItems = (id) => {
        setTodoItems(prevValue => {
            return prevValue.filter((item) => {
                return item.id !== id
            })
        })
    }

    const clearAll = () => {
        setTodoItems([])
    }

  return (
    <div className='todo'>
        <div className="todo-container">
            <figure className="todo-heading">
                <img src="../assets/images/todo-images/notes.png" alt="" />
                <figcaption className='title'>
                    Add Your Items
                </figcaption>
            </figure>

            <div className="input-container">
                <input 
                    type="text" 
                    onChange={handleChange}
                    placeholder='📒 Write your Todo'
                    value={inputData}
                />

                {toggleBtn ? 
                    <span onClick={addItems}><i className="fa-solid fa-pen-to-square"></i></span>

                    : <span onClick={addItems}><i className="fa-solid fa-plus"></i></span>}
            </div>

            <div className="added-list">
                <ul>
                    {todoItems.map((item) => {
                        return (
                            <li key={item.id}> {item.value}
                                <div className='list-icon'>
                                    <span onClick={() =>onEditItems(item.id)}><i className="fa-solid fa-pen-to-square"></i></span>
                                    <span onClick={() =>deleteItems(item.id)}><i className="fa-solid fa-trash-can"></i></span>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>

            <div className='clear-btns'>
                <button onClick={clearAll}>Clear Items</button>
            </div>
        </div>
    </div>
  )
}

export default Todo
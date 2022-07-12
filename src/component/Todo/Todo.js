import React, { useState, useEffect } from 'react';
import { InputTodo } from './InputTodo';
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

    const [todoItems, setTodoItems] = useState(getLocalData())

    // Adding todo items to list
    const addItems = (input, setInput) => {
        const inputData = {
            id: `id-is-${todoItems.length}`,
            value: input
        }
        if(!input) return
        setTodoItems(prevValue => [...prevValue, inputData])
        setInput("")
    }

    // Adding todoItems to local storage 
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoItems));
    }, [todoItems])

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

            <InputTodo onAddItems = {addItems}/>

            <div className="added-list">
                <ul>
                    {todoItems.map((item) => {
                        return (
                            <li key={item.id}> {item.value}
                                <div className='list-icon'>
                                    <span><i className="fa-solid fa-pen-to-square"></i></span>
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
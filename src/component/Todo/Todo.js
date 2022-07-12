import React, { useState } from 'react';
import "./todo.css"

const Todo = () => {

    const [input, setInput] = useState("")
    const [todoItems, setTodoItems] = useState([])
    const handleChange = e => {
        const value = e.target.value;
        setInput(value)
    }

    const addItems = () => {
        const inputData = {
            id: `id-is-${todoItems.length}`,
            value: input
        }
        if(!input) return
        setTodoItems(prevValue => [...prevValue, inputData])
        setInput("")
    }

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
                    name="" id="" 
                    placeholder='📒 Write your Todo'
                    value={input}
                />

                <span onClick={addItems}><i className="fa-solid fa-plus"></i></span>
            </div>

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
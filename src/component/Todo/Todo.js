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
        if(!input) return
        setTodoItems(prevValue => [...prevValue, input])
        setInput("")
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
                    {todoItems.map((item, index) => {
                        return  <li key={`id${item}${index}`}> {item}
                                <div className='list-icon'>
                                    <span><i className="fa-solid fa-pen-to-square"></i></span>
                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                </div>
                        </li>
                    })
                    }
                </ul>
            </div>

            <div className='clear-btns'>
                <button>Clear Items</button>
            </div>
        </div>
    </div>
  )
}

export default Todo
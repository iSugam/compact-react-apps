import React,{ useState } from 'react'

export const InputTodo = ({onAddItems}) => {
    const [inputData, setInputData] = useState("")
    const handleChange = e => {
        const value = e.target.value;
        setInputData(value)
    }

  return (
    <div className="input-container">
    <input 
        type="text" 
        onChange={handleChange}
        placeholder='📒 Write your Todo'
        value={inputData}
    />

    <span onClick={() => onAddItems(inputData, setInputData)}><i className="fa-solid fa-plus"></i></span>
</div>
  )
}

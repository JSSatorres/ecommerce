import React, { SetStateAction, useState } from 'react'
import "./citySearch.scss";

interface SearchProps {
    cityNameData : (city:string)=>SetStateAction<Object>;
}

const CitySearch = ({cityNameData}:SearchProps) => {

    const [inputValue, setInputValue] = useState<string>("")
    const [isEmpty, setIsEmpty] = useState<boolean>(false)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
        console.log(inputValue);        
      }
    
      const handleClear = ()=>{
        setInputValue("")    
      }

      const handleEmpty = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if (inputValue==="") {
          setIsEmpty(true)
        }else{
          setIsEmpty(false)
          handleSubmit() 
        }              
      }
    
      const handleSubmit = ()=>{
        cityNameData(inputValue)         
        handleClear()       
      }

  return (
    <div className='citySearchContainer'>
        <h2 className='citySearchContainer__title'>Search your city</h2>
        <input 
          type="text" 
          name='inputValue' 
          onChange={handleChange}
          className="citySearchContainer__input" 
          value={inputValue}
          autoComplete="off" 
        />
        {isEmpty&& <div className='danger'> the city is empty</div>}
        <button 
          type='submit' 
          onClick={handleEmpty} 
          className="citySearchContainer__button" 
          >go!
        </button>
    </div>
  )
}

export default CitySearch
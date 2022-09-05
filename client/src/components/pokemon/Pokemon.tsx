import React, { useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { getPokemon } from '../../store/slices/pokemon/thunks'

const Pokemon = () => {

  const dispatch  = useAppDispatch()
  const {pokemon, isLoading,page} = useAppSelector(state=>state.pokemon)

  useEffect(() => {
    dispatch(getPokemon())
  }, [dispatch])
  
  return (
    <div>
      <h1>Pokemon</h1>
      <hr/>
      <p>loading:{(isLoading)?"true":"false"} </p>
      <ul>
        {pokemon.map((onePokemon,index)=>{
          return(
            <div key={index}>
              <li>{onePokemon.name}</li>
            </div>

          )
        })}

      </ul>
      <button 
        disabled={isLoading}
        onClick={()=>dispatch(getPokemon(page))}
      >
        Next
      </button>
    </div>
  )
}

export default Pokemon
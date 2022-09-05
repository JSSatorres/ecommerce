import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface pokemonDataArray {
  name:string
  url:string
}
export interface pokemonState {
  page: number,
  pokemon: Array<pokemonDataArray>,
  isLoading:boolean
}

const initialState: pokemonState = {
 page: 0,
 pokemon:[],
 isLoading:false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemon:(state,/*action*/)=>{
      state.isLoading=true
    },
    setPokemon:(state,action: PayloadAction<pokemonState>)=>{
      state.isLoading= action.payload.isLoading;
      state.page= action.payload.page   
      state.pokemon= action.payload.pokemon
    }
  },
})

export const { startLoadingPokemon, setPokemon} = pokemonSlice.actions
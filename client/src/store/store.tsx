import { configureStore} from '@reduxjs/toolkit'
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from './slices/pokemon/pokemon';
import {usersApi} from './api/usersSliceApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    [usersApi.reducerPath]:usersApi.reducer
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(usersApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { startLoadingPokemon ,setPokemon} from "./pokemon"
/* import { useAppDispatch, useAppSelector } from '../../hooks' */

export const getPokemon =(page = 0)=>{
    return async (dispatch:any,getState:any)=>{

        dispatch (startLoadingPokemon())
        
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10} `)
        const data = await resp.json()

        console.log(data.result);        
       
        
        dispatch(setPokemon({pokemon:data.results, page:page +1,isLoading:false}))
    }
}

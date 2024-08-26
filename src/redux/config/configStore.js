import { combineReducers, createStore } from 'redux'
import pokemonReducer from './../modules/pokemonReducer'

const rootReducer = combineReducers({
  pokemon: pokemonReducer
})

const store = createStore(rootReducer)

export default store

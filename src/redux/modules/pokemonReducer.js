// Action Types
const SET_SELECTED_POKEMON = 'SET_SELECTED_POKEMON'
const ADD_POKEMON = 'ADD_POKEMON'
const REMOVE_POKEMON = 'REMOVE_POKEMON'
const SET_COUNT_POKEMON = 'SET_COUNT_POKEMON'

// Action Creators
export const setSelectedPokemon = (pokemon) => ({
  type: SET_SELECTED_POKEMON,
  payload: pokemon
})

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON,
  payload: pokemon
})

export const removePokemon = (id) => ({
  type: REMOVE_POKEMON,
  payload: id
})

export const setCountPokemon = (count) => ({
  type: SET_COUNT_POKEMON,
  payload: count
})

const initialState = {
  selectedPokemon: [],
  countPokemon: 6
}

// Reducer
export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload
      }
    case ADD_POKEMON:
      if (state.selectedPokemon.length >= state.countPokemon) {
        return state
      }
      return {
        ...state,
        selectedPokemon: [...state.selectedPokemon, action.payload]
      }
    case REMOVE_POKEMON:
      return {
        ...state,
        selectedPokemon: state.selectedPokemon.filter((pokemon) => pokemon.id !== action.payload)
      }
    case SET_COUNT_POKEMON:
      return {
        ...state,
        countPokemon: action.payload
      }
    default:
      return state
  }
}

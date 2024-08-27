import { createSlice } from '@reduxjs/toolkit'

// Init
const initialState = {
  selectedPokemon: [],
  countPokemon: 6
}

// CreateSlice
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload
    },
    addPokemon: (state, action) => {
      if (state.selectedPokemon.length < state.countPokemon) {
        state.selectedPokemon.push(action.payload)
      }
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter((pokemon) => pokemon.id !== action.payload)
    },
    setCountPokemon: (state, action) => {
      state.countPokemon = action.payload
    }
  }
})

// Action, Reducer
export const { setSelectedPokemon, addPokemon, removePokemon, setCountPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonContext } from '../../context/PokemonContext'

import Dex from '../../pages/Dex/Dex'
import Home from '../../pages/Home/Home'
import MOCK_DATA from '../../data/mock'
import WrapOutlet from '../outlet/WrapOutlet'
import PokemonDetail from '../../components/pokemonDetail/PokemonDetail'

export default function Router() {
  const pokemon = MOCK_DATA
  const [selectedPokemon, setSelectedPokemon] = useState([])

  const countPokemon = 6

  const convertId = (id) => id.toString().padStart(3, '0')
  const isSelected = (id) => selectedPokemon.some((pokemon) => pokemon.id === id)

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WrapOutlet />}>
            <Route index element={<Home />} />
            <Route
              path="/dex"
              element={
                <Dex
                  pokemon={pokemon}
                  convertId={convertId}
                  isSelected={isSelected}
                  countPokemon={countPokemon}
                  selectedPokemon={selectedPokemon}
                  setSelectedPokemon={setSelectedPokemon}
                />
              }
            />
            <Route
              path="/dex/pokemonDetail"
              element={
                <PokemonDetail
                  pokemon={pokemon}
                  convertId={convertId}
                  countPokemon={countPokemon}
                  selectedPokemon={selectedPokemon}
                  setSelectedPokemon={setSelectedPokemon}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  )
}

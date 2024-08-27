import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dex from '../../pages/dex/Dex'
import Home from '../../pages/home/Home'
import PokemonDetail from '../../components/pokemonDetail/PokemonDetail'
import WrapOutlet from '../outlet/WrapOutlet'
import MOCK_DATA from '../../data/mock'
import { useState } from 'react'

export default function Router() {
  const pokemon = MOCK_DATA
  const [selectedPokemon, setSelectedPokemon] = useState([])

  const countPokemon = 6

  const convertId = (id) => id.toString().padStart(3, '0')
  const isSelected = (id) => selectedPokemon.some((pokemon) => pokemon.id === id)

  return (
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
  )
}

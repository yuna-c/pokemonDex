import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dex from '../../pages/Dex/Dex'
import Home from '../../pages/Home/Home'
import MOCK_DATA from '../../data/mock'
import WrapOutlet from '../outlet/WrapOutlet'
import PokemonDetail from '../../components/pokemonDetail/PokemonDetail'

export default function Router() {
  const pokemon = MOCK_DATA
  const countPokemon = useSelector((state) => state.pokemon.countPokemon)
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  const convertId = (id) => id.toString().padStart(3, '0')
  const isSelected = (id) => selectedPokemon.some((pokemon) => pokemon.id === id)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WrapOutlet />}>
          <Route index element={<Home />} />
          <Route path="/dex" element={<Dex pokemon={pokemon} convertId={convertId} countPokemon={countPokemon} />} />
          <Route
            path="/dex/pokemonDetail"
            element={<PokemonDetail pokemon={pokemon} convertId={convertId} isSelected={isSelected} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

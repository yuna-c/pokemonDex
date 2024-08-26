import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedPokemon, addPokemon, removePokemon, setCountPokemon } from '../../redux/modules/pokemonReducer'

import Dex from '../../pages/Dex/Dex'
import Home from '../../pages/Home/Home'
import MOCK_DATA from '../../data/mock'

import PokemonDetail from '../../components/pokemonDetail/PokemonDetail'
import WrapOutlet from '../outlet/WrapOutlet'

export default function Router() {
  const pokemon = MOCK_DATA

  const dispatch = useDispatch()
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
  const countPokemon = useSelector((state) => state.pokemon.countPokemon)

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
                addPokemon={(pokemon) => dispatch(addPokemon(pokemon))}
                removePokemon={(id) => dispatch(removePokemon(id))}
                setCountPokemon={(count) => dispatch(setCountPokemon(count))}
              />
            }
          />
          <Route
            path="/dex/pokemonDetail"
            element={
              <PokemonDetail
                pokemon={pokemon}
                convertId={convertId}
                isSelected={isSelected}
                countPokemon={countPokemon}
                selectedPokemon={selectedPokemon}
                addPokemon={(pokemon) => dispatch(addPokemon(pokemon))}
                removePokemon={(id) => dispatch(removePokemon(id))}
                setCountPokemon={(count) => dispatch(setCountPokemon(count))}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

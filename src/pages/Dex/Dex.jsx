import { useSelector } from 'react-redux'
import Dashboard from '../../components/dashboard/Dashboard'
import PokemonList from '../../components/pokemonList/PokemonList'
import Layout from '../../shared/layout/Layout'
import { Article } from '../../styles/LayoutStyle'
import { BoardTitle } from '../../styles/CommonStyle'

export default function Dex({ pokemon, convertId, isSelected, countPokemon, addPokemon, removePokemon }) {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  return (
    <Layout title="Dex" showBackground={false}>
      <Article id="Dashboard">
        <BoardTitle>나만의 포켓몬</BoardTitle>
        <Dashboard
          pokemon={pokemon}
          convertId={convertId}
          countPokemon={countPokemon}
          addPokemon={addPokemon}
          removePokemon={removePokemon}
          selectedPokemon={selectedPokemon}
        />
      </Article>

      <Article id="PokemonList">
        <BoardTitle>포켓몬 리스트</BoardTitle>
        <PokemonList
          pokemon={pokemon}
          convertId={convertId}
          isSelected={isSelected}
          countPokemon={countPokemon}
          addPokemon={addPokemon}
          removePokemon={removePokemon}
        />
      </Article>
    </Layout>
  )
}

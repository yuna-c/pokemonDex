import { Article } from '../../styles/LayoutStyle'
import { BoardTitle } from '../../styles/CommonStyle'

import Layout from '../../shared/layout/Layout'
import Dashboard from '../../components/dashboard/Dashboard'
import PokemonList from '../../components/pokemonList/PokemonList'

export default function Dex({ pokemon, convertId, countPokemon }) {
  return (
    <Layout title="Dex" showBackground={false}>
      <Article id="Dashboard">
        <BoardTitle>나만의 포켓몬</BoardTitle>
        <Dashboard pokemon={pokemon} convertId={convertId} countPokemon={countPokemon} />
      </Article>

      <Article id="PokemonList">
        <BoardTitle>포켓몬 리스트</BoardTitle>
        <PokemonList pokemon={pokemon} convertId={convertId} />
      </Article>
    </Layout>
  )
}

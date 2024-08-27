import { useSelector } from 'react-redux'

import { CardUl } from '../../styles/CommonStyle'
import PokemonCard from '../pokemonCard/PokemonCard'

export default function PokemonList({ pokemon, convertId }) {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  return (
    <CardUl className="PokemonList">
      {pokemon.map((data) => {
        const isSelected = selectedPokemon.some((pokemon) => pokemon.id === data.id)
        return <PokemonCard key={data.id} data={data} convertId={convertId} isSelected={false} />
      })}
    </CardUl>
  )
}

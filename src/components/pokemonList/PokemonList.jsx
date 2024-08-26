import { CardUl } from '../../styles/CommonStyle'
import PokemonCard from '../pokemonCard/PokemonCard'

export default function PokemonList({ pokemon, convertId, isSelected, addPokemon, removePokemon }) {
  return (
    <CardUl className="PokemonList">
      {pokemon.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          convertId={convertId}
          isSelected={isSelected(data.id)}
          addPokemon={addPokemon}
          removePokemon={removePokemon}
        />
      ))}
    </CardUl>
  )
}

import { CardContent } from '../common/Card'
import PokemonCard from '../pokemonCard/PokemonCard'

export default function PokemonList({ pokemon, convertId }) {
  return (
    <CardContent className="PokemonList">
      {pokemon.map((data) => {
        return <PokemonCard key={data.id} data={data} convertId={convertId} isSelected={false} />
      })}
    </CardContent>
  )
}

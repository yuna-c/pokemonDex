import { CardUl } from '../../styles/CommonStyle'
import PokemonCard from '../pokemonCard/PokemonCard'

export default function PokemonList({ pokemon, convertId, countPokemon, selectedPokemon, setSelectedPokemon }) {
  return (
    <>
      <CardUl className="PokemonList">
        {pokemon.map((data) => {
          return (
            <PokemonCard
              key={data.id}
              id={data.id}
              data={data}
              isSelected={false}
              convertId={convertId}
              countPokemon={countPokemon}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          )
        })}
      </CardUl>
    </>
  )
}

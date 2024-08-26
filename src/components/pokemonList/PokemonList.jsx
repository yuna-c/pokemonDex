import { useContext } from 'react'

import { PokemonContext } from '../../context/PokemonContext'

import { CardUl } from '../../styles/CommonStyle'
import PokemonCard from '../pokemonCard/PokemonCard'

export default function PokemonList({ pokemon, convertId, countPokemon }) {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
  return (
    <>
      <CardUl className="PokemonList">
        {pokemon.map((data) => {
          return (
            <PokemonCard
              key={data.id}
              id={data.id}
              isSelected={false}
              data={data}
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

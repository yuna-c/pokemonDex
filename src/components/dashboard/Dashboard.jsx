import { useSelector } from 'react-redux'

import bg from './../../assets/img/bg.jpeg'
import PokemonCard from '../pokemonCard/PokemonCard'
import { CardContent, CardList } from '../common/Card'

export default function Dashboard({ convertId, countPokemon }) {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  return (
    <>
      <CardContent>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} data={pokemon} isSelected={true} convertId={convertId} />
        ))}

        {Array.from({ length: countPokemon - selectedPokemon.length }).map((_, index) => (
          <CardList className="unpick-img" key={index + 1}>
            <p># {convertId(index + 1)}</p>
            <img src={bg} className="none-img" alt="포켓몬을 선택해 주세요." />
            <strong>포켓몬을 선택해 주세요.</strong>
          </CardList>
        ))}
      </CardContent>
    </>
  )
}

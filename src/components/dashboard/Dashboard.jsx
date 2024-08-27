import { CardUl, CardLi } from '../../styles/CommonStyle'

import PokemonCard from '../pokemonCard/PokemonCard'
import bg from './../../assets/img/bg.jpeg'

export default function Dashboard({ convertId, countPokemon, selectedPokemon, setSelectedPokemon }) {
  return (
    <>
      <CardUl>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            data={pokemon}
            key={pokemon.id}
            isSelected={true}
            convertId={convertId}
            countPokemon={countPokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        ))}

        {Array.from({ length: countPokemon - selectedPokemon.length }).map((_, index) => (
          <CardLi className="unpick-img" key={index + 1}>
            <p># {convertId(index)}</p>
            <img src={bg} className="none-img" alt="포켓몬을 선택해 주세요." />
            <strong>포켓몬을 선택해 주세요.</strong>
          </CardLi>
        ))}
      </CardUl>
    </>
  )
}

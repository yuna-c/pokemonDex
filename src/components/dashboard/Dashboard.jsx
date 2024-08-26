import { useSelector } from 'react-redux'
import { CardUl, CardLi } from '../../styles/CommonStyle'
import PokemonCard from '../pokemonCard/PokemonCard'
import bg from './../../assets/img/bg.jpeg'

export default function Dashboard({ convertId, countPokemon, addPokemon, removePokemon }) {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  return (
    <>
      <CardUl>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            data={pokemon}
            isSelected={true}
            convertId={convertId}
            addPokemon={addPokemon}
            removePokemon={removePokemon}
          />
        ))}

        {Array.from({ length: countPokemon - selectedPokemon.length }).map((_, index) => (
          <CardLi className="unpick-img" key={index + 1}>
            <p># {convertId(index + 1)}</p>
            <img src={bg} className="none-img" alt="포켓몬을 선택해 주세요." />
            <strong>포켓몬을 선택해 주세요.</strong>
          </CardLi>
        ))}
      </CardUl>
    </>
  )
}

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonContext } from '../../context/PokemonContext'

import ball from './../../assets/img/ball.png'
import { CardLi } from './../../styles/CommonStyle'
import deleteBall from './../../assets/img/deleteBall.png'

export default function PokemonCard({ data, convertId, isSelected, countPokemon }) {
  const navigate = useNavigate()
  const pokemonId = data.id
  const goToId = () => navigate(`/dex/pokemonDetail?id=${data.id}`)
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  const onHandleAddPokemon = (e) => {
    e.stopPropagation()
    const isSelectedData = selectedPokemon.find((prev) => prev.id === pokemonId)

    if (isSelectedData) {
      alert(`${data.korean_name}는 이미 선택된 포켓몬입니다.`)
      return
    }

    if (selectedPokemon.length >= countPokemon) {
      alert('최대 6마리까지만 선택할 수 있습니다.')
      return
    }

    const newSelectedPokemon = [...selectedPokemon, data]
    setSelectedPokemon(newSelectedPokemon)
    alert(`${data.korean_name} 이/가 추가되었습니다.`)
  }

  const onHandleDeletePokemon = (e) => {
    e.stopPropagation()
    const updatedArray = selectedPokemon.filter((prev) => prev.id !== pokemonId)
    setSelectedPokemon(updatedArray)
  }

  return (
    <CardLi key={data.id} id={data.id} className={`${convertId(data.id)}`} onClick={goToId}>
      <p># {convertId(data.id)}</p>

      <img src={data.img_url} alt={data.korean_name} className="card-img" />
      <strong>
        {data.korean_name}

        {isSelected ? (
          <button className="delete-img" onClick={onHandleDeletePokemon}>
            <img src={deleteBall} alt="Delete" title="삭제하기" />
            삭제
          </button>
        ) : (
          <button className="add-img" onClick={onHandleAddPokemon}>
            <img src={ball} alt="Add" title="추가하기" />
            추가
          </button>
        )}
      </strong>
    </CardLi>
  )
}

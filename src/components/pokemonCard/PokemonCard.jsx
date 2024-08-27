import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPokemon, removePokemon } from '../../redux/slices/pokemonSlice'

import { CardLi } from '../../styles/CommonStyle'
import ball from './../../assets/img/ball.png'
import deleteBall from './../../assets/img/deleteBall.png'

export default function PokemonCard({ data, convertId, isSelected }) {
  const pokemonId = data.id
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const goToId = () => navigate(`/dex/pokemonDetail?id=${data.id}`)
  const countPokemon = useSelector((state) => state.pokemon.countPokemon)
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  const onHandleAddPokemon = (e) => {
    console.log('addPokemon 액션 호출')
    e.stopPropagation()
    const isSelectedData = selectedPokemon.some((pokemon) => pokemon.id === pokemonId)

    if (isSelectedData) {
      alert(`${data.korean_name}는 이미 선택된 포켓몬입니다.`)
      return
    }

    if (selectedPokemon.length >= countPokemon) {
      alert('최대 6마리까지만 선택할 수 있습니다.')
      return
    }

    dispatch(addPokemon(data))
    alert(`${data.korean_name} 이/가 추가되었습니다.`)
  }

  const onHandleDeletePokemon = (e) => {
    e.stopPropagation()
    dispatch(removePokemon(data.id))
    alert(`${data.korean_name} 이/가 삭제되었습니다.`)
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

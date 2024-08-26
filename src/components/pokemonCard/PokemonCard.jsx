import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPokemon, removePokemon } from '../../redux/modules/pokemonReducer'
import { CardLi } from '../../styles/CommonStyle'
import ball from './../../assets/img/ball.png'
import deleteBall from './../../assets/img/deleteBall.png'

export default function PokemonCard({ data, convertId }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
  const countPokemon = useSelector((state) => state.pokemon.countPokemon)

  const pokemonId = data.id

  const goToId = () => navigate(`/dex/pokemonDetail?id=${data.id}`)

  const handleAdd = (e) => {
    e.stopPropagation()

    if (selectedPokemon.length >= countPokemon) {
      alert('최대 6마리까지만 선택할 수 있습니다.')
      return
    }

    dispatch(addPokemon(data))
    alert(`${data.korean_name} 이/가 추가되었습니다.`)
  }

  const handleRemove = (e) => {
    e.stopPropagation()

    dispatch(removePokemon(data.id))
    alert(`${data.korean_name} 이/가 삭제되었습니다.`)
  }

  const isSelected = selectedPokemon.some((pokemon) => pokemon.id === pokemonId)

  return (
    <CardLi key={data.id} id={data.id} className={`${convertId(data.id)}`} onClick={goToId}>
      <p># {convertId(data.id)}</p>
      <img src={data.img_url} alt={data.korean_name} className="card-img" />
      <strong>
        {data.korean_name}
        {isSelected ? (
          <button className="delete-img" onClick={handleRemove}>
            <img src={deleteBall} alt="Delete" title="삭제하기" />
            삭제
          </button>
        ) : (
          <button className="add-img" onClick={handleAdd}>
            <img src={ball} alt="Add" title="추가하기" />
            추가
          </button>
        )}
      </strong>
    </CardLi>
  )
}

import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPokemon } from '../../redux/slices/pokemonSlice'

import { Article } from '../../styles/Layout'
import { DetailButton, DetailBox, BoardTitle } from '../../styles/Common'

import Layout from '../../shared/layout/Layout'
import Dashboard from '../../components/dashboard/Dashboard'

export default function PokemonDetail({ pokemon, convertId, isSelected }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const goToBack = () => navigate(-1)
  const [searchParams] = useSearchParams()

  const pokemonId = Number(searchParams.get('id'))
  const detailPokemon = pokemon.find((prev) => prev.id === pokemonId)

  const countPokemon = useSelector((state) => state.pokemon.countPokemon)
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)

  const onHandleDeletePokemon = () => {
    if (isSelected(pokemonId)) {
      alert(`${detailPokemon.koreanName}는 이미 선택된 포켓몬입니다.`)
      return
    }

    if (selectedPokemon.length >= countPokemon) {
      alert('최대 6마리까지만 선택할 수 있습니다.')
      return
    }

    dispatch(addPokemon(detailPokemon))
    alert(`${detailPokemon.koreanName} 이/가 추가되었습니다.`)
  }

  return (
    <Layout title="PokemonDetail" showBackground={false}>
      <Article id="DetailItem">
        <BoardTitle>포켓몬 정보</BoardTitle>
        <DetailBox>
          {!detailPokemon ? (
            <p>포켓몬을 찾을 수 없습니다.</p>
          ) : (
            <>
              <p className="txt"># {convertId(detailPokemon.id)}</p>
              <h3>
                <p className="type-box">{detailPokemon.types.join(', ')}</p>
                {detailPokemon.koreanName}
              </h3>
              <img src={detailPokemon.img_url} alt={detailPokemon.koreanName} />
              <p>{detailPokemon.description}</p>

              <div className="btn-box">
                <DetailButton onClick={goToBack}>뒤로가기</DetailButton>
                <DetailButton $yellow onClick={onHandleDeletePokemon}>
                  추가하기
                </DetailButton>
              </div>
            </>
          )}
        </DetailBox>
      </Article>

      <Article id="Dashboard">
        <BoardTitle>나만의 포켓몬</BoardTitle>
        <Dashboard convertId={convertId} countPokemon={countPokemon} />
      </Article>
    </Layout>
  )
}

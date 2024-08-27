import { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PokemonContext } from '../../context/PokemonContext'

import Layout from '../../shared/layout/Layout'
import Dashboard from '../../components/dashboard/Dashboard'

import { Article } from '../../styles/LayoutStyle'
import { DetailButton, DetailBox, BoardTitle } from '../../styles/CommonStyle'

export default function PokemonDetail({ pokemon, convertId, countPokemon }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  // key값을 가지고 value를 매치
  // http://localhost:5173/dex/pokemonDetail?id=1
  const pokemonId = Number(searchParams.get('id'))
  const detailPokemon = pokemon.find((prev) => prev.id === pokemonId)

  const onHandleAddDetailPokemon = () => {
    const isSelectedData = selectedPokemon.find((prev) => prev.id === pokemonId)

    if (isSelectedData) {
      alert(`${detailPokemon.korean_name}는 이미 선택된 포켓몬입니다.`)
      return
    }

    if (selectedPokemon.length >= 6) {
      alert('최대 6마리까지만 선택할 수 있습니다.')
      return
    }

    const newSelectedPokemon = [...selectedPokemon, detailPokemon]
    setSelectedPokemon(newSelectedPokemon)
    alert(`${detailPokemon.korean_name} 이/가 추가되었습니다.`)
  }

  const goToBack = () => {
    navigate(-1)
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
                {detailPokemon.korean_name}
              </h3>
              <img src={detailPokemon.img_url} alt={detailPokemon.korean_name} />
              <p>{detailPokemon.description}</p>
              <div className="btn-box">
                <DetailButton onClick={goToBack}>뒤로가기</DetailButton>
                <DetailButton $yellow onClick={onHandleAddDetailPokemon}>
                  추가하기
                </DetailButton>
              </div>
            </>
          )}
        </DetailBox>
      </Article>

      <Article id="Dashboard">
        <BoardTitle>나만의 포켓몬</BoardTitle>
        <Dashboard
          pokemon={pokemon}
          convertId={convertId}
          countPokemon={countPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </Article>
    </Layout>
  )
}

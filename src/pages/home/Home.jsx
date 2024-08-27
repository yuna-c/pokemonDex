import { useNavigate } from 'react-router-dom'

import Layout from './../../shared/layout/Layout'
import { Article } from '../../styles/LayoutStyle'
import { MainButton } from '../../styles/LayoutStyle'

export default function Home() {
  const navigate = useNavigate()

  const goToIndex = () => {
    navigate('/dex')
  }

  return (
    <Layout title={'Home'}>
      <MainButton $width="120px" $height="120px" $left="22%" $top="40%"></MainButton>
      <MainButton $width="100px" $height="100px" $left="24%" $top="51%"></MainButton>
      <MainButton $width="80px" $height="80px" $left="28%" $top="55%"></MainButton>
      <Article>
        <MainButton className="yellow-button" onClick={goToIndex} $yellow>
          포켓몬 도감 시작하기
        </MainButton>
      </Article>
    </Layout>
  )
}

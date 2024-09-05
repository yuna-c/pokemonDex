import styled from 'styled-components'

export const DetailButton = styled.button`
  margin: 10px;
  padding: 10px;
  width: 150px;
  height: auto;
  color: #fff;
  background-color: ${(props) => (props.$yellow ? '#f5b236' : '#ff0000')};
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  opacity: 0.5;
  transition: 1.8s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const DetailBox = styled.article`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > * {
    margin-bottom: 10px;
  }

  .txt {
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
    display: flex;
    gap: 10px;
  }

  .type-box {
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 300;
    border-radius: 10px;
    background-color: #f5b236;
  }

  .btn-box {
    display: flex;
  }

  > img {
    width: 300px;
    height: 100%;
    margin: 20px 0 30px;
  }
`
export const BoardTitle = styled.h3`
  font-size: 30px;
  margin: 10px 0 20px;
`

export const ImgDetail = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;

  > img {
    width: 300px;
    height: 100%;
    title: '이미지 설명'; // 툴팁으로 표시될 내용
  }
`

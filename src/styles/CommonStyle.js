import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%{transform: rotate(0deg);}
  25% {transform: rotate(-25deg);}
  50% {transform: rotate(25deg);}
  75% {transform: rotate(0);}
`

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

export const CardUl = styled.ul`
  display: grid;
  margin: 30px auto;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 40px;
  width: 100%;
  justify-items: center;

  li {
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #ddddddb0;
    background-color: #ffffffc7;
    transition: box-shadow 0.3s ease;
    position: relative;
    cursor: pointer;

    a > *,
    > * {
      padding-bottom: 15px;
    }

    p {
      padding-bottom: 20px;
      font-size: 18px;
    }

    .card-img {
      width: 100%;
      padding-bottom: 20px;
      transition: transform 0.3s ease;
    }

    .none-img {
      width: 100%;
      padding-bottom: 20px;
      transition: transform 0.3s ease;
      opacity: 0.4;
    }

    strong {
      width: 100%;
      padding-bottom: 10px;
      display: block;
      font-size: 23px;
      font-weight: 600;
      text-align: center;
    }

    .add-img {
      width: 24px;
      height: 24px;
      line-height: 1;
      margin-top: -3px;
      margin-left: 10px;
      padding-bottom: 0;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        transform: scale(1.4);
      }
    }

    .delete-img {
      width: 24px;
      height: 24px;
      line-height: 1;
      margin-top: -3px;
      margin-left: 10px;
      padding-bottom: 0;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        transform: scale(1.2);
      }
    }

    &.selected {
      border: 1px solid #000;
    }

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:hover .card-img,
    &:hover .none-img {
      transform: scale(1.02);
    }

    &:hover .add-img,
    &:hover .delete-img {
      animation: ${bounce} 1.8s infinite ease-in-out;
    }

    &.unpick-img {
      color: #00000069;
    }
  }
`

export const CardLi = styled.li``
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

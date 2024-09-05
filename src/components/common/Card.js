import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%{transform: rotate(0deg);}
  25% {transform: rotate(-25deg);}
  50% {transform: rotate(25deg);}
  75% {transform: rotate(0);}
`

export const CardContent = styled.ul`
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

export const CardList = styled.li``

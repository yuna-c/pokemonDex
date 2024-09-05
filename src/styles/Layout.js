import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  position: relative;

  > * {
    width: 100%;
    max-width: 1440px;
    margin: auto;
  }
`

export const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  .PickList {
    border-bottom: 1px dashed #ddd;
  }

  &:hover .bg {
    opacity: 0.8;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;

  img {
    width: 200px;
  }
`

export const Article = styled.article`
  width: 100%;
  padding: 30px 50px;
`
export const Footer = styled.footer`
  padding: 30px 10px;
  text-align: center;
  font-size: 10px;
`

export const BackgroundImage = styled.img`
  max-width: 650px;
  z-index: -1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
  opacity: ${(props) => props.$opacity || '0.3'};
`

export const MainButton = styled.button`
  width: ${(props) => props.$width || '150px'};
  height: ${(props) => props.$height || '150px'};
  padding-top: 5px;
  background-color: #ffffff;
  font-size: 22px;
  font-weight: 800;
  color: #ff0000;
  border: 15px solid red;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.$top || '68%'};
  left: ${(props) => props.$left || '68%'};
  opacity: 0.5;
  transition: 1.8s ease-in-out;
  cursor: pointer;

  &:hover {
    z-index: 2;
    opacity: 1;
    background-color: #ffffff;
    border-color: ${(props) => (props.$yellow ? '#f5b236' : '#ff0000')};
    color: ${(props) => (props.$yellow ? '#f5b236' : '#ff0000')};
  }
`

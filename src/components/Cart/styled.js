import styled from 'styled-components';

export const CartHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-right: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  cursor: pointer;

  @media(max-width: 800px) {
    margin-right: 0px;
    font-size: 1.3rem;
    align-items: center;
  }
`
export const CartHeaderText = styled.span`
  display: flex;
`

export const ModalTitle = styled.h1`
  margin-bottom: 10px;
  color: #EA4F23;
  font-weight: bold;
  text-align: center;
`

export const CartContainer = styled.section`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 20px;

  @media(max-width: 800px) {
    max-height: 300px;
    padding-right: 0px;
  }
`

export const CartItem = styled.div`
  height: 100px;
  width: 90%;
  padding: 20px;
  display: flex;
  background-color: #fff;
  margin: 10px 0;
  border-radius: 10px;
`

export const ItemImage = styled.img`
  height: 100%;
`

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemName = styled.p`
  margin: auto 15px;
  font-size: 1.8rem;
  color: #F8D002;
  font-weight: bold;
  text-transform: capitalize;
`

export const ItemNumber = styled.p`
  margin: auto 15px;
  font-size: 1.8rem;
  font-weight: bold;
`

export const ItemPrice = styled.p`
  margin: auto 15px;
  font-size: 1.3rem;
  font-weight: bold;
  max-lines: 1;
`

export const TotalPrice = styled.h2`
  margin-top: 20px;
  color: #EA4F23;
  text-align: right;
`

export const CenterText = styled.h3`
  text-align: center;
  margin: 10px 0;
`

export const ModalButton = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  height: 20px;
  background-color: #EA4F23;
  color: #fff;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #d23d14;
  }
`
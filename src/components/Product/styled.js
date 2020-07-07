import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  margin: 15px;
  padding-top: 15px;
  border-radius: 15px;
  border: 2px solid;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.5);
  }
`

export const Image = styled.img`
  max-width: 90%;
`

export const Button = styled.button`
  border-top: 2px solid;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 100%;
  cursor: pointer;
  padding: 6px;
  font-weight: bold;
  background-color: #FFFF80;

  transition: transform .2s;

  &:hover {
    background-color: #F8D002;
  }
`

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 1.8rem;
  color: #F8D002;
`

export const Price = styled.h3`
  font-size: 1.3rem;
  margin: 5px 0;
`
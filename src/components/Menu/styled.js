import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #F8D002;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    height: 100px;
  }
`
export const StoreTitle = styled.a`
  font-family: 'Acme', sans-serif;
  font-size: 4rem;
  text-decoration: none;
  margin-left: 50px;
  color: #EA4F23;

  @media(max-width: 800px) {
    margin-left: 0px;
    font-size: 3rem;
  }
`
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F8D002;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffff80;
  padding: 2rem 3rem 3rem 3rem;
  border-radius: 3rem;

  @media(max-width: 800px) {
    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
  }
`;

export const WelcomeText = styled.div`
  font-family: 'Acme', sans-serif;
  font-size: 10rem;
  color: #ea4f23;
  text-align: center;

  @media(max-width: 800px) {
    font-size: 3rem;
  }
`;

export const Button = styled.button`
  height: 4rem;
  width: 16rem;
  margin-top: 1rem;
  border: 2px solid #000;
  background: #ea4f23;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d23d14;
  }

  @media(max-width: 800px) {
    height: 3rem;
    width: 12rem;
  }
`;
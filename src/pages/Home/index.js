import React from 'react';
import * as S from './styled';
import GlobalStyle from '../../styles/global';

export default function Home() {
  return (
    <S.HomeContainer>
      <S.Content>
        <S.WelcomeText>Bem-vindx à <br/> PokeStore</S.WelcomeText>
        <S.Button type="button">Entrar</S.Button>
      </S.Content>
      <GlobalStyle/>
    </S.HomeContainer>
  );
}
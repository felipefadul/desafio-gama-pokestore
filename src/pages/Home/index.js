import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as S from './styled';
import GlobalStyle from '../../styles/global';

export default function Home() {
  const history = useHistory();
  const API_URL = 'https://pokeapi.co/api/v2/pokemon';

  function handleSearch() {
    axios.get(API_URL)
      .then(response => {
        const results = response.data.results;
        
        const catalog = [];
        catalog.push(results.map((item) => {
          const url = item.url.replace(/\/$/, "");
          const id = url.substr(url.lastIndexOf("/") + 1);

          return {
            id,
            ...item,
            price: item.name.length * 25,
            image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
          }
        }));
        localStorage.setItem('catalog', JSON.stringify(catalog));

        history.push('/store');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.WelcomeText>Bem-vindx à <br /> PokeStore</S.WelcomeText>
        <S.Button type="button" onClick={handleSearch}>Entrar</S.Button>
      </S.Content>
      <GlobalStyle />
    </S.HomeContainer>
  );
}
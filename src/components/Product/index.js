import React from 'react';
import * as S from './styled';

export default function Product({ item }) {
  return (
    <S.CardContainer>
      <S.Image src={ item.image } alt={ item.name } />
      <S.Title>{ item.name }</S.Title>
      <S.Price>R$ { item.price },00</S.Price>
      <S.Button>ADICIONAR AO CARRINHO</S.Button>
    </S.CardContainer>
  );
};
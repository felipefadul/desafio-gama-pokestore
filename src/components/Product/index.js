import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import * as S from './styled';

export default function Product({ item, addToCart }) {
  return (
    <S.CardContainer>
      <S.Image src={ item.image } alt={ item.name } />
      <S.Title>{ item.name }</S.Title>
      <S.Price>R$ { item.price },00</S.Price>
      <S.Button onClick={() => addToCart(item)}>
        <FontAwesomeIcon icon={ faCartPlus } />
        &nbsp;ADICIONAR
      </S.Button>
    </S.CardContainer>
  );
};
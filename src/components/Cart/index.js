import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import * as S from './styled';

export default function Cart() {
  
  return (
    <S.CartIcon href="/store">
      <FontAwesomeIcon icon={ faShoppingCart } />
      &nbsp;CARRINHO
    </S.CartIcon>
  );
}
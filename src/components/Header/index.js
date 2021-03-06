import React from 'react';

import * as S from './styled';
import Cart from '../Cart';

export default function Header({ cart, clearCart }) {
  return (
    <S.HeaderContainer>
      <S.StoreTitle to="/">
        PokeStore
      </S.StoreTitle>
      <Cart cart={ cart } clearCart={ clearCart } />
    </S.HeaderContainer>
  );
}
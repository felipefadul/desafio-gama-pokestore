import React from 'react';

import * as S from './styled';
import Cart from '../Cart';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.StoreTitle href="/store">
        PokeStore
      </S.StoreTitle>
      <Cart/>
    </S.HeaderContainer>
  );
}
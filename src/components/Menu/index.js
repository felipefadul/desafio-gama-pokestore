import React from 'react';

import * as S from './styled';
import Cart from '../Cart';

export default function Menu() {
  return (
    <S.MenuContainer>
      <S.StoreTitle href="/store">
        PokeStore
      </S.StoreTitle>
      <Cart/>
    </S.MenuContainer>
  );
}
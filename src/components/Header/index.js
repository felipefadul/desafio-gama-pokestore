import React from 'react';

import * as S from './styled';
import Cart from '../Cart';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.StoreTitle to="/store" onClick={window.scrollTo(0, 0)}>
        PokeStore
      </S.StoreTitle>
      <Cart/>
    </S.HeaderContainer>
  );
}
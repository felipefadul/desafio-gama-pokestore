import React from 'react';

import * as S from './styled';
import GlobalStyle from '../../styles/global';
import Catalog from '../../components/Catalog';

export default function Store() {
  
  return (
    <S.StoreContainer>
      <Catalog/>
      <GlobalStyle/>
    </S.StoreContainer>
  );
}
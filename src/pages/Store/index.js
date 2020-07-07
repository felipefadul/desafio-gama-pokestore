import React from 'react';

import * as S from './styled';
import GlobalStyle from '../../styles/global';
import Catalog from '../../components/Catalog';
import Menu from '../../components/Menu';

export default function Store() {
  
  return (
    <>
      <Menu/>
      <S.StoreContainer>
        <Catalog/>
        <GlobalStyle/>
      </S.StoreContainer>
    </>
  );
}
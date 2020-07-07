import React from 'react';

import * as S from './styled';
import GlobalStyle from '../../styles/global';
import Catalog from '../../components/Catalog';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Store() {
  
  return (
    <>
      <Header/>
      <S.StoreContainer>
        <Catalog/>
        <GlobalStyle/>
      </S.StoreContainer>
      <Footer/>
    </>
  );
}
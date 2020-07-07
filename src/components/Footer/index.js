import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import * as S from './styled';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterText>
        Desenvolvido por&nbsp;
        <S.Developer href="https://linkedin.com/in/felipefadul" target="_blank" rel="noopener noreferrer">
          Felipe Fadul
        </S.Developer>
      </S.FooterText>
      <S.SectionIcons>
        <S.Icon href="https://linkedin.com/in/felipefadul" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={ faLinkedin } />
        </S.Icon>
        &nbsp;
        <S.Icon href="https://github.com/felipefadul" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={ faGithub } />
        </S.Icon>
      </S.SectionIcons>
    </S.FooterContainer>
  );
}
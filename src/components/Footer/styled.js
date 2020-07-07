import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #F8D002;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`

export const FooterText = styled.h3`
  text-decoration: none;
  color: #4d4d4d;
`

export const Developer = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #666666;
  }
`

export const SectionIcons = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  padding-top: 5px;
`

export const Icon = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #666666;
  }
`
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const HeaderPlayerList = styled.View`
  width: 100%;
  margin: 32px 0 12px;
  flex-direction: row;
  align-items: center;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `};
`

import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  padding: 16px 18px;
  width: 100%;
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};
  border-radius: 5px;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
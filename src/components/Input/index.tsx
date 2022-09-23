import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

type InputProps = TextInputProps & {}

const Input = ({ ...rest }: InputProps) => {
  const { COLORS } = useTheme()
  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />
}

export { Input }

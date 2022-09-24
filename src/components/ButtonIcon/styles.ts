import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type IconProps = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  }),
)``

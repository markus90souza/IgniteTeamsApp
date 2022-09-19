import { ThemeProvider } from 'styled-components/native'
import { Groups } from '@screens/Groups'
import theme from '@theme/index'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}

export default App

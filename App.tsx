import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Groups } from '@screens/Groups'
import theme from '@theme/index'
import { ActivityIndicator } from 'react-native'

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator size={24} />}
    </ThemeProvider>
  )
}

export default App

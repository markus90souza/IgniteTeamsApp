import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { Container } from './styles'

const Groups = () => {
  return (
    <Container>
      <Header />

      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />
    </Container>
  )
}
export { Groups }

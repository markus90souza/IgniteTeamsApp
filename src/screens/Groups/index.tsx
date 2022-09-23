import { TeamCard } from '@components/Card/TeamCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { Container } from './styles'

const Groups = () => {
  return (
    <Container>
      <Header />

      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />

      <TeamCard title="Time A" />
      <TeamCard title="Time B" />
    </Container>
  )
}
export { Groups }

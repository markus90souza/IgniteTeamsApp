import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { Container, Wrapper, Icon } from './styles'

type NweGroupProps = {}

export function NewGroup({}: NweGroupProps) {
  return (
    <Container>
      <Header showBackButton />
      <Wrapper>
        <Icon />
        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Button title={'Criar'} />
      </Wrapper>
    </Container>
  )
}

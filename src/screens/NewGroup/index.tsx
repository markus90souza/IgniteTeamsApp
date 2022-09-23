import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import { Container, Wrapper, Icon } from './styles'

const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />
      <Wrapper>
        <Icon />
        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder={'Cadastrar nova turma'} />

        <Button title={'Criar'} style={{ marginTop: 20 }} />
      </Wrapper>
    </Container>
  )
}

export { NewGroup }

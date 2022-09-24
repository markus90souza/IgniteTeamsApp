/* eslint-disable no-unused-vars */

import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { Container, Form } from './styles'

type PlayersProps = {}

const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <Button title="Remover turma" variant="SECONDARY" />
    </Container>
  )
}

export { Players }

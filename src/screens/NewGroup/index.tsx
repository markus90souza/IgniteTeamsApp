import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// Components
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
// End components
import { Container, Wrapper, Icon } from './styles'

const NewGroup = () => {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()

  const handleCreateGroup = () => {
    navigate('players', {
      group,
    })
  }

  return (
    <Container>
      <Header showBackButton />
      <Wrapper>
        <Icon />
        <Highlight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder={'Cadastrar nova turma'} onChangeText={setGroup} />

        <Button
          title={'Criar'}
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Wrapper>
    </Container>
  )
}

export { NewGroup }

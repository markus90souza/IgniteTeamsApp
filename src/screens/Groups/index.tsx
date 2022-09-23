import { useState } from 'react'
import { FlatList } from 'react-native'
// Components
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamCard } from '@components/Card/TeamCard'
import { ListEmpty } from '@components/ListEmpty'
// End Components
import { Container } from './styles'
import { Button } from '@components/Button'

const Groups = () => {
  const [groups, setGroups] = useState<string[]>([
    'Team A',
    'Team B',
    'Team C',
    'Team A',
  ])
  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <TeamCard title={item} />
        }}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={'Nenhum team adicionado'} />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  )
}
export { Groups }

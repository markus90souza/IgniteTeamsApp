import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamCard } from '@components/Card/TeamCard'
import { Container } from './styles'

const Groups = () => {
  const [groups, setGroups] = useState<string[]>(['Team A', 'Team B', 'Team C'])
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
      />
    </Container>
  )
}
export { Groups }

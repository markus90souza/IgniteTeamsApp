/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { PlayerCard } from '@components/Card/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'

import { Container, Form, HeaderPlayerList, NumberOfPlayers } from './styles'

type RouteParams = {
  group: string
}

const Players = () => {
  const [team, setTeam] = useState('Team A')
  const [players, setPlayers] = useState([])
  const { params } = useRoute()
  const { group } = params as RouteParams

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderPlayerList>
        <FlatList
          data={['Team A', 'Team B']}
          keyExtractor={(i) => i}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderPlayerList>

      <FlatList
        data={players}
        keyExtractor={(i) => i}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => {
          return <ListEmpty message="Não há nenhum jogar" />
        }}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" variant="SECONDARY" />
    </Container>
  )
}

export { Players }

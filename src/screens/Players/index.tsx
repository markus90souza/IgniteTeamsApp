/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import { Container, Form, HeaderPlayerList, NumberOfPlayers } from './styles'
import { FlatList } from 'react-native'

type PlayersProps = {}

const Players = () => {
  const [team, setTeam] = useState('Team A')
  const [players, setPlayers] = useState('2')
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

      <HeaderPlayerList>
        <FlatList
          data={['Team A', 'Team B']}
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

      <Button title="Remover turma" variant="SECONDARY" />
    </Container>
  )
}

export { Players }

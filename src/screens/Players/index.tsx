import { useEffect, useState, useRef } from 'react'
import { Alert, FlatList, TextInput, Keyboard } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { PlayerCard } from '@components/Card/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'

import { Container, Form, HeaderPlayerList, NumberOfPlayers } from './styles'
import {
  AddPlayersByGroup,
  getPlayersByGroupAndTeam,
  removePlayerByGroup,
} from '@storage/players'
import { AppError } from '@utils/AppError'
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO'
import { removeGroupByName } from '@storage/group'

type RouteParams = {
  group: string
}

const Players = () => {
  const { navigate } = useNavigation()
  const [newPlayer, setNewPlayer] = useState('')
  const [team, setTeam] = useState('Team A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const { params } = useRoute()
  const { group } = params as RouteParams

  const newPlayerInputRef = useRef<TextInput>(null)

  const handleAddPlayer = async () => {
    if (newPlayer.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome do usuãrio a ser adicionado!',
      )
    }

    const playerInTeam = {
      name: newPlayer,
      team,
    }

    try {
      await AddPlayersByGroup(playerInTeam, group)
      fetchPlayerByTeam()
      newPlayerInputRef.current?.blur()
      Keyboard.dismiss()
      setNewPlayer('')
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Não foi possivel Adicionar')
      }
    }
  }

  const fetchPlayerByTeam = async () => {
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {}
  }

  const handleRemovePlayer = async (playerName: string) => {
    await removePlayerByGroup(playerName, group)
    fetchPlayerByTeam()
  }

  const removeGroup = async () => {
    await removeGroupByName(group)
    navigate('groups')
  }

  const handleRemoveGroup = async () => {
    Alert.alert('Remover grupo', 'Deseja remover este grupo ?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => removeGroup(),
      },
    ])
  }

  useEffect(() => {
    fetchPlayerByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={setNewPlayer}
          value={newPlayer}
          inputRef={newPlayerInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType={'done'}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(i) => i.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => {
          return <ListEmpty message="Não há nenhum jogar" />
        }}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        title="Remover turma"
        variant="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}

export { Players }

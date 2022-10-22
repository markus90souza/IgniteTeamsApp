import { useState, useCallback } from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
// Components
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamCard } from '@components/Card/TeamCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
// End Components
import { Container } from './styles'
import { getAllGroups } from '@storage/group'
import { Loading } from '@components/Loading'

const Groups = () => {
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[] | null>([])

  const handleAddNewGroup = () => {
    navigate('new')
  }

  const getGroups = async () => {
    try {
      setIsLoading(true)
      const data = await getAllGroups()
      setGroups(data)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpenPlayer = (group: string) => {
    navigate('players', {
      group,
    })
  }

  useFocusEffect(
    useCallback(() => {
      getGroups()
    }, []),
  )

  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TeamCard title={item} onPress={() => handleOpenPlayer(item)} />
            )
          }}
          contentContainerStyle={groups?.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message={'Nenhum team adicionado'} />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleAddNewGroup} />
    </Container>
  )
}
export { Groups }

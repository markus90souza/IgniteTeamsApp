import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'

const getAllGroups = async () => {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)
    const groups = storage ? JSON.stringify(storage) : []
    return groups
  } catch (error) {
    throw error
  }
}

const createGroup = async (name: string) => {
  try {
    const storedGroups = await getAllGroups()
    const storage = JSON.stringify([...storedGroups, name])
    AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}

export { createGroup, getAllGroups }

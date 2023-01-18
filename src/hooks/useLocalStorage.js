// Used to set local storage. Instead of setting to state like input field, we'll set it to localStorage
import {useState} from 'react'

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue))

  const setValue = (value) => {
    // Check if function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value

    // Set to state
    setLocalStorageValue(value)

    //Set to local storage
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]

}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = window.localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
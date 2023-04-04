export enum LocalStorageKeys {
  popupTimestamp = 'popupTimestamp',
}

export function saveToLocalStorage(key: string, serializedValue: string) {
  try {
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.log(error)
  }
}

export function loadFromLocalStorage(key: string) {
  try {
    const serializedValue = localStorage.getItem(key)
    if (serializedValue === null) return undefined
    return JSON.parse(serializedValue)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

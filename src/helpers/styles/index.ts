import { StyleSheet } from 'react-native'
export const enhance = <T>(arrStyle: Array<T>) => {
  return StyleSheet.flatten<T>(arrStyle)
}

export const checkKeyInObject = (T: any, key: string) => {
  return Object.keys(T).includes(key)
}
export const propsToStyle = <T>(arrStyle: Array<T>) => {
  return arrStyle
    .filter(
      x => x !== undefined && !Object.values(x).some(v => v === undefined),
    )
    .reduce((prev, curr) => {
      return { ...prev, ...curr }
    }, {})
}

export const formatAddress = (address: string, isAuto = true) => {
  const len = address?.length
  if (len <= 10) {
    return address
  }
  if (isAuto) {
    return address?.substring(0, 5) + '....' + address?.substring(len - 5)
  }
  return (
    address?.substring(0, 5) +
    '.'.repeat(len - 10) +
    address?.substring(len - 5)
  )
}

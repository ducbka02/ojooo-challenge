import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'

const useAppState = (
  onActiveToBackground?: () => void,
  onBackgroundToActive?: () => void,
) => {
  const appState = useRef(AppState.currentState)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
        onActiveToBackground && onActiveToBackground()
      }

      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        onBackgroundToActive && onBackgroundToActive()
      }

      appState.current = nextAppState
    })

    return () => {
      subscription.remove()
    }
  }, [onActiveToBackground, onBackgroundToActive])

  return {
    appState: appState.current,
  }
}

export default useAppState

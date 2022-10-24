import { useTheme } from '@/theme'
import React, { useContext } from 'react'
import { View, Switch, StyleSheet, Platform } from 'react-native'

const ButtonSwitch = props => {
  const { value, onValueChange } = props

  const { Colors } = useTheme()

  return (
    <View style={styles.container}>
      <Switch
        style={Platform.OS === 'ios' ? styles.switchBtn : {}}
        onValueChange={onValueChange}
        value={value ? true : false}
        trackColor={{
          false: Colors.shade06,
          true: Colors.shade08,
        }}
        thumbColor={Colors.white}
      />
    </View>
  )
}

export default ButtonSwitch

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchBtn: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
})

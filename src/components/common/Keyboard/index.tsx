import { scale } from '@/helpers/dimention'
import { useTheme } from '@/theme'
import React, { useMemo } from 'react'
import { FlatList, TouchableOpacity, Text, View, Image } from 'react-native'

interface ItemKeyType {
  value: string
  label: string | null
}

export const SpecialKey = {
  DeleteAll: '-2',
  Backspace: '-1',
  Special: '10',
}

export const KEYBOARD_TYPE = {
  FLOAT: 'FLOAT',
  INTEGER: 'INTEGER',
}

const keyboardType = (type: string) => {
  const data: ItemKeyType[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    {
      value: SpecialKey.Special,
      label: type === KEYBOARD_TYPE.FLOAT ? '.' : null,
    },
    { value: '0', label: '0' },
    { value: SpecialKey.Backspace, label: null },
  ]
  return data
}

const Keyboard = ({
  type = KEYBOARD_TYPE.INTEGER,
  onKeyPress,
  onBackSpace,
}) => {
  const { Layout, Common, Fonts, Images, Colors } = useTheme()

  const data = useMemo(() => {
    return keyboardType(type)
  }, [type])

  const renderLabel = (item: ItemKeyType) => {
    if (item.label) {
      return <Text style={[Fonts.textKeyboard]}>{item.label}</Text>
    }
    if (item.value === SpecialKey.Backspace) {
      return (
        <Image
          source={Images.IC_DELETE_KEYBOARD}
          style={[Common.image.icon24]}
          resizeMode="contain"
        />
      )
    }
    return <View />
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          Layout.fill,
          Layout.center,
          {
            height: scale(46),
            borderRadius: scale(5),
            margin: scale(3),
            backgroundColor:
              index === 9 || index === 11
                ? Colors.backgroundKeyboard
                : Colors.gray100,
          },
        ]}
        key={index.toString()}
        onPress={() => handleItemPress(item)}
      >
        {renderLabel(item)}
      </TouchableOpacity>
    )
  }

  const handleItemPress = (item: ItemKeyType) => {
    switch (item.value) {
      case SpecialKey.Backspace:
        onBackSpace && onBackSpace()
        break
      case SpecialKey.Special:
        // onSpecialKey()
        break
      default:
        onKeyPress && onKeyPress(item.value)
        break
    }
  }

  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={data}
      extraData={data}
      numColumns={3}
      renderItem={renderItem}
      style={[Layout.fill, { padding: scale(3) }]}
      scrollEnabled={false}
      disableScrollViewPanResponder={true}
    />
  )
}

export default Keyboard

import React from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useTheme } from '@/theme'

export type Props = {
  value: string
  maximumDate: string | undefined
  onChange: (date: Date) => void
}

const DatePickerAnswer: React.FC<Props> = ({
  value,
  maximumDate = '2006-01-01',
  onChange,
}) => {
  const { Layout, Gutters } = useTheme()

  return (
    <View
      style={[Layout.fill, Layout.alignItemsCenter, Gutters.xxLargeTMargin]}
    >
      <DatePicker
        date={new Date(value)}
        textColor="white"
        mode="date"
        onDateChange={date => onChange(date)}
        maximumDate={new Date(maximumDate)}
      />
    </View>
  )
}

export default DatePickerAnswer

import React from 'react'
import {
  StyleProp,
  ViewStyle,
  TextInput,
  View,
  TextInputProps,
  TextStyle,
} from 'react-native'
import { FormikTouched, FormikValues, FormikErrors } from 'formik'
import { useTheme } from '@/theme'
import Text from '../Text'

export interface InputBaseProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  touched: FormikTouched<FormikValues>
  errors: FormikErrors<FormikValues>
  values: FormikValues
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean,
  ) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  formikKey: string
  leftItem?: React.ReactNode
  rightItem?: React.ReactNode
  title?: string
  titleStyle?: StyleProp<TextStyle>
  rightItemStyle?: StyleProp<ViewStyle>
  multiline?: boolean
  trim?: boolean
}

const TextField: React.FC<InputBaseProps> = ({
  containerStyle,
  setFieldTouched,
  setFieldValue,
  formikKey,
  values,
  style,
  value,
  onChangeText,
  errors,
  touched,
  leftItem,
  rightItem,
  title,
  titleStyle,
  textStyle,
  multiline,
  trim,
  rightItemStyle,
  ...rest
}) => {
  const { Common, Layout, Fonts, Gutters, Colors, darkMode } = useTheme()
  return (
    <View style={[containerStyle]}>
      {!!title && (
        <Text
          style={[
            Gutters.xTinyBMargin,
            Fonts.captionC2,
            Fonts.textWeight500,
            titleStyle,
          ]}
        >
          {title}
        </Text>
      )}
      <View
        style={[
          Layout.fullWidth,
          Layout.rowBetween,
          Common.inputView,
          !!errors[formikKey] && !!touched[formikKey] && Common.borderRed,
          style,
        ]}
      >
        {leftItem && (
          <View style={[Gutters.regularRPadding, Gutters.smallLPadding]}>
            {leftItem}
          </View>
        )}
        <TextInput
          keyboardAppearance={darkMode ? 'dark' : 'light'}
          placeholderTextColor={Colors.shade05}
          selectionColor={Colors.identity}
          onChangeText={valueX => {
            const realValue = trim ? valueX.trim() : valueX
            setFieldTouched(formikKey)
            setFieldValue(formikKey, realValue)
            if (onChangeText) {
              onChangeText(realValue)
            }
          }}
          style={[
            multiline
              ? [Fonts.textInput, textStyle]
              : [Layout.fill, Fonts.textInput, textStyle],
            Gutters.regularRPadding,
          ]}
          value={value || values[formikKey]}
          autoCapitalize={'none'}
          importantForAutofill="no"
          autoComplete="off"
          multiline={multiline}
          {...rest}
        />
        {!!rightItem && <View style={[rightItemStyle]}>{rightItem}</View>}
      </View>
      {errors[formikKey] && touched[formikKey] && (
        <Text style={[Fonts.redText, Fonts.captionC1sb, Gutters.littleTMargin]}>
          {`* ${errors[formikKey]}`}
        </Text>
      )}
    </View>
  )
}

export default TextField

/* eslint-disable eqeqeq */
import { Popup } from '@/components'
import moment from 'moment'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { showMessage } from '@/components/common/Toast'
import i18n from '@/translations'

const keyExtractor = (item: any, index: number) => {
  return index.toString()
}

const dateFormat = (inputDate?: string, format?: string | 'DD/MM/YYYY') => {
  return moment(inputDate)
    .format(format)
    .replace('SA', 'AM')
    .replace('CH', 'PM')
}

const formatNumberToMoney = (
  number: any,
  defaultNum?: any,
  predicate?: any,
) => {
  number = Math.round(number)
  predicate = !predicate ? '' : '' + predicate
  if (
    number == 0 ||
    number == '' ||
    number == null ||
    number == 'undefined' ||
    isNaN(number) === true ||
    number == '0' ||
    number == '00' ||
    number == '000'
  ) {
    return '0' + predicate
  }

  const array = []
  let result = ''
  let count = 0

  if (!number) {
    return defaultNum ? defaultNum : '' + predicate
  }

  let flag1 = false
  if (number < 0) {
    number = -number
    flag1 = true
  }

  const numberString = number.toString()
  if (numberString.length < 3) {
    return numberString + predicate
  }

  for (let i = numberString.length - 1; i >= 0; i--) {
    count += 1
    if (numberString[i] == '.' || numberString[i] == ',') {
      array.push(',')
      count = 0
    } else {
      array.push(numberString[i])
    }
    if (count == 3 && i >= 1) {
      array.push('.')
      count = 0
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    result += array[i]
  }
  if (flag1) {
    result = '-' + result
  }
  return result + predicate
}

const formatPhoneNumber = (phoneNumber = '') => {
  if (phoneNumber) {
    let formatPhone = phoneNumber.replace('+84', '0')
    if (formatPhone?.length === 9) {
      formatPhone = '0' + phoneNumber
    }
    if (formatPhone?.length === 10) {
      formatPhone = formatPhone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')
    } else if (formatPhone?.length > 10) {
      formatPhone = formatPhone.replace(
        /(\d{2})(\d{3})(\d{3})(\d{3})/,
        '$1 $2 $3 $4',
      )
    }
    return formatPhone
  }
  return ''
}

const showPopup = (
  viewContent: React.ReactNode,
  style?: StyleProp<ViewStyle>,
  dismissFromBackground?: boolean,
) => {
  Popup.show(Popup.buildSimpleHelper(viewContent, style, dismissFromBackground))
}

const hidePopup = () => {
  Popup.dismiss()
}

const milliSecondToMinute = (value: number) => {
  return Math.round(value / 1000 / 60)
}

/* Error message can be an array or a string */
const formatErrorMessage = (errorMsg: string[] | string) => {
  return Array.isArray(errorMsg) ? errorMsg[0] : errorMsg
}

const displayRemainingTimeMessage = (error: any) => {
  const remainTimeInMinutes = milliSecondToMinute(
    error.data?.remainTimeInMilliseconds,
  )

  const displayTime =
    remainTimeInMinutes > 1
      ? `${remainTimeInMinutes} ${i18n.t('common.minutes')}`
      : `1 ${i18n.t('common.minute')}`

  showMessage(
    `${i18n.t('errors.more_than_five_failed_attemps')} ${displayTime}`,
  )
}

export {
  keyExtractor,
  dateFormat,
  formatNumberToMoney,
  formatPhoneNumber,
  showPopup,
  hidePopup,
  milliSecondToMinute,
  formatErrorMessage,
  displayRemainingTimeMessage,
}

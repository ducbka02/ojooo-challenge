import { useTheme } from '@/theme'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Blurhash } from 'react-native-blurhash'
import FastImage, { FastImageProps, Source } from 'react-native-fast-image'

export interface Props extends FastImageProps {
  style?: any
  source: number | Source
  showBlur?: boolean
}
const ImageView = (props: Props) => {
  const { source, style, showBlur, ...rest } = props
  const { Common } = useTheme()
  const [loading, setLoading] = useState(true)
  const blurhash = 'L9HKzj9Z02~A?XbIa1k901-pU^I;'

  // const getBlur = async () => {
  //   const hash = await Blurhash.encode(
  //     typeof source === 'object' && idx(source, x => x.uri)
  //       ? idx(source, x => x.uri) || ''
  //       : 'L9HKzj9Z02~A?XbIa1k901-pU^I;',
  //     4,
  //     3,
  //   )
  //   const result = Blurhash.isBlurhashValid(hash)
  //   if (result.isValid) {
  //     setBlurhash(hash)
  //   }
  // }

  useEffect(() => {
    // if (typeof source === 'object' && idx(source, x => x.uri) && showBlur) {
    //   getBlur()
    // }
  }, [])

  return (
    <View style={[Common.hideOverFlow, style]}>
      <FastImage
        {...rest}
        style={style}
        source={source}
        onLoadEnd={() => {
          setLoading(false)
        }}
        onError={() => {
          setLoading(false)
        }}
      />
      {loading && showBlur && (
        <Blurhash
          blurhash={blurhash}
          decodeWidth={32}
          decodeHeight={32}
          decodePunch={1}
          decodeAsync={false}
          style={[Common.absoluteView, Common.hideOverFlow, style]}
        />
      )}
    </View>
  )
}
export default ImageView

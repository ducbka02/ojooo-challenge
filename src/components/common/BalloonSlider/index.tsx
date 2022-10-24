import { withAnchorPoint } from '@/helpers/hook/AnchorPoint'
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  GestureHandlerGestureEvent,
  LongPressGestureHandler,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'
import Balloon from './balloon'

type Props = {
  thumbTintColor?: string
  tintColor?: string
  onValueChange: any
}

const knobSize = 24
const innerKnobSize = 8
const innerKnobSizeScale = 22
const balloonSize = 50

function Slider({ onValueChange, tintColor = '#5d36bb' }: Props) {
  const longPressRef = React.createRef<LongPressGestureHandler>()
  const panRef = React.createRef<PanGestureHandler>()
  const [sliderWidth, setSliderWidth] = useState(0)
  const knobX = useSharedValue(0)
  const vX = useSharedValue(0)
  const balloonScaleActive = useSharedValue<number>(0)

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = knobX.value
    },
    onActive: (event, ctx) => {
      let nextX = ctx.x + event.translationX
      nextX = Math.max(nextX, 0)
      nextX = Math.min(nextX, sliderWidth)
      knobX.value = nextX
      vX.value = withSpring(event.velocityX)
    },
    onEnd: () => {
      vX.value = withSpring(0)
      balloonScaleActive.value = withDelay(100, withTiming(0, { duration: 0 }))
      runOnJS(onValueChange)?.(
        Math.round((knobX.value / sliderWidth) * 100).toString(),
      )
    },
  })

  const handleStateChange = ({ nativeEvent }: GestureHandlerGestureEvent) => {
    if (
      nativeEvent.state === State.ACTIVE ||
      nativeEvent.state === State.BEGAN
    ) {
      balloonScaleActive.value = 1
    }
  }

  const knobStyle = useAnimatedStyle(() => {
    return {
      borderRadius: withTiming(
        interpolate(balloonScaleActive.value, [0, 1], [8, knobSize / 2]),
      ),
      transform: [{ translateX: knobX.value - knobSize / 2 }],
    }
  })

  const innerKnobStyle = useAnimatedStyle(() => {
    return {
      width: innerKnobSize,
      height: innerKnobSize,
      backgroundColor: 'white',
      borderRadius: withTiming(
        interpolate(
          balloonScaleActive.value,
          [0, 1],
          [0, innerKnobSizeScale / 2],
        ),
      ),
      transform: [
        {
          translateX: (knobSize - innerKnobSize) / 2,
        },
        {
          scale: withTiming(
            interpolate(balloonScaleActive.value, [0, 1], [1, 2.75]),
          ),
        },
      ],
    }
  })

  const balloonStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      vX.value,
      [-800, 800],
      [30, -30],
      Extrapolate.CLAMP,
    )
    const transX = withDelay(
      100,
      withTiming(knobX.value - balloonSize / 2, { duration: 0 }),
    )
    const scale = withTiming(
      interpolate(balloonScaleActive.value, [0, 1], [0, 1]),
    )
    const tranform = {
      transform: [
        { translateX: transX },
        { rotateZ: `${rotateZ}deg` },
        { scale: scale },
      ],
    }
    return withAnchorPoint(
      tranform,
      { x: 0.5, y: 1.5 },
      { width: balloonSize, height: balloonSize },
    )
  })

  const trackStyle = useAnimatedStyle(() => {
    return {
      width: knobX.value,
    }
  })

  const percentage = useDerivedValue(() => {
    return Math.round((knobX.value / sliderWidth) * 100).toString()
  })

  return (
    <View
      style={styles.container}
      onLayout={e => setSliderWidth(e.nativeEvent.layout.width)}
    >
      <Balloon
        text={percentage}
        tintColor={tintColor}
        style={[styles.balloonView, balloonStyle]}
      />
      <View style={styles.progressBar} />
      <Animated.View style={[styles.progressBarFill, trackStyle]} />
      <LongPressGestureHandler
        ref={longPressRef}
        simultaneousHandlers={panRef}
        onHandlerStateChange={handleStateChange}
        shouldCancelWhenOutside={false}
      >
        <Animated.View>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={longPressRef}
            {...{ onGestureEvent }}
            shouldCancelWhenOutside={false}
            activateAfterLongPress={10}
          >
            <Animated.View style={[styles.knob, knobStyle]}>
              <Animated.View style={innerKnobStyle} />
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </LongPressGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  progressBar: {
    height: StyleSheet.hairlineWidth * 4,
    borderRadius: StyleSheet.hairlineWidth,
    backgroundColor: '#E8E8E8',
    width: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  progressBarFill: {
    height: StyleSheet.hairlineWidth * 4,
    borderRadius: StyleSheet.hairlineWidth,
    backgroundColor: '#5d36bb',
    ...StyleSheet.absoluteFillObject,
  },
  knob: {
    position: 'absolute',
    backgroundColor: '#5d36bb',
    justifyContent: 'center',
    alignContent: 'center',
    width: knobSize,
    height: knobSize,
    borderRadius: 8,
    bottom: -knobSize / 2,
  },
  durationLabel: {
    position: 'absolute',
    top: 20,
    fontSize: 22,
  },
  balloonView: {
    position: 'absolute',
    height: balloonSize,
    width: balloonSize,
    bottom: balloonSize,
  },
})

export default Slider

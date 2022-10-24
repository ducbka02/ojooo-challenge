/* eslint-disable react/sort-prop-types */
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Animated,
  Image,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { BaseDimention } from '@/helpers/dimention'
import Text from '../Text'

import FlashMessageManager from './FlashMessageManager'

const OFFSET_HEIGHT = Platform.OS !== 'ios' ? 60 : 48

const MessagePropType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}).isRequired

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

/**
 * Simple random ID for internal FlashMessage component usage
 */
function srid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return `${s4()}-${s4()}-${s4()}`
}

export function showMessage(...args) {
  if (FlashMessageManager._enabled) {
    const ref = FlashMessageManager.getCurrent()
    if (ref) {
      ref.showMessage(...args)
    }
  }
}

export function hideMessage(...args) {
  if (FlashMessageManager._enabled) {
    const ref = FlashMessageManager.getCurrent()
    if (ref) {
      ref.hideMessage(...args)
    }
  }
}

export function FlashMessageTransition(animValue, position = 'top') {
  const opacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  if (position === 'top') {
    const translateY = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-OFFSET_HEIGHT, 0],
    })

    return {
      transform: [{ translateY }],
      opacity,
    }
  } else if (position === 'bottom') {
    const translateY = animValue.interpolate({
      inputRange: [0, 1],
      outputRange: [OFFSET_HEIGHT, 0],
    })

    return {
      transform: [{ translateY }],
      opacity,
    }
  }

  return {
    opacity,
  }
}

export const DefaultFlash = ({
  message,
  textStyle,
  textProps,
  renderBeforeContent,
  renderCustomContent,
  renderAfterContent,
  icon,
}) => {
  const hasDescription = !!message.description && message.description !== ''
  const isSuccess = icon === 'success'
  const isFailed = icon === 'failed'
  return (
    <View
      style={[
        styles.defaultFlashFloating,
        isFailed && { backgroundColor: '#FFDFDF' },
      ]}
    >
      <View>
        <View style={styles.flashIcon}>
          {isSuccess && (
            <Image
              source={require('@/assets/images/commons/toast_success.png')}
            />
          )}
          {isFailed && (
            <Image
              source={require('@/assets/images/commons/toast_failed.png')}
            />
          )}
        </View>
        {!!renderBeforeContent && renderBeforeContent(message)}
        <Text
          style={[
            styles.flashText,
            hasDescription && styles.flashTitle,
            (isSuccess || isFailed) && styles.flashTitleWithIcon,
          ]}
        >
          {message.message}
        </Text>
        {!!renderCustomContent && renderCustomContent(message)}
        {hasDescription && (
          <Text
            style={[
              styles.flashText,
              !!message.color && { color: message.color },
              textStyle,
            ]}
            {...textProps}
          >
            {message.description}
          </Text>
        )}
        {!!renderAfterContent && renderAfterContent(message)}
        <View style={styles.closeIcon}>
          <Image source={require('@/assets/images/commons/ic_close.png')} />
        </View>
      </View>
    </View>
  )
}

DefaultFlash.propTypes = {
  message: MessagePropType,
}

export default class FlashMessage extends Component {
  static defaultProps = {
    /**
     * Use to handle if the instance can be registed as default/global instance
     */
    canRegisterAsDefault: true,
    /**
     * Controls if the flash message can be closed on press
     */
    hideOnPress: true,
    /**
     * `onPress` callback for flash message press
     */
    onPress: noop,
    /**
     * `onLongPress` callback for flash message long press
     */
    onLongPress: noop,
    /**
     * Controls if the flash message will be shown with animation or not
     */
    animated: true,
    /**
     * Animations duration/speed
     */
    animationDuration: 225,
    /**
     * Controls if the flash message can hide itself after some `duration` time
     */
    autoHide: true,
    /**
     * How many milliseconds the flash message will be shown if the `autoHide` it's true
     */
    duration: 1850,
    /**
     * Controls if the flash message will auto hide the native status bar
     * Note: Works OK in iOS, not all Android versions support this.
     */
    hideStatusBar: false,
    /**
     * The `floating` prop unstick the message from the edges and applying some border radius to component
     */
    floating: false,
    /**
     * The `position` prop set the position of a flash message
     * Expected options: "top" (default), "bottom", "center" or a custom object with { top, left, right, bottom } position
     */
    position: 'top',
    /**
     * The `render` prop will render JSX before the title of a flash message
     * Expects a function that returns JSX
     */
    renderBeforeContent: null,
    /**
     * The `render` prop will render JSX below the title of a flash message
     * Expects a function that returns JSX
     */
    renderCustomContent: null,
    /**
     * The `render` prop will render JSX after the title (or description) of a flash message
     * Expects a function that returns JSX
     */
    renderAfterContent: null,
    /**
     * The `icon` prop set the graphical icon of a flash message
     * Expected options: "none" (default), "auto" (guided by `type`), "success", "info", "warning", "danger" or a custom object with icon type/name and position (left or right) attributes, e.g.: { icon: "success", position: "right" }
     */
    icon: 'failed',
    /**
     * The `transitionConfig` prop set the transition config function used in shown/hide anim interpolations
     */
    transitionConfig: FlashMessageTransition,
  }
  static propTypes = {
    canRegisterAsDefault: PropTypes.bool,
    hideOnPress: PropTypes.bool,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    animated: PropTypes.bool,
    animationDuration: PropTypes.number,
    duration: PropTypes.number,
    autoHide: PropTypes.bool,
    hideStatusBar: PropTypes.bool,
    floating: PropTypes.bool,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    renderBeforeContent: PropTypes.func,
    renderCustomContent: PropTypes.func,
    renderAfterContent: PropTypes.func,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    transitionConfig: PropTypes.func,
  }
  /**
   * Your can customize the default ColorTheme of this component
   * Use `setColorTheme` static method to override the primary colors/types of flash messages
   */
  static ColorTheme = {
    success: '#5cb85c',
    info: '#5bc0de',
    warning: '#f0ad4e',
    danger: '#d9534f',
  }
  static setColorTheme = theme => {
    FlashMessage.ColorTheme = Object.assign(FlashMessage.ColorTheme, theme)
  }
  constructor(props) {
    super(props)

    this.prop = this.prop.bind(this)
    this.pressMessage = this.pressMessage.bind(this)
    this.longPressMessage = this.longPressMessage.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    if (!this._id) {
      this._id = srid()
    }

    this.state = {
      visibleValue: new Animated.Value(0),
      isHidding: false,
      message: props.message || null,
    }
  }
  componentDidMount() {
    if (this.props.canRegisterAsDefault !== false) {
      FlashMessageManager.register(this)
    }
  }
  componentWillUnmount() {
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout)
    }
    if (this.props.canRegisterAsDefault !== false) {
      FlashMessageManager.unregister(this)
    }
  }
  /**
   * Non-public method
   */
  prop(message, prop) {
    return !!message && prop in message
      ? message[prop]
      : prop in this.props
      ? this.props[prop]
      : null
  }
  /**
   * Non-public method
   */
  isAnimated(message) {
    return this.prop(message, 'animated')
  }
  /**
   * Non-public method
   */
  pressMessage(event) {
    if (!this.state.isHidding) {
      const { message } = this.state
      const hideOnPress = this.prop(message, 'hideOnPress')
      const onPress = this.prop(message, 'onPress')

      if (hideOnPress) {
        this.hideMessage()
      }

      if (typeof onPress === 'function') {
        onPress(event, message)
      }
    }
  }
  /**
   * Non-public method
   */
  longPressMessage(event) {
    if (!this.state.isHidding) {
      const { message } = this.state
      const hideOnPress = this.prop(message, 'hideOnPress')
      const onLongPress = this.prop(message, 'onLongPress')

      if (hideOnPress) {
        this.hideMessage()
      }

      if (typeof onLongPress === 'function') {
        onLongPress(event, message)
      }
    }
  }
  /**
   * Non-public method
   */
  toggleVisibility(visible = true, animated = true, done) {
    const { message } = this.state
    const animationDuration = this.prop(message, 'animationDuration')
    const duration = this.prop(message, 'duration')
    const autoHide = this.prop(message, 'autoHide')
    const hideStatusBar = this.prop(message, 'hideStatusBar')

    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout)
    }

    if (visible) {
      const onShow = this.prop(message, 'onShow') || noop
      const finish = () => {
        if (!!autoHide && duration > 0) {
          this._hideTimeout = setTimeout(
            () => this.toggleVisibility(false, animated),
            duration,
          )
        }

        if (!!done && typeof done === 'function') {
          done()
        }
      }

      this.setState({ isHidding: false })
      this.state.visibleValue.setValue(0)

      if (!!onShow && typeof onShow === 'function') {
        onShow(this)
      }

      if (hideStatusBar) {
        StatusBar.setHidden(
          true,
          typeof hideStatusBar === 'string' ? hideStatusBar : 'slide',
        )
      }

      if (animated) {
        Animated.timing(this.state.visibleValue, {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: true,
        }).start(finish)
      } else {
        finish()
      }
    } else {
      const onHide = this.prop(message, 'onHide') || noop
      const finish = () => {
        this.setState({ message: null, isHidding: false })

        if (!!onHide && typeof onHide === 'function') {
          onHide(this)
        }

        if (!!done && typeof done === 'function') {
          done()
        }
      }

      this.setState({ isHidding: true })

      if (hideStatusBar) {
        StatusBar.setHidden(
          false,
          typeof hideStatusBar === 'string' ? hideStatusBar : 'slide',
        )
      }

      if (animated) {
        Animated.timing(this.state.visibleValue, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: true,
        }).start(finish)
      } else {
        finish()
      }
    }
  }
  /**
   * Instace ref function to handle show messages
   * Pass some `message` object as first attribute to display a flash message
   *
   * ```
   * this.refs.YOUR_REF.showMessage({ message: "Contact sent", description "Your message was sent with success", type: "success" })
   * ```
   */
  showMessage(message, description = null, type = 'default') {
    if (message) {
      let _message = {}
      if (typeof message === 'string') {
        _message = { message, description, type }
      } else if ('message' in message) {
        _message = { description: null, type: 'default', ...message }
      }

      const animated = this.isAnimated(_message)
      this.setState({ message: _message }, () =>
        this.toggleVisibility(true, animated),
      )
      return
    }

    this.setState({ message: null, isHidding: false })
  }
  /**
   * Instace ref function to programmatically hide message
   *
   * ```
   * this.refs.YOUR_REF.hideMessage()
   * ```
   */
  hideMessage() {
    const animated = this.isAnimated(this.state.message)
    this.toggleVisibility(false, animated)
  }
  render() {
    const { message, visibleValue } = this.state

    const { accessible, accessibilityLabel } = this.props
    const renderBeforeContent = this.prop(message, 'renderBeforeContent')
    const renderCustomContent = this.prop(message, 'renderCustomContent')
    const renderAfterContent = this.prop(message, 'renderAfterContent')
    const style = this.prop(message, 'style')
    const textStyle = this.prop(message, 'textStyle')
    const titleStyle = this.prop(message, 'titleStyle')
    const titleProps = this.prop(message, 'titleProps')
    const textProps = this.prop(message, 'textProps')
    const iconProps = this.prop(message, 'iconProps')
    const floating = this.prop(message, 'floating')
    const position = 'bottom'
    const statusBarHeight = this.prop(message, 'statusBarHeight')
    const icon = this.prop(message, 'icon')
    const hideStatusBar = this.prop(message, 'hideStatusBar')
    const transitionConfig = this.prop(message, 'transitionConfig')
    const animated = this.isAnimated(message)
    const animStyle = animated ? transitionConfig(visibleValue, position) : {}

    return (
      <Animated.View pointerEvents="box-none" style={[styles.root, animStyle]}>
        {!!message && (
          <TouchableOpacity onPress={this.pressMessage} activeOpacity={1}>
            <DefaultFlash
              position={position}
              floating={floating}
              message={message}
              hideStatusBar={hideStatusBar}
              renderBeforeContent={renderBeforeContent}
              renderCustomContent={renderCustomContent}
              renderAfterContent={renderAfterContent}
              statusBarHeight={statusBarHeight}
              icon={icon}
              style={style}
              textStyle={textStyle}
              titleStyle={titleStyle}
              titleProps={titleProps}
              textProps={textProps}
              iconProps={iconProps}
              accessible={!!accessible}
              accessibilityLabel={accessibilityLabel}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
    )
  }
  _hideTimeout
  _id
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 99,
    bottom: 0,
  },
  rootTop: {
    top: 0,
  },
  rootBottom: {
    bottom: 0,
  },
  rootCenter: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultFlash: {
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#696969',
  },
  defaultFlashCenter: {
    margin: 44,
    borderRadius: 8,
    overflow: 'hidden',
  },
  defaultFlashFloating: {
    backgroundColor: '#E8FFF6',
    borderRadius: 10,
    margin: 15,
    marginBottom: BaseDimention.tabBarPaddingBottom + 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  defaultFlashWithIcon: {
    flexDirection: 'row',
  },
  flashText: {
    fontSize: 14,
    lineHeight: 18,
    color: '#0E1017',
  },
  flashTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  flashTitleWithIcon: {
    marginHorizontal: 35,
  },
  flashIcon: {
    position: 'absolute',
    top: -35,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: -5,
  },
})

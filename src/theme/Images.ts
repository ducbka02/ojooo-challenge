import { ThemeVariables } from '@/theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function Images(_: ThemeVariables) {
  return {
    IC_LEFT_ARROW: require('@/assets/images/commons/ic_left_arrow.png'),
    IC_CHEVRON_DOWN: require('@/assets/images/commons/chevron_small.png'),
    IC_FORWARD: require('@/assets/images/commons/ic_forward.png'),
    IC_NEXT: require('@/assets/images/commons/ic_arrow_right.png'),
    IC_PREV: require('@/assets/images/commons/ic_arrow_left.png'),
    CONGRATZ: require('@/assets/images/commons/congratz.png'),
    IC_CORRECT: require('@/assets/images/commons/ic_correct.png'),
  }
}

export type ThemeImages = ReturnType<typeof Images>

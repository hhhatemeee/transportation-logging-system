/**
 * These hooks re-implement the now removed useBlocker and usePrompt hooks in 'react-router-dom'.
 * Thanks for the idea @piecyk https://github.com/remix-run/react-router/issues/8139#issuecomment-953816315
 * Source: https://github.com/remix-run/react-router/commit/256cad70d3fd4500b1abcfea66f3ee622fb90874#diff-b60f1a2d4276b2a605c05e19816634111de2e8a4186fe9dd7de8e344b65ed4d3L344-L381
 */
import { BrowserHistory } from 'history'
import i18next from 'i18next'
import { useCallback, useContext, useEffect } from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom'
import Cookies from 'js-cookie'

/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @param  blocker
 * @param  when
 * @see https://reactrouter.com/api/useBlocker
 */
export function useBlocker(blocker: any, when = true) {
  const navigation = useContext(UNSAFE_NavigationContext).navigator as BrowserHistory

  useEffect(() => {
    if (!when) return

    const unblock = navigation.block(tx => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          // Automatically unblock the transition so it can play all the way
          // through before retrying it. TODO: Figure out how to re-enable
          // this block if the transition is cancelled for some reason.
          unblock()
          tx.retry()
        },
      }

      blocker(autoUnblockingTx)
    })

    return unblock
  }, [navigator, blocker, when])
}

type UsePropsOptions = {
  message?: string
  when: boolean
}
/**
 * Prompts the user with an Alert before they leave the current screen.
 *
 * @param  message
 * @param  when
 */
export function usePrompt({ message = i18next.t('notifications.leave'), when }: UsePropsOptions) {
  // Для возможности повторного получения токена
  const isToken = Boolean(Cookies.get('jwt'))

  const blocker = useCallback(
    (tx: any) => {
      // eslint-disable-next-line no-alert
      if (window.confirm(message)) tx.retry()
    },
    [message]
  )

  useBlocker(blocker, when && isToken)
}
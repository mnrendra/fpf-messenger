import { MessengerUserConst } from './ts'
import type { MessengerUser, MessengerOptions } from './ts'

/**
 * Figma Plugin Framework (FPF) for simplifying Figma Plugin message.
 * @see https://github.com/mnrendra/fpf-messenger
 */
class Messenger {
  /**
   * Create a messenger
   * @param {MessengerUser} user Value: `'plugin'` or `'ui'`
   * @param {MessengerOptions} options Value:
   * `{ origin: string, pluginId?: string }`. Default value `{ origin: '*' }`
   */
  constructor (
    user: MessengerUser,
    options: MessengerOptions = { origin: '*' }
  ) {
    this.#origin = options.origin
    this.#pluginId = options.pluginId

    switch (user) {
      // Plugin
      case MessengerUserConst.PLUGIN: {
        // Plugin - worker
        this.#worker = figma.ui

        // Plugin - postMessage
        this.postMessage = <Message = any>(message: Message) => {
          this.#worker.postMessage(message, { origin: this.#origin })
        }

        // Plugin - onMessage
        this.onMessage =
          <Message = any>(callback: (message: Message) => void) => {
            this.#worker.onmessage = (message: Message) => {
              callback(message)
            }
          }

        break
      }

      // UI
      case MessengerUserConst.UI: {
        // UI - worker
        this.#worker = parent

        // UI - postMessage
        this.postMessage = <Message = any>(message: Message) => {
          this.#worker.postMessage(
            this.#pluginId
              ? ({ pluginMessage: message, pluginId: this.#pluginId })
              : ({ pluginMessage: message }),
            this.#origin
          )
        }

        // UI - onMessage
        this.onMessage =
          <Message = any>(callback: (message: Message) => void) => {
            onmessage = (event: MessageEvent) => {
              const message = event?.data?.pluginMessage
                ? event.data.pluginMessage as Message
                : undefined
              message && callback(message)
            }
          }

        break
      }
    }
  }

  // private properties

  readonly #origin: string
  readonly #pluginId: string | undefined
  readonly #worker: Window | UIAPI

  // public properties

  /**
   * For posting a message.
   * @param {Message} message A message with `any` type
   */
  readonly postMessage: <Message = any>(message: Message) => void

  /**
   * For handling an incoming message.
   * @param {Function} callback A function with
   * `<Message = any>(message: Message) => void` type
   */
  readonly onMessage: <Message = any>(callback: (message: Message) => void) =>
  void
}

export default Messenger

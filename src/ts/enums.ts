export const MessengerUserConst = {
  PLUGIN: 'plugin',
  UI: 'ui'
} as const

export type MessengerUserEnum = typeof MessengerUserConst

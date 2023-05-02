import type { MessengerUserEnum } from './enums'
import type { Origin, PluginId } from './interfaces'

export type MessengerUser = MessengerUserEnum[keyof MessengerUserEnum]

export type BaseMessengerOptions<
  OriginType extends string,
  PluginIdProperty extends Partial<PluginId> = PluginId
> = Origin<OriginType> & PluginIdProperty

export type NullOriginOption = BaseMessengerOptions<'*', Partial<PluginId>>
export type NonNullOriginOption =
BaseMessengerOptions<string, Required<PluginId>>

export type MessengerOptions =
  | NullOriginOption
  | NonNullOriginOption

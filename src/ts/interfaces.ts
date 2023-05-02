export interface Origin<OriginType extends string> {
  origin: OriginType
}

export interface PluginId<PluginIdType extends string = string> {
  pluginId: PluginIdType
}

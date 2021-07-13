// Translated from
//   node_modules/@react-native-community/netinfo/lib/typescript/src/internal/types.d.ts
// using Flowgen v1.14.1 with --interface-records
declare module '@react-native-community/netinfo/types' {
  /**
   * Flowtype definitions for types
   * Generated by Flowgen from a Typescript Definition
   * Flowgen v1.14.1
   */

  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   * @format
   */

  declare export var NetInfoStateType: {|
    +unknown: 'unknown', // "unknown"
    +none: 'none', // "none"
    +cellular: 'cellular', // "cellular"
    +wifi: 'wifi', // "wifi"
    +bluetooth: 'bluetooth', // "bluetooth"
    +ethernet: 'ethernet', // "ethernet"
    +wimax: 'wimax', // "wimax"
    +vpn: 'vpn', // "vpn"
    +other: 'other', // "other"
  |};

  declare export var NetInfoCellularGeneration: {|
    +'2g': '2g', // "2g"
    +'3g': '3g', // "3g"
    +'4g': '4g', // "4g"
  |};
  declare export type NetInfoConnectedDetails = {
    isConnectionExpensive: boolean,
    ...
  };
  declare type NetInfoConnectedState<T: $Values<typeof NetInfoStateType>, D: { ... } = { ... }> = {|
    type: T,
    isConnected: true,
    isInternetReachable: boolean | null,
    details: {| ...D, ...NetInfoConnectedDetails |},
    isWifiEnabled?: boolean,
  |};
  declare type NetInfoDisconnectedState<T: $Values<typeof NetInfoStateType>> = {|
    type: T,
    isConnected: false,
    isInternetReachable: false,
    details: null,
  |};
  declare export type NetInfoUnknownState = {|
    type: typeof NetInfoStateType.unknown,
    isConnected: null,
    isInternetReachable: null,
    details: null,
  |};
  declare export type NetInfoNoConnectionState = NetInfoDisconnectedState<
    typeof NetInfoStateType.none, >;
  declare export type NetInfoDisconnectedStates = NetInfoUnknownState | NetInfoNoConnectionState;
  declare export type NetInfoCellularState = NetInfoConnectedState<
    typeof NetInfoStateType.cellular,
    {
      cellularGeneration: $Values<typeof NetInfoCellularGeneration> | null,
      carrier: string | null,
      ...
    }, >;
  declare export type NetInfoWifiState = NetInfoConnectedState<
    typeof NetInfoStateType.wifi,
    {
      ssid: string | null,
      bssid: string | null,
      strength: number | null,
      ipAddress: string | null,
      subnet: string | null,
      frequency: number | null,
      ...
    }, >;
  declare export type NetInfoBluetoothState = NetInfoConnectedState<
    typeof NetInfoStateType.bluetooth, >;
  declare export type NetInfoEthernetState = NetInfoConnectedState<
    typeof NetInfoStateType.ethernet,
    {
      ipAddress: string | null,
      subnet: string | null,
      ...
    }, >;
  declare export type NetInfoWimaxState = NetInfoConnectedState<typeof NetInfoStateType.wimax>;
  declare export type NetInfoVpnState = NetInfoConnectedState<typeof NetInfoStateType.vpn>;
  declare export type NetInfoOtherState = NetInfoConnectedState<typeof NetInfoStateType.other>;
  declare export type NetInfoConnectedStates =
    | NetInfoCellularState
    | NetInfoWifiState
    | NetInfoBluetoothState
    | NetInfoEthernetState
    | NetInfoWimaxState
    | NetInfoVpnState
    | NetInfoOtherState;
  declare export type NetInfoState = NetInfoDisconnectedStates | NetInfoConnectedStates;
  declare export type NetInfoChangeHandler = (state: NetInfoState) => void;
  declare export type NetInfoSubscription = () => void;
  declare export type NetInfoConfiguration = {|
    reachabilityUrl: string,
    reachabilityTest: (response: Response) => Promise<boolean>,
    reachabilityLongTimeout: number,
    reachabilityShortTimeout: number,
    reachabilityRequestTimeout: number,
  |};
  declare export {};
}

// Translated from
//   node_modules/@react-native-community/netinfo/lib/typescript/src/index.d.ts
// using Flowgen v1.14.1 with --interface-records
declare module '@react-native-community/netinfo' {
  /**
   * Flowtype definitions for index
   * Generated by Flowgen from a Typescript Definition
   * Flowgen v1.14.1
   */

  import type {
    NetInfoConfiguration,
    NetInfoState,
    NetInfoChangeHandler,
    NetInfoSubscription,
  } from '@react-native-community/netinfo/types';

  /**
   * Configures the library with the given configuration. Note that calling this will stop all
   * previously added listeners from being called again. It is best to call this right when your
   * application is started to avoid issues.
   * @param configuration The new configuration to set.
   */
  declare export function configure(configuration: $Rest<NetInfoConfiguration, { ... }>): void;

  /**
   * Returns a `Promise` that resolves to a `NetInfoState` object.
   * @param [requestedInterface] interface from which to obtain the information
   * @returns A Promise which contains the current connection state.
   */
  declare export function fetch(requestedInterface?: string): Promise<NetInfoState>;

  /**
   * Subscribe to connection information. The callback is called with a parameter of type
   * [`NetInfoState`](README.md#netinfostate) whenever the connection state changes. Your listener
   * will be called with the latest information soon after you subscribe and then with any
   * subsequent changes afterwards. You should not assume that the listener is called in the same
   * way across devices or platforms.
   * @param listener The listener which is called when the network state changes.
   * @returns A function which can be called to unsubscribe.
   */
  declare export function addEventListener(listener: NetInfoChangeHandler): NetInfoSubscription;

  /**
   * A React Hook which updates when the connection state changes.
   * @returns The connection state.
   */
  declare export function useNetInfo(
    configuration?: $Rest<NetInfoConfiguration, { ... }>,
  ): NetInfoState;
  declare export * from './internal/types'
  declare var _default: {
    configure: typeof configure,
    fetch: typeof fetch,
    addEventListener: typeof addEventListener,
    useNetInfo: typeof useNetInfo,
    ...
  };
  declare export default typeof _default;
}
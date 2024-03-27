import { MetamaskConnectionStatusEnum } from "../enums/MetamskEnums"

export default function getMetamaskConnectionStatus(
  connected: boolean,
  connecting: boolean
): MetamaskConnectionStatusEnum {
  if (!connected && connecting) {
    return MetamaskConnectionStatusEnum.WAITING
  } else if (connected && !connecting) {
    return MetamaskConnectionStatusEnum.CONNECTED
  } else {
    return MetamaskConnectionStatusEnum.REFUSED
  }
}

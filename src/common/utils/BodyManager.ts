import { MetamaskConnectionStatusEnum } from "../enums/MetamskEnums"

class BodyManager {
  constructor(
    private _body = document.body
  ) {} 

  public setScrollDirection(
    newScrollDirection: "Up" | "Down"
  ): void {
    this._body.setAttribute("data-scroll-direction", newScrollDirection)
  }

  public setMetamaskConnectionStatus(
    newMetamaskConnectionStatus: MetamaskConnectionStatusEnum
  ) {
    this._body.setAttribute("data-metamask-connection-status", newMetamaskConnectionStatus)
  }

  public getMetamaskConnectionStatus(){
    return this._body.dataset.metamaskConnectionStatus
  }

  public getScrollDirection() {
    return this._body.dataset.scrollDirection
  }
}

export default new BodyManager()
import { IGetPlayerData, IAdvancedNotifcation } from "./@types/client";
import { Common } from "./common/common";

export class Client extends Common {

  /**
   * @description Gets the player data of current client
   */
  GetPlayerData(): IGetPlayerData;

  /**
   * 
   * @param msg 
   * @param thisFrame 
   * @param beep 
   * @param duration 
   * @description Creates a native GTAV Help notification
   */
  ShowHelpNotification(msg: string, thisFrame: boolean, beep: boolean, duration: number )


  /**
   * @param sender
   * @param subject
   * @param msg
   * @param textureDict
   * @param iconType
   * @param flash
   * @param saveToBreif
   * @param hudColorIndex
   */
  ShowAdvancedNotification(): IAdvancedNotifcation;
}
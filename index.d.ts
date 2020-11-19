import { IGetPlayerData } from "./@types/client";
import { IAccount, XPlayer } from "./@types/server";
import { Common } from "./common/common";



// ================== CLIENT ================================
// ==========================================================


export class Client extends Common {

  /**
   * Gets the player data of current client
   */
  GetPlayerData(): IGetPlayerData;

  /**
   * This function checks if the player is loaded.
   */
  IsPlayerLoaded()

  /**
   * 
   * @param key 
   * @param val 
   */
  SetPlayerData(key, val)


  ShowInventory()


  /**
   * 
   * This function shows a basic notification to the player.
   */
  ShowNotification(msg: string, flash: boolean, saveToBreif: boolean, hudColorIndex: number)

  /**
   * This function triggers a server callback. See ESX.RegisterServerCallback on registering server callbacks.
   * 
   * This is an async function and must be treated as one, examples on how to properly use the async function callback is shown below.
   */
  TriggerServerCallback(name: string, cb: Function, args: any)

  /**
   * 
   * Creates a help notification
   */
  ShowHelpNotification(msg: string, thisFrame: boolean, beep: boolean, duration: number )


  /**
   * Creates an advanced notification. What else did you think?
   */
  ShowAdvancedNotification(sender: string, subject: string, msg: string, textureDict: string, iconType: number, flash: boolean, saveToBrief: boolean, hudColorIndex: number )
}


// ================== SERVER ================================
// ==========================================================
export class Server extends Common {
 
  GetPlayerFromId(source: any): XPlayer

}
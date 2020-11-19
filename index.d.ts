import { Game, IGetPlayerData, Scaleform, Streaming, Ui } from "./@types/client";
import { XPlayer } from "./@types/server";
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
  IsPlayerLoaded(): boolean;


  /**
   * This function sets player data.
   * @param key 
   * @param val 
   */
  SetPlayerData(key: string, val: any)

  /**
   * 
   * Creates a help notification
   */
  ShowHelpNotification(msg: string, thisFrame: boolean, beep: boolean, duration: number )

  /**
   * Creates an advanced notification. What else did you think?
   */
  ShowAdvancedNotification(sender: string, subject: string, msg: string, textureDict: string, iconType: number, flash: boolean, saveToBrief: boolean, hudColorIndex: number )

  /**
   * This function shows the inventory.
   */
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

  Game: Game;

  Scaleform: Scaleform;

  Streaming: Streaming;

  Ui: Ui;
}


// ================== SERVER ================================
// ==========================================================
export class Server extends Common {

  /**
   * This function creates a pickup.
   * @param type The pickup type, valid inputs: item_standard for items, item_money for cash, item_account for an account and item_weapon for weapons
   * @param name The name of either the item, account or weapon
   * @param count The count of the item, cash, account or weapon ammo
   * @param label The pickup label drawn
   * @param playerId The player server id who created the pickup, used to determine pickup spawn point
   * @param components Only used when type is item_weapon, an index-value table with components
   * @param tintIndex Only used when type is item_weapon, a tint index
   */
  CreatePickup(type: string, name: string, count: number, label, playerId: number, components: any[], tintIndex: number)

  /**
   * This function returns an item label.
   * @param item 	Item name
   */
  GetItemLabel(item: string)
 
  /**
   * This function gets a ESX player object from a server id. Returns null for invalid players
   * @param source The player server id
   */
  GetPlayerFromId(source: any): XPlayer

  /**
   * This function returns the ESX player from the Rockstar identifier. Returns null if no player is found.
   * @param identifier 
   */
  GetPlayerFromIdentifier(identifier: any)

  /**
   * This function returns an array of all online players ID's.
   * 
   * You can use this to access each players data.
   */
  GetPlayers()

  /**
   * This function registers a server callback.
   * @param name Server callback name
   * @param cb Callback function, which contains an varied size of arguments depending on how many arguments parsed from client
   */
  RegisterServerCallback(name: string, cb: Function)

  /**
   * This function registers an item as usable.
   * @param item Item to register as usable
   * @param cb Callback function
   */
  RegisterUsableItem(item: string, cb: Function)

  /**
   * This function saves the player to database. It is async, and a function (optional) is invoked once saving is complete.
   * @param xPlayer An ESX player
   * @param cb Callback function
   */
  SavePlayer(xPlayer: number | string, cb: Function)

  /**
   * This function saves all players to database. It is async, and a function (optional) is invoked once saving is complete.
   * @param cb Callback function
   */
  SavePlayers(cb: Function)

  /**
   * This function writes a trace if debugging is enabled in the configuration file.
   * @param msg Anything to print to console
   */
  Trace(msg: any)

  /**
   * This function is to force a player to use an item.
   * @param playerId Player server id
   * @param itemName An item
   */
  UseItem(playerId: number, itemName: string)
}
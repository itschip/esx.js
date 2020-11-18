import { IGetPlayerData } from "./@types/client";
import { IAccount, ServerXPlayer } from "./@types/server";
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
 
  GetPlayerFromId(source): ServerXPlayer

  /**
   * This function adds account money.
   * @param account An valid account, a list of valid accounts can be found in the configuration file
   * @param money 	Amount of money to add
   */
  addAccountMoney(account: string, money: number)

  /**
   * This function adds an inventory item.
   * @param item 	Item name
   * @param count Amount of item to add
   */
  addInventoryItem(item: string, count: number)

  /**
   * This function adds money.
   * @param money Amount of money to add
   */
  addMoney(money: number)

  /**
   * This function adds a weapon.
   * @param weaponName Weapon name
   * @param ammo 	Ammo count
   */
  addWeapon(weaponName: string, ammo: number)

  /**
   * This function adds the parsed ammo to the player weapon
   * @param weaponName Weapon name
   * @param ammoCount Ammo to add
   */
  addWeaponAmmo(weaponName: string, ammoCount: number)


  /**
   * This function adds a weapon component to a weapon, if the player has it, the available component list can be found in the weapon configuration file.
   * @example xPlayer.addWeapon('WEAPON_ASSAULTRIFLE', 50)
xPlayer.addWeaponComponent('WEAPON_ASSAULTRIFLE', 'clip_drum')
   * @param weaponName 
   * @param weaponComponent 
   */
  addWeaponComponent(weaponName: string, weaponComponent: string)

  /**
   * This function is used to determinate if a player can carry an item, and is the successor to the previous item limit checks
   * @param item Item name
   * @param count Item count
   */
  canCarryItem(item: string, count: number)

  /**
   * This function is used to determinate if a player can swap an item for some other item.
   * @param firstItem 	First item name
   * @param firstItemCount First item count
   * @param testItem Test item name
   * @param testItemCount Test item count
   * @example if xPlayer.canSwapItem('bread', 1, 'water', 1) then
                xPlayer.removeInventoryItem('bread', 1)
                xPlayer.addInventoryItem('water', 1)
              else
                xPlayer.showNotification('You don\'t have enough inventory space.')
              end
   */
  canSwapItem(firstItem: string, firstItemCount: number, testItem: string, testItemCount: number)

  getAccount(account: string): IAccount

}
export class XPlayer {
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

  
  /**
   * This function gets details (returned in an table) for an account.
   * @param account 
   */
  getAccount(account: string): IAccount

  /**
   * The returned table contains an index-value table of all accounts, and for each child there is a key-value tabl with the following content: 
   * @field name - Account name
   * @field money - Account balance
   * @field label - Account label
   */
  getAccounts(): IAccounts

  /**
   * This function returns the player's current coordinates on the server. The optional boolean useVector argument is for returning a vector3 type. Keep in mind that the coords sync interval can be adjusted in the configuration file in case you want to get precise player coords.
   * @param useVector Returns an vector3 type if set to true, and normally a table with x, y and z pairs
   */
  getCoords(useVector: boolean)

  /**
   * This function gets the current player group.
   */
  getGroup()

  /**
   * This function returns the Rockstar identifier used
   */
  getIdentifier()

  /**
   * 
   * @param minimal 	Return inventory in a key-value table where key is item name, and only add items with count over 0 to that table.
   */
  getInventory(minimal: boolean): IGetInventory

  /**
   * This function gets an inventory item.
   * @param item Item name
   */
  getInventoryItem(item: string): IGetInventoryItem

  /**
   * This function returns the current player job object.
   * @field id
   * @field name
   * @field label
   * @field grade
   * @field grade_name
   * @field grade_label
   * @field grade_salary
   * @field skin_male
   * @field skin_female
   */
  getJob(): IGetJob

  /**
   * This function returns the player loadout.
   * 
   * The returned table contains an index-value table, and for each child there is a key-value table with the following content:
   * @field name
   * @field ammo
   * @field label
   * @field components
   */
  getLoadout(): IGetLoadout

  /**
   * This function gets missing accounts. It's an internal function used when saving player data to database and should not be used.
   * @param cb 	Callback function with missingAccounts (index-value table) as argument
   * 
   * The returned table contains an index-value table, and for each child there is a key-value table with the following content: Key: Account name | Value:  Account label
   */
  getMissingAccounts(cb: Function) 

  /**
   * This function gets the current cash balance.
   */
  getMoney()

  /**
   * This function returns the player name.
   */
  getName()

  /**
   * This functions returns the loadoutNum and a weapon object for the weapon if the player has it.
   * @param weaponName 
   * @example 
   const {loadoutNum, weapopn} = xPlayer.getWeapon('WEAPON_PISTOL')

    if (weapon) {
        console.log(xPlayer.loadout[loadoutNum].label)
    } else {
        console.log('weapon not found!')
    }
   */
  getWeapon(weaponName: string)

  /**
   * This functions returns the current player weight in a number type, can be used to do calculations.
   */
  getWeight()

  /**
   * This functions returns if the player has the specified weapon.
   * @param weaponName 
   */
  hasWeapon(weaponName: string)

  /**
   * This functions returns an boolean if the player has the specified weapon component for a given weapon. The available component list can be found in the weapon configuration file (config.weapons.lua).
   * @param weaponName 
   * @param weaponComponent 
   */
  hasWeaponComponent(weaponName: string, weaponComponent: string)

  /**
   * This function kicks a player with a reason.
   * @param reason Kick reason, will be shown to player
   */
  kick(reason: string)

  /**
   * This function removes account money.
   * @param account Valid accounts can be found in configuration file
   * @param money Amount of money
   */
  removeAccountMoney(account: string, money: number)

  /**
   * This function removes an inventory item.
   * @param item Item name, valid items can be found in database table items
   * @param count Amount of the item to remove
   */
  removeInventoryItem(item: string, count: number)

  /**
   * 
   * @param money Amount of money to remove
   */
  removeMoney(money: number)

  /**
   * 
   * @param weaponName Weapon name
   */
  removeWeapon(weaponName: string)

  /**
   * This function removes the parsed ammo to the player weapon
   * @param weaponName Weapon name
   * @param ammoCount Ammo count
   */
  removeWeaponAmmo(weaponName: string, ammoCount: number)

  /**
   * This function removes a weapon component from a player, if the player has it. The available component list can be found in the weapon configuration file (config.weapons.lua).
   * @param weaponName Weapon name
   * @param weaponComponent Weapon component
   */
  removeWeaponComponent(weaponName: string, weaponComponent: string)

  /**
   * This function sets money for an account.
   * @param account 	Valid accounts can be found in configuration file
   * @param money Amount of money
   */
  setAccountMoney(account: string, money: number)

  /**
   * This function sets the player's coords (teleports)
   * 
   * The coords to be teleported to. Supports both vector3 and table types. If using a table type you can also specify heading to set the entity heading upon teleportation
   * @param x 
   * @param y 
   * @param z 
   */
  setCoords(x: number, y: number, z: number)

  /**
   * This function sets an inventory item count
   * 
   * WARNING: This function will not check if the player weight limit exceeds. Recommended to use in comibation with xPlayer.canCarryItem(item, count)
   * @param item Item name, valid items can be found in database table items
   * @param count New item count
   */
  setInventoryItem(item: string, count: number)

  /**
   * This functions sets the player job, the job must be defined in the jobs database table.
   * @param name Job name
   * @param grade Job grade
   */
  setJob(name: string, grade: string | number)

  /**
   * This functions sets the max weight that the player can hold in their inventory.
   * @param newWeight New max weight
   * @example 
    if xPlayer.group != 'user' {
      xPlayer.setMaxWeight(ESX.GetConfig().MaxWeight + 30)
    }
   */
  setMaxWeight(newWeight: number);

  /**
   * 
   * @param money This function sets the player cash balance.
   */
  setMoney(money: number)

  /**
   * This function sets the player name.
   * @param newName New player name
   */
  setName(newName: string)

  /**
   * This function sets the player weapon tint from the tint index
   * @param weaponName Weapon name
   * @param weaponTintIndex Weapon tint index
   */
  setWeaponTint(weaponName: string, weaponTintIndex: number)

  /**
   * This function shows a help notification with a message. These help notification support displaying button inputs, see this list
   * @param msg The message to display
   * @param thisFrame Only show this frame? Should be used with scripts that show notifications in a loop
   * @param beep Play the beep sound?
   * @param duration Duration to show the help notification in milliseconds
   */
  showHelpNotification(msg: string, thisFrame: boolean, beep: boolean, duration: number)

  /**
   * This function shows a basic notification to the player.
   * @param msg The message to display
   * @param flash Flash the notification?
   * @param saveToBrief Save to breif? Located in Pause Menu > Help
   * @param hudColorIndex The background color, see https://gyazo.com/68bd384455fceb0a85a8729e48216e15 for available colors
   */
  showNotification(msg: string, flash: boolean, saveToBrief: boolean, hudColorIndex: number)

  /**
   * This function triggers an client event for the player.
   * @param eventName Event name
   * @param args Variable number of arguments
   */
  triggerEvent(eventName: string, args: any)

  /**
   * This is an internal function used to update player coords, do not use it.
   * @param x 
   * @param y 
   * @param z 
   */
  updateCoords(x: number, y: number, z: number)
}
declare interface IAccount {
  name: string;
  money: number;
  label: string;
}

declare interface IAccounts {
  name: string
  money: number;
  label: string;
}

/**
 * @param name hello there
 */
declare interface IGetInventory {
  name: string;
  count: number;
  label: string;
  weight: number;
  usable: boolean;
  rare: boolean;
  canRemove: boolean;
}

declare interface IGetInventoryItem {
  name: string;
  count: number;
  label: string;
  weight: number;
  usable: boolean;
  rare: boolean;
  canRemove: boolean;
}

declare interface IGetJob {
  id: number;
  name: string;
  label: string;
  grade: number;
  grade_name: string;
  grade_label: string;
  grade_salary: number;
  skin_male: any[];
  skin_female: any[]
}

declare interface IGetLoadout {
  name: string;
  ammo: number;
  label: string;
  components: any[];
}

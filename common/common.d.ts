export class Common {
  /**
   * This function clears a timeout from the ESX.SetTimeout function.
   * @param id 
   */
  ClearTimeout(id: string | number) 

  /**
   * This function dumps the given array to a readable string with a tree structure.
   * @param array 
   */
  DumpTable(array: any[])

  /**
   * This function gets a random string, with the defined length.
   * @param length 
   */
  GetRandomString(length: number)

  /**
   * 
   * @param weaponName 
   * @param weaponComponent 
   */
  GetWeaponComponent(weaponName: string | number, weaponComponent: string): IWeaponComponent

  /**
   * This function gets the weapon label for a given weapon
   * @param weaponName 
   */
  GetWeaponLabel(weaponName: string): string;

  /**
   * This function gets the complete weapon list and label.
   */
  GetWeaponList(): IWeapon[];

  /**
   * This function sets a timeout requiring two arguments, msec (milliseconds), and cb (callback).
   * @param milliseconds
   * @param callback
   */
  SetTimeout(milliseconds: number, callback: Function);

  Math: ICommonMath;

}

declare interface IWeapon {
  name: string;
  label: string;
  components: IWeaponComponent[];
}
declare interface IWeaponComponent {
  name: string;
  hash: number;
  label: string;
}

declare class ICommonMath {
  /**
   * This function groups numbers, making them easier to understand by humans. Used in most nofications when money is showed, for example when buying a new car at the vehicle shop.
   * @param number
   */
  GroupDigits(number: number): string;

  /**
   * This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0)
   * @param value
   * @param numDecimalPlaces
   */
  Round(value: number, numDecimalPlaces?: number): number;

  /**
   * This function trims an text, removing all trailing whitespaces. Often used when sanitizing the GetVehicleNumberPlateText() native.
   * @param value
   */
  Trim(value: string): string;
}

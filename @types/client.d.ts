export class Game {

  /**
   * This function deletes an object.
   * @param object The object handle
   */
  DeleteObject(object: string)

  /**
   * This function deletes the parsed vehicle.
   * @param vehicle The vehicle handle
   */
  DeleteVehicle(vehicle)

  /**
   * This function returns the closest object handle, and distance to the object.
   * @param coords Coords to search at
   * @param modelFilter Enables whitelist mode for getting closest object. The table must be key-value where the key is the model hash, and value set to true.
   */
  GetClosestObject(coords: Coords, modelFilter: string | string[]): [number, number];
  
  
  
  /**
   * This function returns the closest ped handle, and distance to the ped.
   * @param coords Coords to search at
   * @param modelFilter Enables whitelist mode for getting closest ped. The table must be key-value where the key is the model hash, and value set to true.
   */
  GetClosestPed(coords: Coords, modelFilter?: string[]): [number, number];

  /**
   * Coords to search at
   * @param coord 
   */
  GetClosestPlayer(coord: Coords)

  /**
   * This function gets the closest vehicle.
   * @param coords
   */
  GetClosestVehicle(coords: Coords): [number, number];

  /**
   * This function gets all objects found in the game world.
   */
  GetObject(): [number]

  /**
   * This function generates a Mugshot of the current player usable in various applications.
   * @param ped
   */
  GetPedMugshot(ped: number): [number, string];

  /**
   * This function gets all peds found in the game world.
   * @param onlyOtherPeds Only return other peds than your own ped?
   */
  GetPeds(onlyOtherPeds: boolean): number[];

  /**
   * 	Only return other players than yourself?
   * @param onlyOtherPlayers Only return other players than yourself?
   * @param returnKeyValue If set to true it will return in a key-value arry where key is player client id and key being the ped handle. Otherwise it create a index-value array, with value being either the ped handle or client id depending on returnPeds
   * @param returnPeds If set to true it will return the ped handle for that player, otherwise it will return the player client id
   */
  GetPlayers(onlyOtherPlayers: boolean, returnKeyValue: boolean, returnPeds: boolean)

  /**
   * This function gets all players within the max distance of a coord.
   * @param coords The coords to search at
   * @param maxDistance The maxmimum search distance
   */
  GetPlayersInArea(coords: Coords, maxDistance: number)

  /**
   * This function gets the closest vehicle in the player's direction within 5 units, utilizes ray-casts.
   */
  GetVehicleInDirection()

  /**
   * This function gets an vehicle's properties.
   * @param vehicle 
   */
  GetVehicleProperties(vehicle: any): any;

  /**
   * Returns all vehicles in the world.
   */
  GetVehicles(): number[];

  /**
   * This function gets all vehicles within the max distance of a coord.
   * @param coords The coords to search at
   * @param maxDistance The maxmimum search distance
   */
  GetVehiclesInArea(coords: Coords, maxDistance: number)

  /**
   * Returns a boolean if the spawn point coords area is clear from vehicles within the max distance.
   * @param coords The coords to search at 
   * @param maxDistance The maxmimum search distance
   */
  IsSpawnPointClear(coords: Coords, maxDistance: number)

  /**
   * This function sets various properties for an vehicle object.
   *
   * See https://esx-framework.github.io/es_extended/client/functions/game/setvehicleproperties/ for more information
   * @param vehicle 
   * @param props 
   */
  SetVehicleProperties(vehicle, props): any

  /**
   * This function spawns a local object, which is only visible to the local player and no one else.
   * @param modelOrHash	You can either specify a model, for example prop_cs_cuffs_01, or a object hash
   * @param coords The coords where the object should be spawned. You can also parse an vector type without any issues
   * @param cb The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.
   */
  SpawnLocalObject(modelOrHash: string | number, coords: Coords, cb: Function)

  /**
   * This function spawns a local vehicle, which is only visible to the local player and no one else.
   * @param modelOrHash You can either specify a model, for example blista, or a vehicle hash.
   * @param coords The coords where the vehicle should be spawned. You can also parse an vector type without any issues
   * @param heading The heading of the spawned vehicle, must contain a decimal
   * @param cb The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle
   */
  SpawnLocalVehicle(modelOrHash: string | number, coords: Coords, heading: number, cb: Function)

}

export declare interface IGetPlayerData {
  job: IGetPlayerDataJob;
  identifier: string;
  inventory: IGetPlayerDataInventory[];
  loadout: any[];
  lastPosition: {
    x: number;
    y: string;
    z: number;
  }
  accounts: IGetPlayerDataAccounts[];
}

declare interface IGetPlayerDataJob {
  name: string;
  grade: number;
  grade_name: string;
  grade_salary: number;
  label: string;
  skin_female: any[];
  skin_male: any[]
}

declare interface IGetPlayerDataInventory {
  count: number;
  rare: boolean;
  limit: number;
  name: string;
  usable: boolean;
  canRemove: boolean;
}

declare interface IGetPlayerDataAccounts {
  money: number;
  name: string;
  label: string;
}

declare interface Coords {
  x: number;
  y: number;
  z: number;
}
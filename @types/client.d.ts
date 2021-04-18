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
   * @param coords The coords where the vehicle should be spawned.
   * @param heading The heading of the spawned vehicle, must contain a decimal
   * @param cb The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle
   */
  SpawnLocalVehicle(modelOrHash: string | number, coords: Coords, heading: number, cb: Function)

  /**
   * This function spawns an object visible to everyone on the server.
   * @param modelOrHash You can either specify a model, for example prop_cs_cuffs_01, or a object hash
   * @param coords The coords where the object should be spawned. 
   * @param cb The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.
   */
  SpawnObject(modelOrHash: string | number, coords: Coords, cb: Function);

  /**
   * This function spawns an vehicle visible to everyone on the server.
   * @param modelOrHash You can either specify a model, for example blista, or a vehicle hash.
   * @param coords The coords where the vehicle should be spawned. 
   * @param heading The heading of the spawned vehicle, must contain a decimal
   * @param cb The returned function when the vehicle has been spawned. The invoked function has one argument, which is the vehicle handle
   */
  SpawnVehicle(modelOrHash: string | number, coords: Coords, heading: number, cb: Function)

  /**
   * This function teleports an entity.
   * @param entity The entity to teleport
   * @param coords The coords to be teleported to.
   * @param cb The returned function when the entity has been teleported
   */
  Teleport(entity: string, coords: Coords, cb: Function)

  Utils: GameUtils
}

declare class GameUtils {
  /**
   * This function draws 3D text on the specified coords. Must be drawn every frame, ideally in a loop. size and font arguments are optional.
   * @param coords The coords where the text should be.
   * @param text The text that will be display.
   * @param size The text size.
   * @param font The font type.
   */
  DrawText3D(coords: Coords, text: string, size: number, font: string)
}

export class Scaleform {
  /**
   * This function shows the 'Breaking News' scaleform used multiple times in the campaign.
   * @param title Title text
   * @param msg Message text, supports HTML syntax
   * @param bottom Footer text, supports HTML syntax
   * @param sec Time in seconds to show scaleform
   */
  ShowBreakingNews(title: string, msg: string, bottom: string, sec: number)

  /**
   * This function displays a freemode message for the player.
   * @param title Title text
   * @param msg Message text
   * @param sec Time in seconds to show scaleform
   */
  ShowFreemodeMessage(title: string, msg: string, sec: number)

  /**
   * This function shows a basic popup warning, like the quit confirmation warning.
   * @param title Title text
   * @param msg Message text
   * @param bottom Footer text
   * @param sec Time in seconds to show scaleform
   */
  ShowPopupWarning(title: string, msg: string, bottom: string, sec: number)

  /**
   * This function starts the traffic scaleform movie used in the campaign.
   * @param sec Time in seconds to show scaleform
   */
  ShowTrafficMovie(sec: number)

  Utils: ScaleformUtils
}

declare class ScaleformUtils {
  /**
   * This function requests and returns a scaleform handle for the movie parsed.
   * @param movie The movie name
   */
  RequestScaleformMovie(movie: string)
}

export class Streaming {
  /**
   * This function requests and returns the nimation directory parsed. A very common usage it to play animations using TaskPlayAnim(). You can use Alex Guirre's Animations List found on Github.
   * 
   * https://alexguirre.github.io/animations-list/
   * @param animDict 
   * @param cb 
   */
  RequestAnimDict(animDict: string, cb: Function)

  /**
   * This function requests and returns the animation set parsed. Animation sets provide movement styles, commonly used with SetPedMovementClipset().
   * @param animSet 
   * @param cb 
   */
  RequestAnimSet(animSet: any, cb: Function)

  /**
   * This function requests and returns the specified model parsed, a very common usage is spawning objects, etc.
   * @param model 
   * @param cb 
   */
  RequestModel(model: string | number, cb: Function)

  /**
   * 
   * @param assetName 
   * @param cb 
   */
  RequestNamedPtfxAsset(assetName: string | number, cb: Function)

  /**
   * This function requests and returns the texture directory parsed. This is commonly used when loading sprites, then draw them on screen using DrawSprite(), an example would be drawing a speedometer.
   * @param textureDict 
   * @param cb 
   */
  RequestStreamedTextureDict(textureDict: string | number, cb: Function)
  
  /**
   * 
   * @param weaponHash 
   * @param cb 
   */
  RequestWeaponAsset(weaponHash: string | number, cb: Function)
}

export class UI {
  /**
   * This function shows an inventory item notification.
   * @param add 
   * @param item 
   * @param count 
   */
  ShowInventoryItemNotification(add: any, item: string | number, count: number)

  Hud: HUD

  Menu: Menu
}

declare class HUD {
  /**
   * This function registers a HUD element.
   * @param name 
   * @param index 
   * @param priority 
   * @param html 
   * @param data 
   */
  RegisterElement(name: string, index: number, priority: string, html: any, data: any)

  /**
   * This function removes a HUD element.
   * @param name 
   */
  RemoveElement(name: string | number)

  /**
   * This function sets the HUD opacity.
   * @param opacity 
   */
  SetDisplay(opacity: number)

  /**
   * This function updates HUD elements.
   * @param name 
   * @param data 
   */
  UpdateElement(name: string , data: any)
}

declare class Menu {
  /**
   * This function closes a menu.
   * @param type 
   * @param namespace 
   * @param name 
   */
  Close(type: string | number, namespace: string, name: string)

  /**
   * This function closes all open menus.
   */
  CloseAll()

  /**
   * This function gets all opened menus.
   * @param type 
   * @param namespace 
   * @param name 
   */
  GetOpened(type: string | number, namespace: string, name: string)

  /**
   * This function checks if a menu is open.
   * @param type 
   * @param namespace 
   * @param name 
   */
  IsOpen(type: string | number, namespace: string, name: string)

  /**
   * This function opens a menu.
   * @param type 
   * @param namespace 
   * @param name 
   * @param data 
   * @param submit 
   * @param cancel 
   * @param change 
   * @param close 
   */
  Open(type: string | number, namespace: string, name: string, data: any, submit: any, cancel: any, change: string, close: string)

  /**
   * This function registers a menu type.
   * @param type 
   * @param open 
   * @param close 
   */
  RegisterType(type: string | number, open: any, close: any)
}

export declare interface IGetPlayerData {
  job: IGetPlayerDataJob;
  identifier: string;
  maxWeight: number;
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
  grade_label: string;
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

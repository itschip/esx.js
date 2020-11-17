export declare interface IGetPlayerData {
  job: IGetPlayerDataJob;
}

export declare interface IGetPlayerDataJob {
  grade_label: string;
  name: string;
  label: string;
}

export declare interface IAdvancedNotifcation {
  sender: string; 
  subject: string;  
  msg: string; 
  textureDict: string; 
  iconType: number; 
  flash: boolean;
  saveToBrief: boolean;
  hudColorIndex: number;

}
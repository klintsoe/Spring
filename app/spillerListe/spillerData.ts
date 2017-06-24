import {IMatch} from './matchDataI';

export interface ISpiller {
  navn: string ;
  id : number;
  kampListe : IMatch[];
  score : number;
  korrektion : number;
  leader : boolean;
  active : boolean;
}
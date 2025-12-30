import { isFormGroup } from "@angular/forms";
import { Chibi } from "./chibi";

export interface SceneChibi extends Chibi {
  isMuted: boolean;
  delay:number;
}
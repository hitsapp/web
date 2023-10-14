import { Hit } from "./hit";

export interface HitResponse {
  success: boolean;
  message: string;
  data: Hit[];
}

import { validate } from "validators/base";
import HomeModel from "models/homeModel";

export function validateHomeData(data) {
  return validate(HomeModel, data);
}

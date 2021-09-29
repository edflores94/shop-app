import { validate } from "validators/base";
import MenuModel from "models/menuModel";

export function validateMenuData(data) {
  return validate(MenuModel, data);
}

import { validate } from "validators/base";
import FooterModel from "models/footerModel";

export function validateFooterData(data) {
  return validate(FooterModel, data);
}

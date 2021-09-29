export function validate(schema, object, isPrimitiveType = false) {
  let isValid = true;
  if (isPrimitiveType) {
    if (typeof object !== schema.type) {
      isValid = false;
    }
  } else {
    const objectKeys = Object.keys(schema);

    for (let i = 0; i < objectKeys.length; i++) {
      let key = objectKeys[i];

      if (typeof object[key] !== "undefined" && object[key] !== null) {
        const type = schema[key].type;
        if (typeof object[key] !== type) {
          isValid = false;
        }
        if (schema[key].properties) {
          isValid = validate(schema[key].properties, object[key]);
        }
        if (schema[key].isArray) {
          for (let i = 0; i < object[key].length; i++) {
            if (schema[key].item.properties) {
              isValid = validate(schema[key].item.properties, object[key][i]);
            } else {
              isValid = validate(schema[key].item, object[key][i], true);
            }

            if (!isValid) {
              break;
            }
          }
        }
      } else if (!schema[key].optional) {
        isValid = false;
      }

      if (!isValid) {
        break;
      }
    }
  }
  return isValid;
}

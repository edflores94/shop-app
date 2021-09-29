const MenuModel = {
  items: {
    type: "object",
    optional: false,
    isArray: true,
    item: {
      type: "object",
      optional: false,
      properties: {
        label: {
          type: "string",
          optional: false
        },
        href: {
          type: "string",
          optional: false
        },
        icon: {
          type: "string",
          optional: false
        }
      }
    }
  }
};

export default MenuModel;

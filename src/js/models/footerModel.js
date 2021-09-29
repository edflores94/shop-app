const FooterModel = {
  elements: {
    type: "object",
    optional: false,
    isArray: true,
    item: {
      type: "object",
      optional: false,
      properties: {
        title: {
          type: "string",
          optional: false
        },
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
              url: {
                type: "string",
                optional: false
              }
            }
          }
        }
      }
    }
  },
  copyright: {
    type: "object",
    optional: false,
    properties: {
      appName: {
        type: "string",
        optional: false
      },
      address: {
        type: "string",
        optional: false
      },
      rights: {
        type: "string",
        optional: false
      }
    }
  }
};

export default FooterModel;

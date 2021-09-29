const HomeModel = {
  title: {
    type: "string",
    optional: false
  },
  carouselItems: {
    type: "object",
    optional: false,
    isArray: true,
    item: {
      type: "object",
      optional: false,
      properties: {
        name: {
          type: "string",
          optional: false
        },
        caption: {
          type: "string",
          optional: false
        },
        contentPosition: {
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
              image: {
                type: "string",
                optional: false
              }
            }
          }
        }
      }
    }
  }
};

export default HomeModel;

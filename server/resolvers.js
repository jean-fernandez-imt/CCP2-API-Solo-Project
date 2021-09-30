const data = require("./data");

const resolvers = {
  Query: {
    Terran: () => {
      return data.terran;
    },

    Protoss: () => {
      return data.protoss;
    },

    Zerg: () => {
      return data.zerg;
    },
  },
};

module.exports = resolvers;

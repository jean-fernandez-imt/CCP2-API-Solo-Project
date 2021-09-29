const data = require("./data");

const resolvers = {
  Query: {
    Test: () => {
      return data.terran.units;
    },
  },
};

module.exports = resolvers;

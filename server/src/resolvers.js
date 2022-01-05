const todoData = require("../data/todos.json");
// const { paginateResults } = require("./utils");

const Query = {
  hello: (parent, args, context, info) => {
    return "helloooo";
  },
  todos: async (parent, args, context, info) => {
    return todoData;
  },
};

const resolvers = {
  Query,
};

module.exports = {
  resolvers,
};

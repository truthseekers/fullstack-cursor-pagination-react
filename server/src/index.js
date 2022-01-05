const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const express = require("express");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");

const app = express();
const httpServer = http.createServer(app);
const corsOptions = {
  credentials: true,
  origin: ["https://studio.apollographql.com", "http://localhost:3000"],
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startServer = async () => {
  await server.start();

  server.applyMiddleware({ app, cors: corsOptions });

  app.listen({ port: 4000 }, () =>
    console.log(
      `graphql server ready at http://localhost:4000${server.graphqlPath}`
    )
  );
};

startServer();

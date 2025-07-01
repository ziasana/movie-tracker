import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { mongodbConnection } from "./db/mongodbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

// MongoDB connection
mongodbConnection();

// Apollo Server setup
async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}
startApolloServer();

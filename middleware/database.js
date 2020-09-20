import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://foodapp:5HzMKxejAsY8ziv7@cluster0.fbhyx.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('foodapp');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;


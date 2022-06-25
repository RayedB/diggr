import { MongoClient, Db } from 'mongodb';
import config from '@/config';


export const db: { games?:  } = {};

let client
export default async () => {
  client = await MongoClient.connect(config.databaseURL);
  return client;
};

export const db: Db = client.db('diggr')

// export const db = () => connection.db("diggr")

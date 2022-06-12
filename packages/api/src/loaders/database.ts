import { MongoClient, Db } from 'mongodb';
import config from '@/config';

export default async (): Promise<Db> => {
  const connection = await MongoClient.connect(config.databaseURL);
  return connection.db("diggr");
};

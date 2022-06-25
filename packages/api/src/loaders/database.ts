import { MongoClient, Db } from 'mongodb';
import config from '@/config';


let client
export default async () => {
  client = await MongoClient.connect(config.databaseURL);
  return client.db('diggr');
};

export const db = () => (client.db('diggr'))

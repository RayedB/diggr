import { MongoClient, Db } from 'mongodb';
import config from '@/config';

let client

export default async (): Promise<void> => {
  client = await MongoClient.connect(config.databaseURL);
};

export const db = (): Db => client.db("diggr")

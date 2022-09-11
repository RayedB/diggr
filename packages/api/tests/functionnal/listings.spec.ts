import { MongoClient } from 'mongodb';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017/diggr-tests')
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });


  beforeEach(async () => {
    await db.collection('listings').deleteMany({});
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('listings');
  
    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);
  
    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongo = new MongoMemoryServer();

export async function connect(): Promise<void> {
  const uri = await mongo.getConnectionString();

  await mongoose.connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
}

export async function closeDatabase(): Promise<void> {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
}

export async function clearDatabase(): Promise<void> {
  const collections = mongoose.connection.collections;
  const collectionsDeleted = Object.keys(collections).map((collection) => {
    return collections[collection].drop();
  });
  try {
    await Promise.all(collectionsDeleted);
  } catch (err) {}
}

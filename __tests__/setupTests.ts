import { clearDatabase, closeDatabase, connect } from './utils/dbHandler';

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

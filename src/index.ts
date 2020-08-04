import app from './app';
import { createConnection } from 'typeorm';

async function init() {
  try {
    await createConnection();
    console.log('Postgres is Online');
  } catch (err) {
    console.log('Error Creating Postgres Connection:', err.message);
  }

  app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
}

init();

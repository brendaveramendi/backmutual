import "reflect-metadata";
import app from './app';
import { AppDataSource } from "./db";
// import {PORT} from './config'
require('dotenv').config();

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Database Connected...');
    app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))
  } catch (error) {
    console.error(error);
  }
}
main();
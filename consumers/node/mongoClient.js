const { MongoClient } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'benchmark';

const client = new MongoClient(url);

async function connect() {
    try {
        const db = await client.connect();
        console.log("Connected successfully to server");
        return db;
    } catch(error) {
        console.log('Error connecting to mongo', error);
    }
}

const insertResult = async (result) => {
  const db = await connect();
  try {
      await   db.collection('results').insertOne(result);
  } catch(error) {
      console.log(`Error whilst writing to mongo`, error);
  }
};

module.exports = {
    insertResult
};
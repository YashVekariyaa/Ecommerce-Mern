const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://yash:333@cluster0.mfdlcwp.mongodb.net/shop?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function deleteAllDocuments() {
    try {
      await client.connect();
      const collection = client.db('shop').collection('users');
  
      // Delete all documents in the collection
      const result = await collection.deleteMany({});
  
      console.log(`${result.deletedCount} documents were deleted.`);
    } finally {
      // Close the connection to the database
      await client.close();
    }
  }

deleteAllDocuments();

const { MongoClient } = require("mongodb");
const { priyanshu } = require("./records");

const URL =
  "mongodb+srv://namastenode123:namastenode123@namaste-node.4wmws.mongodb.net/";
const client = new MongoClient(URL);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Users");

  // const allData = await collection.find({}).toArray();
  // console.log('Found documents =>', allData);

  // const filteredData = await collection.find({"first_name":"Tushar"}).toArray();
  // console.log('Found documents =>', filteredData);

    // const insertResult = await collection.insertMany([priyanshu]);
    // console.log("Inserted documents =>", insertResult);

    const updateResult = await collection.updateOne({first_name:"Priyanshu"}, {$set: {last_name:"Yashank"}});
    console.log("Updated documents =>", updateResult);


//   const deleteResult = await collection.deleteMany(priyanshu);
//   console.log("Deleted documents =>", deleteResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//NOTES :

//Go to mongodb
//Create a free M0 cluster
//Create a user
//Install Mongodb compass

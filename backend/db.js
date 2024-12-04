// // // // const mongoose =require('mongoose');
// // // // // const url=
// // // // const url='mongodb://localhost:27017/';


// // // // const mongoDB=async()=>{

// // // //     try{

// // // //         mongoose.connect(url,()=>{
// // // //             console.log("Connected Successfully");
// // // //         });
// // // //     }
// // // //     catch(error)
// // // //     {
// // // //         console.log(error)
// // // //         process.exit()
// // // //     }
// // // // }

// // // // // module.exports=mongoDB;
// // // // module.exports=mongoDB;

// // // const mongoose = require('mongoose');
// // // const mongoURI = "mongodb://localhost:27017"

// // // const mongoDB = async () => {
// // //     try {
// // //         // mongoose.set('strictQuery', false)
// // //         await mongoose.connect(mongoURI)
// // //         console.log('Mongo connected')

// // //         // console.log("chal raha hai");
// // //         let fetched_data = mongoose.connection.db.collection("fooditem");
// // //         // fetched_data.find({}).toArray(fuc)
// // //         // let data=await fetched_data.find({}).toArray(function(err,data){
// // //         //     if(err){
// // //         //         console.log(err);
// // //         //     }
// // //         //     else{
// // //         //         console.log(data);
// // //         //     }
// // //         // })
// // //         let data = await fetched_data.find({}).toArray()
// // //         console.log(data);

// // //     }
// // //     catch (error) {
// // //         console.log('err', error)
// // //         process.exit()
// // //     };
// // // }
// // // module.exports = mongoDB;


// // const mongoose = require('mongoose');
// // // const{MongoClient}=require('mongodb');
// // const mongoURI = "mongodb://localhost:27017";
// // const mongoDB = async () => {
// //     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
// //         if (err) {
// //             console.log("....", err)
// //         }
// //         else {
// //             console.log("connected");
// //             const fetch_data=await mongoose.connection.db.collection("fooditem");
// //             fetch_data.find({}).toArray(function(err,data){
// //                 if(err){
// //                     console.log(err);
// //                 }
// //                 else{
// //                     console.log(data);
// //                 }
// //             })
// //         }
// //     });
// // }
// // module.exports=mongoDB();


// // const mongoose = require('mongoose');
// // const mongoURI = 'mongodb://localhost:27017/goFood'
// // const mongoDB = async () => {
// //     await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
// //         // console.log()
// //         if (err) console.log("----", err)
// //         else {
// //             console.log(connected);

// //         }
// //     });
// // }
// // module.exports = mongoDB;

// // const mongoose = require('mongoose');

// // async function mongoDB() {
// //     try {
// //         await mongoose.connect('mongodb://localhost:27017/goFood');
// //         console.log('MongoDB connected');
// //     } catch (err) {
// //         console.error('Error connecting to MongoDB:', err);
// //         const fetched_data=await mongoose.connection.db.collection("fooditem");
// //         // fetched_data.find({})
// //         fetched_data.find({}).toArray(function(err,data)
// //     {
// //         if(err) console.log(err);
// //         else console.log(data);
// //     })
// //     }
// // }
// // async function mongoDB() {
// //   try {
// //     await mongoose.connect('mongodb://0.0+.0.0:27017/goFood');

// //     console.log('MongoDB connected');


// //     const fetched_data = await mongoose.connection.db.collection('fooditem').find({}).toArray();
// //     // console.log(fetched_data);
// //   } catch (err) {
// //     console.error('Error connecting to MongoDB:', err);
// //   }
// // }

// // mongoDB();


// // module.exports = mongoDB;

// const mongoose = require('mongoose');

// /*async function mongoDB() {
//   try {
//     // Connect to MongoDB using the correct connection string
//     await mongoose.connect('mongodb://localhost:27017/goFood', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });

//     console.log('MongoDB connected');

//     // Access the collection and fetch data
//     const fooditemCollection = mongoose.connection.db.collection('fooditem');
//     const fetched_data = await fooditemCollection.find().toArray();

//     // const foodCategor
//     // const foodCategory=mongoose.connection.db.collection('f')
//     const foodCategory=mongoose.connection.db.collection('foodCategory');
//     // const foodCate=await foodCategory.find()
//     // const foodCa=await foodCategory./
//     // const foodCa=await foodCategory.find().toArray();
//     foodCategory.find({}).toArray(function (err,catData){
//         if(err) console.log(err);
//         else{
//           global.food_items=fetched_data;
//           global.foodCate=catData;

//         }
//     })
//     // Do something with the fetched data
//     // console.log(fetched_data);
//     // global/
//     // global.fooditem=fetched_data;
//     // console.log(global.fooditem);
    
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }*/
// // const 
// // const 
// // const mongoURo/
// // const mongoURI="";

// /*

// const mongoURI='mongodb://localhost:27017/goFood';
// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, { userNewUrlParser: true }, async (err, result) => {
//     if (err) console.log("---", err)
//     else {
//       console.log("connected");
//       // const fetched_data
//       // const fetched_data=await mongoose.connection.db.collection("fo")
//       const fetch_data = await mongoose.connection.db.collection("fooditem");
//       // fetch_data.find({/})
//       // fetch_data.find({}).toArray(function(err,a))
//       // fetch_data.find({}).toArray(function(er))
//       // fetch_data.find({}).toArray/
//       fetch_data.find({}).toArray(async function (err, data) {
//         const Category = await mongoose.connection.db.collection("foodCategory");
//         // Category/
//         // Ca/]\\
//         Category.find({}).toArray(function (err,catData){

//           // if(err) console.log
//           // if(err) console.lo/
//           if(err) console.log(err);
//           else{
//             global.fooditem=data;
//           }
//         })
//       })

//     }
//   })
// }
// mongoDB();

// module.exports = mongoDB;


// // const mongoURI=
// const mongoURI = 'mongodb://localhost:27017/goFood';
// // const mongoDB=async()=>
// // const mongoDB=async()=>
// const mongoDB = async () => {
//   try {
//     // await mongoose.connect(mongoURI,{userNewUrlParser:true});
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     // const fetch_data=await mongoose,
//     // const fetch_data=await mongoose
//     // const fetch_data=await mongoos/
//     // const fetch_data=await mongoose.connection.db.collection("food/")
//     // cosnt
//     // const/
//     // c/
//     // const fetch_data=await mongoose.cone/
//     // const fetch_data = await mongoose.connection.db.collection("fooditem");
//     const fetch_data = await mongoose.connection.db.collection("fooditem");
//     // console.log(fetch_data);
    
//     // const data=await fetch_data.find/
//     // cosnt/
//     // const data=await fetch_da/
//     // const data//
//     const data = await fetch_data.find({}).toArray();
//     // const Category=awao
//     const Category = await mongoose.connection.db.collection("foodCategory");
//     const catData = await Category.find({}).toArray();
    
//     // global
//     // glob/

//     // global.fooditem/
//     global.fooditem = data;


//   }
//   // catch(err)
//   catch (err) {
//     // console.log/
//     // console.log("Error Connecting to MongoDB: ",err)
//     // console/
//     // console.log("Er")
//     // 
//     // console.log()
//     // confirm/
//     // c/
//     // console.error/
//     console.error("Error connecting to MongoDB : ", err);
//   }
// };
// // mongoDB();
// mongoDB();
// // module.exports=mongoDB;
// module.exports = mongoDB;

// const mongoURI = 'mongodb://localhost:27017/goFood';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     /*const fetch_data = await mongoose.connection.db.collection("fooditem");
//     const data = await fetch_data.find({}).toArray();
//     // console.log(data);
    

//     const Category = await mongoose.connection.db.collection("foodCategory");
//     const catData = await Category.find({}).toArray();

//     global.fooditem = data;
//     // console.log(global.fooditem)
//     // global.foodCate
//     // global.foodCategory=catData;
//     global.foodCategory=catData;
//     */
//     const fetched_data = await mongoose.connection.db.collection("fooditem");
//     //  fetched_data
//     // fetched_data/
//     // f/
//     // 
//     fetched_data.find({}).toArray(async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection("foodCategory");
//       // foodCategory.find({}).toArray
//       // food/
//       foodCategory.find({}).toArray(function (err, catData) {
//         if (err) console.log(err);
//         else {
//           global.fooditem = data;
//           global.foodCategory = catData;
//         }
//       })
//     })
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };

// mongoDB();

// module.exports = mongoDB;

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/goFood';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("fooditem").find({}).toArray();
    const catData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    global.fooditem = fetched_data;
    global.foodCategory = catData;

    console.log("Data successfully loaded into global variables.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

mongoDB();

module.exports = mongoDB;

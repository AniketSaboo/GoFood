//app.js
const express = require('express');

// const cors=re/
const cors = require('cors');
const app = express();
const PORT = 5000;
// const { MongoClient } = require('mongodb');
const mongoDB = require("./db")
console.log("Chal raha hai");
app.use(cors({ origin: 'http://localhost:3000' }));

// app.use/
// app.use(req,res,nwxr)/
// app.use(reqm/)
// ap/
// app.use(req.)
// app//
// app/

// app.use(req,res,next//)
// app.use(())
// app.ise/
// app.use((req,rwa/))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        // "Origin"
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

mongoDB();

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
// app.use('/api', require("./Routes/loginuser"));
// app//
// app.use//
app.use('/api', require("./Routes/DisplayData"));

// app.ue/
// app.use('/api',require//)
// app.use('/api',require("./Routes/OrderData"))
app.use('api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running,and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);


/*mongoDB().then(() => {
    app.listen(PORT, (error) => {
        if (!error) {
            console.log("Server is Successfully Running,and App is listening on port " + PORT)
        }
        else {
            console.log("Error occurred,server can't start", error);
        }
    });

}).catch(error => {
    console.error("Error connecting to MongoDB: ", error)
});

app.get('/', (req, res) => {
    // res.status(200);
    res.status(200);
    res.send("Welcome to root URL of Server");
});
22*/



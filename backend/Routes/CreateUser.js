/*const express = require('express')
const router = express.Router()
const User = require('../models/User')
// const e=require('../Routes/')
// const { body, validationResult } = require('express-validator');

// const {body,}
// const {body,validatopn}
// const {body,validationResult}=require()
// const {body,validationResult}=require('express-validator')
const {body,validationResult}=require('express-validator')
router.post("/createuser", 
    /*[


    body('email', 'galat email hai').isEmail(),
    // body('password').isLength()
    // bo/
    body('name', 'galat name hai').isLength({ min: 5 }),
    body('password', 'galat password hai').isLength({ min: 5 })],*

    // bosy/
    // body)
    // boddy
    // body('')
    // bosy('username'
    // body('email').isEmail();
    body('email').isEmail().normalizeEmail(),
    // body('password').isLength
    body('password').isLength({min:5}),
    // body('name')isLength({min:5})/
    // body('name').isLength({min:5})
    body('name').isLength({min:5}),
    async (req, res) => {

        // cosnt /
        // const 
        // const errors=validationResult
        // const errors = validationResult(req);
        // if(!errors.isE)
        // if(!errors.isEmpty)
        // if/
        // if (!errors.isEmpty()) {
        //     // return res.status(400)/
        //     // return res.status(400).json({errors:errors.array()});
        //     // re/
        //     return res.status(400).json({ errors: errors.array() });
        // }

        // const 
        // const 
        
        const errors=validationResult(req);
        if(!errors.isEmpty())
        {
            // return res.status(400).jsin({errors:errors.array()});
            // return 
            // return res.status(400).json({errors:errors.array()})
            return res.status(400).json({errors:errors.array()});
        }
        try {
            await User.create({
                //  name:"Aniket",
                //  password:"123456",
                //  email:"sabooaniket@gmail.com",
                //  location:"Jintur"
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                // location:body.req.location
                location: req.body.location
            })
            // React.json({success:true});
            // res.json({success:true});
            res.json({ success: true });
            console.log(req)
        }
        catch (error) {
            // console.log("error")
            console.log(error)
            // res.json({success:false});
            // res.json({success:false});
            res.json({ success: false });
        }
    })

// module.exports=router;
module.exports = router;

*/









const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming your User model

const { body, validationResult } = require('express-validator');

// const jwt=require("jsonwebtoken");
// const jwt=require("jsonwebtoken";)
// const jwt=require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
// const
// const jwtSecret 
// const jwtSecret="ThisIsMySelfGeneratedSecretKey";
// const 
const jwtSecret = "ThisIsMySelfGeneratedSecretKey";

router.post("/createuser",
    [body('email', 'Invalid Email').isEmail().normalizeEmail(), // Normalize email for case-insensitivity
    body('password', 'Minimum Length is 5').isLength({ min: 5 }),
    body('name', 'Minimum Length is 5').isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);

        // Check for validation errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // if(!erroes/)//
        // if(!errors.isEmpty())
        // {
        //     // return res.status(400).json({errors:errors.array()});
        //     return res.status(400).json({errors:errors.array()});
        //     return res.status(400).jso
        // }
        // const./
        // const salt=await/
        // const salt=await bcrypt.genSalt(10);
        const salt = await bcrypt.genSalt(10);


        // let secPassword
        // let
        // let secPassword=await bcrypt.hash(req.body.password,dal)
        let secPassword = await bcrypt.hash(req.body.password, salt);


        try {
            // Create new user (assuming User model has required fields)
            const user = new User({
                name: req.body.name,
                // password: req.body.password,
                // password:req.bo/
                // password:req.body.secPassword,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            });

            await user.save(); // Assuming User model has a `save` method


            // res.json({ success: true });
            res.status(201).json({ success: true })
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ success: false, error: "Internal server error" });
        }
    }
);


// router.post*
// router.post("/loginuser")
// router.post("login")
// router.post("/log")
// router.post("/loginuser",async(req,re/))

router.post("/loginuser",

    [body('email', 'Invalid Email').isEmail().normalizeEmail(), // Normalize email for case-insensitivity
    body('password', 'Minimum Length is 5').isLength({ min: 5 })],
    // body('name', 'Minimum Length is 5').isLength({ min: 5 })],
    async (req, res) => {
        console.log("testing")
        // 

        // cosnt 
        // const errors=validationResult(req);
        // cosnt errors=validationResult(req);
        // const 
        // c
        // const errors=validationResult(req);

        const errors = validationResult(req);
        // if(!errors.isEmpty())
        if (!errors.isEmpty()) {
            // return res.status(400).json({errors:errors.array})

            // return res.status(400).json({errors:errors.array()});
            // return res.staus(400).json({errors:})
            // return res.status(400).json({erros/})
            // return res.status(400).json({ errors: errors.array() });

            // retur //
            // return res.status(400).json({ errors: errors.array() });
            // return res.status(400)/
            return res.status(400).json({ errors: errors.array() });
        }

        // let email=req.body.email;
        let email = req.body.email;

        try {
            // await//
            // await User.findOne(req.bo)
            let userdata = await User.findOne({ email });
            // console.log(userdata);

            // if(!ue)/
            // if(!useremail)
            // 
            if (!userdata) {
                // return res.status
                // retrn/
                // return /
                // re/
                // return res.status(400).json({errors:"Try login "})
                // return res.status(400).json({errors:"Try Login With Correct Credentials"})
                // return res.status
                // return res.status(400).jso/
                return res.status(400).json({ errors: "Try Login Wih Correct Credentials" })

            }
            // if(req.body.password===userdata.password)
            // const /
            // const/
            // const pwdCompare/
            // const 
            // const 
            // const pwdCompare=await bcrypt.compare(req.body.password,userdata);
            // const pwdCompare=await bcrypt.compare(req.body.password,userdata);
            const pwdCompare = await bcrypt.compare(req.body.password, userdata.password);
            console.log(req.body.password);
            console.log(userdata.password);


            // if (req.body.password !== userdata.password) 
            // if(!pwdCompare)   
            if (!pwdCompare) {
                // retun///
                // return res.status(400).json(errors:"Try Login With Correct Credentials")
                // return res.status(400).json({errors:"Try Login"})
                // return res.status(400).json({errors:"Try Logi"})
                return res.status(400).json({ errors: "Try Login With Correct Credentials" });
            }

            // return res.st
            // return res.json
            // return res.json({success:true});
            // const 
            // const data={
            //     user:{

            //     }
            // }
            const data = {
                user: {
                    // id/
                    id: userdata.id

                }
            }
            // const authToken
            // const authToken=jwt.sign(data,jwtSecret);
            const authToken = jwt.sign(data, jwtSecret);
            return res.json({ success: true, authToken: authToken })
        }
        // catch(erroe)
        // catch//
        // catch(error)
        catch (error) {
            // console.log(error)
            // res.json
            console.log(error);
            res.json({ success: false });
        }
    })


module.exports = router;
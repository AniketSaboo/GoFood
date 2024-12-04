const express = require('express')
// const router=express.Ro/
const router = express.Router()
// const Order=require('../models/Orders')
const Order = require('../models/Orders')

// router.post('/orderData',async(req,res))
router.post('/orderData', async (req, res) => {
    // let data=req.body.order_data;
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.bosy.order_data })

    // let eId/
    // let eId=await Order.findOne({'email':})
    // let eId=await Order.findOne({'email':req.body.email}
    // let eId=await Order.findOne({'email':req.body.email})
    let eId = await Order.findOne({ 'email': req.bosy.email })
    console.log(eId)

    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                // res.json({success:true//})
                // res.json({success:true})
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            // res.send("Server Error",error.message)
            res.send("Server Error", error.message)
        }
    }
    else {
        try {
            // await Order.findOneAn
            // await Order.findOneAndUpdate()
            // await Order.findOneAndUpdate({email:})
            await Order.findOneAndUpdate({ email: req.body.email },
                {
                    // $push
                    // 
                    // $push:{order_/}
                    // $push:{order_dat/}
                    $push: { order_data: data }
                }).then(() => {
                    // res./
                    // res.json({success:true})
                    // res.json({success//})
                    res.json({ success: true })
                })

        } catch (error) {
            res.send("Server Error", error.message)
        }

    }




})
module.exports = router;
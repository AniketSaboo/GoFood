const express = require('express');
const router = express.Router();

// routte/
//foodData 
// router.post("/fooddata", (req, res) => {
//     try {
//         // console.log(global.fooditem)
//         // res.send([global.fooditem,global.foodCate])
//         // res.send([global.fooditem,glov/])
//         res.send([global.fooditem, global.foodCategory])
//         // res.send([global.fooditem])
//     }
//     catch (err) {
//         // console//
//         // cpnsole
//         // console.error/
//         // 
//         console.error(error.message);
//         res.send("Server Error")


//     }
// })

router.post("/fooddata", (req, res) => {
    try {
        if (!global.fooditem || !global.foodCategory) {
            return res.status(500).send({ error: "Data not loaded yet. Please try again later." });
        }
        // res.send([global.fooditem, global.foodCategory]);
        res.send([global.foodCategory, global.fooditem]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


// module.exports = router;
// moduel/
// modduel/
// module.export/
// module/
// module/
// module.exports=router;
// module.e/
// module.exports=router/
// module.exports=router/


module.exports = router;



// Route to fetch food data
/*router.post("/fooddata", (req, res) => {
    try {
        // Check if global variables are initialized
        if (!global.fooditem || !global.foodCategory) {
            return res.status(500).json({
                error: "Data not loaded yet. Please try again later."
            });
        }

        // Send the food data and category data
        res.status(200).json({
            foodItems: global.fooditem,
            foodCategories: global.foodCategory
        });
    } catch (err) {
        // Log and handle errors
        console.error("Error fetching food data:", err.message);
        res.status(500).send("Server Error");
    }
});*/

// Export the router
module.exports = router;

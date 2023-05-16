const router = require ("express").Router()
const hotels = require ('../controllers/hotel.js')

//CREATE
router.post("/api/createHotel", hotels.createHotel);

//UPDATE
router.put("/api/updateHotel/:id", hotels.updateHotel);
//DELETE
router.delete("/api/deleteHotel/:id", hotels.deleteHotel);
//GET

router.get("/api/find",hotels.getHotel);
//GET ALL



module.exports={hotels:router}
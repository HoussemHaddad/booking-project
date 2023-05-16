const Hotel = require ("../models/Hotel.js");


exports.createHotel = async(req,res)=>{
  console.log(req.body)
    try {
        const savedHotel = await new Hotel.save();
        res.status(200).send({msg: "cool", savedHotel});
      } catch (error) {
    res.status(500).send(err)
      }
    };
    exports.updateHotel = async (req, res) => {
        try {
          const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
          res.status(200).send({msg: "cool", updatedHotel});
        } catch (error) {
      res.status(500).send(error)
        }
      };
      exports.deleteHotel = async (req, res) => {
        try {
        const delhotel =  await Hotel.findByIdAndDelete(req.params.id);
          res.status(200).send({msg: "cool", delhotel});
        } catch (error) {
      res.status(500).send(error)
        }
      };
      exports.getHotel = async (req, res) => {
        try {
          const gethotel = await Hotel.findById(req.params.id);
          res.status(200).send({msg: "cool", gethotel});
        } catch (error) {
      res.status(500).send(error)
        }
      };
      

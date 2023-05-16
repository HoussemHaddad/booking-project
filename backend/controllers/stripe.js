const stripe =require("stripe")
module.exports ={
    paymentt:async(req,res)=>{
      var quantity=1
      console.log(req.body,'tttt')
        const { product } = req.body; 
  const session = await stripe.checkout.sessions.create({ 
    payment_method_types: ["card"], 
    line_items: [ 
      { 
        price_data: { 
          currency: "USD", 
          product_data: { 
            name: 'test', 
          }, 
          unit_amount: 1000, 
        }, 
        quantity: quantity, 
      }, 
    ], 
    mode: "payment", 
    success_url: "http://localhost:3000/success", 
    cancel_url: "http://localhost:3000/cancel",
        })
        res.status(200).send (session)
    }
}
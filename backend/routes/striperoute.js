const router = require('express').Router()
const session = require('../controllers/stripe')

router.post("/api/checkstripe",session.paymentt)

module.exports={checkoutrouter:router}
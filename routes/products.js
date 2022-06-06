const express = require('express');
const app = express() 
const router = express.Router()
const Products = require('../models/product_schema')
var cors = require('cors')

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") 
    next()
})

// app.use('/Productsgories', cors(), api)

// Getting all
router.get('/', async (req, res) => {
   try {
       const Productss = await Products.find()
       res.json(Productss)
   }catch (err) {
       res.status(500).json({message: err.message})
   }
})

// Getting All 

// Getting one
router.get('/:id', getProducts, (req, res) => {
    res.send(res.Products.name);
   //  res.send(res.subscriber);
})

// Creating one
router.post('/', async (req, res) => {
     const Productss = new Products({
        name: req.body.name,
        discription: req.body.discription,
        permalink: req.body.permalink,
        location: req.body.location,
        price: req.body.price,
        discount: req.body.discount,
        taxstatus: req.body.taxstatus,
        taxclass: req.body.taxclass,
        currency: req.body.currency
     })
     try {
       const newProducts = await Productss.save()
       res.status(201).json( newProducts )
     } catch (err) {
       res.status(400).json({ message: err.message })
     }
})


// Updating one
router.patch('/:id', getProducts, async (req, res) => {
   if (req.body.name != null) {
       res.Products.name = req.body.name
   }
   if (req.body.subscribedToChannel != null) {
       res.Products.subscribedToChannel = req.body.subscribedToChannel
   }    
   try {
       const updatedSubscriber = await res.Products.save()
       res.json(updatedSubscriber)
   } catch (err) {
       res.status(400).json({ message: err.message })
   }
})

// // Deleteing one
router.delete('/:id', getProducts, async (req, res) => {
    try {
        await res.Products.remove()
        res.json( { message: 'Deleted Productss'})
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}) 


async function getProducts(req, res, next) {
    let Products
    try {
        Products = await Products.findById(req.params.id)
        if (Products == null) {
            res.status(404).json({ message: "No Productsgory found."})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.Products = Products
    next()

}

module.exports = router

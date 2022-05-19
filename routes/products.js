const express = require('express');
const app = express() 
const router = express.Router()
const Cate = require('../models/product_schema')
var cors = require('cors')

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*") 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") 
//     next()
// })

// app.use('/categories', cors(), api)

// Getting all
router.get('/', async (req, res) => {
   try {
       const cates = await Cate.find()
       res.json(cates)
   }catch (err) {
       res.status(500).json({message: err.message})
   }
})

// Getting All 

// Getting one
router.get('/:id', getCategories, (req, res) => {
    res.send(res.cate.name);
   //  res.send(res.subscriber);
})

// Creating one
router.post('/', async (req, res) => {
     const cates = new Cate({
        cateName: req.body.cateName,
        cateDiscription: req.body.cateDiscription,
        cateDiscription: req.body.cateDiscription,
        cateSlug: req.body.cateSlug,
        catPermalink: req.body.catPermalink
     })
     try {
       const newCate = await cates.save()
       res.status(201).json( newCate )
     } catch (err) {
       res.status(400).json({ message: err.message })
     }
})


// Updating one
router.patch('/:id', getCategories, async (req, res) => {
   if (req.body.name != null) {
       res.cate.name = req.body.name
   }
   if (req.body.subscribedToChannel != null) {
       res.cate.subscribedToChannel = req.body.subscribedToChannel
   }    
   try {
       const updatedSubscriber = await res.cate.save()
       res.json(updatedSubscriber)
   } catch (err) {
       res.status(400).json({ message: err.message })
   }
})

// // Deleteing one
router.delete('/:id', getCategories, async (req, res) => {
    try {
        await res.cate.remove()
        res.json( { message: 'Deleted cates'})
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
}) 


async function getCategories(req, res, next) {
    let cate
    try {
        cate = await Cate.findById(req.params.id)
        if (cate == null) {
            res.status(404).json({ message: "No Category found."})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.cate = cate
    next()

}

module.exports = router

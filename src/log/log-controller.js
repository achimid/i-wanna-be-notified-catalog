const router = require('express').Router()
const { OK } = require('http-status-codes')


router.post('/', (req, res) => {
    res.send()
    console.log(req.body.extractedContent)    
})


module.exports = router
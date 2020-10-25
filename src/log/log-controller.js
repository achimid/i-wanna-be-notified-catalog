const router = require('express').Router()
const { OK } = require('http-status-codes')


router.post('/', (req, res) => {
    res.send()
    console.log(req.body.extractedTargetNormalized)    
})


module.exports = router
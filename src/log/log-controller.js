const router = require('express').Router()

let buffer = []

router.post('/', (req, res) => {
    res.send()
    
    const e = req.body
    const log = `${e.uuid} | ${e.url} | ${e.extractedContent[0]}`

    buffer.push(log)    
})

setInterval(() => {
    console.log(buffer)
    buffer = []
}, 30000)


module.exports = router
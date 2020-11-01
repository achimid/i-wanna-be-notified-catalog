const router = require('express').Router()

let buffer = []

router.post('/', (req, res) => {
    res.send()
    
    const e = req.body
    const log = `${e.extractedContent[0]}`
    // console.log(e.url)
    console.log(log)

    // buffer.push(log)    
    // console.log(e.extractedContent.length > 0)
    // if (e.extractedContent.length == 0) {
    //     console.log(e)
    // }
})

// setInterval(() => {
//     console.log(buffer)
//     buffer = []
// }, 30000)


module.exports = router
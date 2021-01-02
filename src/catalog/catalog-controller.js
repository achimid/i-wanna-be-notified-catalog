const router = require('express').Router()
const { OK, CREATED } = require('http-status-codes').StatusCodes

const service = require('./catalog-service')

router.post('/catalog', (req, res) => {
    console.log('Criando nova informação de catalog')
    service.create(req.body)
        .then(catalog => res.status(CREATED).send(catalog))
})

router.post('/catalog/integration', (req, res) => {
    console.log('Criando nova informação de catalog - integração')
    service.createFromIntegration(req.body)
        .then(catalog => res.status(CREATED).send(catalog))
})

router.get('/:api', (req, res) => {
    console.log(`Buscando informações [api=${req.params.api}]`)
    service.search(req.params.api, req.query)
        .then(catalog => res.status(OK).send({ catalog }))
})

module.exports = router